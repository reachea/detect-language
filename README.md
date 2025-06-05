# unicode-lang

A lightweight library to detect the language of a given text using Unicode ranges. This library analyzes the Unicode ranges of characters in the input text to determine the most likely language.

## Installation

```bash
npm install unicode-lang
```

## Usage

### JavaScript

```javascript
const {
  detectLanguage,
  deepDetectLanguage,
  analyzeText,
  getScriptInfo,
} = require("unicode-lang");

// Basic language detection
const text = "Hello, how are you?";
const detectedLanguage = detectLanguage(text);
console.log(detectedLanguage); // Output: "Basic Latin"

// Deep language detection with confidence scores
const mixedText = "こんにちは世界";
const deepResult = deepDetectLanguage(mixedText);
console.log(deepResult);
/* Output:
{
  detected: true,
  primary: {
    language: "Hiragana",
    confidence: 85.5,
    score: 0.855
  },
  alternatives: [
    {
      language: "Katakana",
      confidence: 14.5,
      score: 0.145
    }
  ],
  wordResults: [...]
}
*/

// Per-character script analysis
const analysis = analyzeText("Hello مرحبا");
console.log(analysis);
/* Output:
[
  { char: 'H', script: 'Basic Latin', unicode: '48' },
  { char: 'e', script: 'Basic Latin', unicode: '65' },
  { char: 'l', script: 'Basic Latin', unicode: '6C' },
  { char: 'l', script: 'Basic Latin', unicode: '6C' },
  { char: 'o', script: 'Basic Latin', unicode: '6F' },
  { char: ' ', script: 'Basic Latin', unicode: '20' },
  { char: 'م', script: 'Arabic', unicode: '645' },
  { char: 'ر', script: 'Arabic', unicode: '631' },
  { char: 'ح', script: 'Arabic', unicode: '62D' },
  { char: 'ب', script: 'Arabic', unicode: '628' },
  { char: 'ا', script: 'Arabic', unicode: '627' }
]
*/

// Get script information
const thaiInfo = getScriptInfo("Thai");
console.log(thaiInfo);
/* Output:
{
  range: ["0E00", "0E7F"],
  direction: "LTR",
  writingSystem: "Abugida"
}
*/
```

### TypeScript

```typescript
import {
  detectLanguage,
  deepDetectLanguage,
  analyzeText,
  getScriptInfo,
} from "unicode-lang";

// Basic language detection
const text: string = "Hello, how are you?";
const detectedLanguage: string = detectLanguage(text);
console.log(detectedLanguage); // Output: "Basic Latin"

// Deep language detection with confidence scores
const mixedText: string = "こんにちは世界";
const deepResult: DeepDetectLanguageResult = deepDetectLanguage(mixedText);
console.log(deepResult);

// Per-character script analysis
const analysis: CharacterAnalysis[] = analyzeText("Hello مرحبا");
console.log(analysis);

// Get script information
const thaiInfo: ScriptInfo | null = getScriptInfo("Thai");
console.log(thaiInfo);
```

## Features

- Lightweight and fast language detection
- No external dependencies
- Supports a wide range of Unicode scripts and languages
- Simple and easy to use API
- Full TypeScript support
- Detailed language detection with confidence scores
- Support for mixed-language text analysis
- Per-character script analysis with Unicode information
- Script information with Unicode ranges and writing system details

## How it works

The library uses Unicode ranges to detect the script of the input text. It:

1. Splits the input text into words
2. Analyzes each word's Unicode ranges
3. Determines the most frequent script/language
4. Returns the detected language name

For deep detection, it additionally:

1. Calculates confidence scores for each detected language
2. Provides alternative language possibilities
3. Analyzes each word individually
4. Returns detailed statistics about the detection

For character analysis, it:

1. Processes each character individually
2. Identifies the script for each character
3. Provides Unicode information for each character
4. Returns detailed analysis for building editors or validators

For script information, it provides:

1. Unicode range for the script
2. Writing direction (LTR, RTL, or TTB)
3. Writing system type (Alphabet, Abugida, etc.)
4. Detailed metadata for typography and text processing

## Supported Languages

The library supports detection of various scripts including:

- Latin (Basic Latin, Latin-1 Supplement, etc.)
- Cyrillic
- Greek
- Arabic
- Hebrew
- Chinese (CJK)
- Japanese (Hiragana, Katakana)
- Korean (Hangul)
- And many more...

## API Reference

### detectLanguage(text: string): string

Basic language detection that returns the most likely language name.

### deepDetectLanguage(text: string): DeepDetectLanguageResult

Advanced language detection that returns detailed information including:

- `detected`: Boolean indicating if any language was detected
- `primary`: The most likely language with its confidence score
- `alternatives`: Other possible languages with their confidence scores
- `wordResults`: Detailed results for each word in the text

### analyzeText(text: string): CharacterAnalysis[]

Per-character script analysis that returns detailed information for each character:

- `char`: The character itself
- `script`: The script/language the character belongs to
- `unicode`: The Unicode code point in hexadecimal

### getScriptInfo(scriptName: string): ScriptInfo | null

Returns detailed information about a specific script:

- `range`: Unicode range for the script (uppercase hexadecimal strings)
- `direction`: Writing direction (LTR, RTL, or TTB)
- `writingSystem`: Type of writing system (Alphabet, Abugida, etc.)

## License

MIT
