declare module "unicode-lang" {
  interface LanguageScore {
    language: string;
    confidence: number;
    score: number;
  }

  interface DeepDetectLanguageResult {
    detected: boolean;
    primary: LanguageScore | null;
    alternatives: LanguageScore[];
    wordResults: Array<Record<string, number> | "Not found!">;
  }

  interface CharacterAnalysis {
    char: string;
    script: string;
    unicode: string;
  }

  /**
   * Detects the language/script of the given text based on Unicode ranges
   * @param text - The text to analyze
   * @returns The detected language/script name (e.g., "Basic Latin", "Hiragana", etc.)
   */
  export function detectLanguage(text: string): string;

  /**
   * Provides detailed language detection information including confidence scores and alternatives
   * @param text - The text to analyze
   * @returns Detailed language detection results including confidence scores and alternatives
   */
  export function deepDetectLanguage(text: string): DeepDetectLanguageResult;

  /**
   * Analyzes each character in the text and returns its script information
   * @param text - The text to analyze
   * @returns Array of character analysis results including the character, its script, and Unicode value
   */
  export function analyzeText(text: string): CharacterAnalysis[];
}
