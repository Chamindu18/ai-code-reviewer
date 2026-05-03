// axios is used to call the Anthropic API (no official TypeScript SDK yet)
import axios from 'axios';
// zod validates that the AI returned exactly what we expect
import { z } from 'zod';
import { env } from '../config/env';
import { logger } from '../config/logger';

// Define the exact shape of a suggestion using a Zod schema
const SuggestionSchema = z.object({
  file: z.string(),
  line: z.number(),
  category: z.enum(['code_smell', 'security', 'readability', 'performance']),
  severity: z.enum(['low', 'medium', 'high']),
  message: z.string(),
  explanation: z.string(),
});

// Export the TypeScript type inferred from the Zod schema
export type AISuggestion = z.infer<typeof SuggestionSchema>;

// The system prompt tells Claude exactly what to do and how to format the response
const SYSTEM_PROMPT = `You are an expert code reviewer. Analyze the provided code diff and return a JSON array of suggestions.

Each suggestion must have:
- file: filename
- line: line number (approximate)
- category: one of "code_smell", "security", "readability", "performance"
- severity: one of "low", "medium", "high"
- message: short one-line issue title
- explanation: 2-3 sentence plain English explanation

Rules:
- Return ONLY valid JSON array. No markdown, no explanation outside JSON.
- If no issues are found, return an empty array [].`;

/**
 * Send a code diff to Claude and get back a validated list of suggestions.
 */
export async function reviewDiff(diff: string): Promise<AISuggestion[]> {
  // Guard against enormous diffs: clip to 100k characters to avoid token limits
  const safeDiff = diff.length > 100_000
    ? diff.slice(0, 100_000) + '\n...[truncated]'
    : diff;

  // POST to the Anthropic Messages API
  const response = await axios.post(
    'https://api.anthropic.com/v1/messages',
    {
      model: 'claude-3-5-sonnet-20241022',   // Use the latest Claude 3.5 Sonnet model ID
      max_tokens: 4000,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: `Review this diff:\n\n${safeDiff}` }],
    },
    {
      headers: {
        'x-api-key': env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',   // required by Anthropic
        'Content-Type': 'application/json',
      },
    }
  );

  // Anthropic returns an array of content blocks; the text is inside response.data.content[0]
  const text = response.data.content[0].text;
  // Parse the JSON string returned by the AI
  const parsed = JSON.parse(text);
  // Validate with Zod – this throws if the shape doesn't match, preventing bugs downstream
  return z.array(SuggestionSchema).parse(parsed);
}