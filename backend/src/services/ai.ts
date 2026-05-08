// 1. Import Google’s official Gemini SDK
import { GoogleGenerativeAI } from "@google/generative-ai";

// 2. Import Zod for runtime validation of the AI’s output
import { z } from "zod";

// 3. Import our validated environment variables
import { env } from "../config/env";

// (Logger is not used in this version, but you could add it if needed)
// import { logger } from "../config/logger";

// 4. Define the exact shape of a suggestion
const SuggestionSchema = z.object({
  file: z.string(),                                           // which file
  line: z.number(),                                           // approximate line number
  category: z.enum(["code_smell", "security", "readability", "performance"]),
  severity: z.enum(["low", "medium", "high"]),
  message: z.string(),                                        // short title
  explanation: z.string(),                                    // 2‑3 sentence explanation
});

// 5. Export the TypeScript type inferred from the Zod schema
export type AISuggestion = z.infer<typeof SuggestionSchema>;

/**
 * System prompt that tells Gemini exactly how to respond.
 * It’s crucial to ask for “ONLY JSON array” so we can parse it easily.
 */
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
 * Main function: sends a code diff to Gemini and returns a validated array of suggestions.
 */
export async function reviewDiff(diff: string): Promise<AISuggestion[]> {
  // 6. Truncate the diff to 100k characters to stay within token limits
  const safeDiff =
    diff.length > 100_000
      ? diff.slice(0, 100_000) + "\n...[truncated]"
      : diff;

  // 7. Create a Gemini API client using the API key from .env
  const genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY);

  // 8. Choose the model — gemini-1.5-flash is fast, cheap, and great for this task
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // 9. Call Gemini
  const result = await model.generateContent({
    // Contents: a simple array with one user message that includes the system prompt and the diff
    contents: [
      {
        role: "user",
        parts: [{ text: `${SYSTEM_PROMPT}\n\nReview this diff:\n\n${safeDiff}` }],
      },
    ],
    // Generation config: limit output length and keep the temperature low for deterministic responses
    generationConfig: {
      maxOutputTokens: 4000,
      temperature: 0.2,
    },
  });

  // 10. Extract the raw text from the response
  const text = result.response.text();

  // 11. Gemini sometimes wraps JSON in markdown code fences (```json ... ```)
  //     We use a regex to find the first JSON array in the text.
  const jsonMatch = text.match(/\[[\s\S]*\]/);
  const cleanedJson = jsonMatch ? jsonMatch[0] : text;

  // 12. Parse the JSON string into a JavaScript array
  const parsed = JSON.parse(cleanedJson);

  // 13. Validate the shape of the parsed data with Zod.
  //     If the AI returned an unexpected shape, this will throw a clear error.
  return z.array(SuggestionSchema).parse(parsed);
}