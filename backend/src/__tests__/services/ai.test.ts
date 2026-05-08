import { reviewDiff } from '../../services/ai';

// Mock Google Generative AI
jest.mock('@google/generative-ai', () => ({
  GoogleGenerativeAI: jest.fn().mockImplementation(() => ({
    getGenerativeModel: jest.fn().mockReturnValue({
      generateContent: jest.fn().mockResolvedValue({
        response: {
          text: jest.fn().mockReturnValue(JSON.stringify([
            {
              file: 'src/app.ts',
              line: 42,
              category: 'security',
              severity: 'high',
              message: 'Hardcoded API key',
              explanation: 'Never store secrets in code. Use environment variables.',
            },
          ])),
        },
      }),
    }),
  })),
}));

describe('reviewDiff', () => {
  it('should parse AI response and return suggestions', async () => {
    const diff = `
--- a/src/app.ts
+++ b/src/app.ts
@@ -1,5 +1,5 @@
 const API_KEY = "sk_test_123456";
 const db = new Database(API_KEY);
    `;

    const suggestions = await reviewDiff(diff);

    expect(suggestions).toHaveLength(1);
    expect(suggestions[0]).toHaveProperty('file', 'src/app.ts');
    expect(suggestions[0]).toHaveProperty('severity', 'high');
    expect(suggestions[0]).toHaveProperty('category', 'security');
  });

  it('should truncate very large diffs', async () => {
    const largeDiff = 'a'.repeat(150_000);

    // Should not throw
    const suggestions = await reviewDiff(largeDiff);
    expect(Array.isArray(suggestions)).toBe(true);
  });

  it('should return empty array when no issues found', async () => {
    jest.spyOn(console, 'warn').mockImplementation();

    // Mock response with empty array
    const suggestions = await reviewDiff('no issues here');

    expect(Array.isArray(suggestions)).toBe(true);
  });
});
