# detect-language

A lightweight library to detect the language of a given text using Unicode ranges. This library analyzes the Unicode ranges of characters in the input text to determine the most likely language.

## Installation

```bash
npm install detect-language
```

## Usage

```javascript
const { detectLanguage } = require("detect-language");

// Detect language from text
const text = "Hello, how are you?";
const detectedLanguage = detectLanguage(text);
console.log(detectedLanguage); // Output: "Basic Latin"

// Example with non-Latin text
const japaneseText = "こんにちは";
const detectedJapanese = detectLanguage(japaneseText);
console.log(detectedJapanese); // Output: "Hiragana"
```

## Features

- Lightweight and fast language detection
- No external dependencies
- Supports a wide range of Unicode scripts and languages
- Simple and easy to use API

## How it works

The library uses Unicode ranges to detect the script of the input text. It:

1. Splits the input text into words
2. Analyzes each word's Unicode ranges
3. Determines the most frequent script/language
4. Returns the detected language name

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

## License

MIT
