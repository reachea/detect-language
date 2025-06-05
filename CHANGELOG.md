# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.1] - 2024-03-20

### Changed

- Updated Unicode range format in script information to use uppercase hexadecimal strings without "0x" prefix
- Improved consistency in script name formatting
- Enhanced documentation for script information format

## [1.1.0] - 2024-03-20

### Added

- New `deepDetectLanguage` function for detailed language analysis with confidence scores
- New `analyzeText` function for per-character script analysis
- Enhanced TypeScript definitions with new interfaces and types
- Comprehensive documentation updates with new examples
- Support for mixed-language text analysis
- Character-level script analysis with Unicode information

### Features

- Confidence scores and alternative language detection
- Per-character script analysis
- Unicode code point information
- Enhanced TypeScript support
- Improved documentation and examples

## [1.0.0] - 2024-03-19

### Added

- Initial release of unicode-lang
- Core language detection functionality using Unicode ranges
- Support for 200+ Unicode scripts and languages
- TypeScript type definitions
- Comprehensive documentation
- Validation script for Unicode ranges
- MIT License

### Features

- Lightweight and fast language detection
- No external dependencies
- Simple and easy to use API
- Full TypeScript support
- Comprehensive Unicode script coverage
