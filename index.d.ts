declare module "lang-detect" {
  /**
   * Detects the language/script of the given text based on Unicode ranges
   * @param text - The text to analyze
   * @returns The detected language/script name (e.g., "Basic Latin", "Hiragana", etc.)
   */
  export function detectLanguage(text: string): string;
}
