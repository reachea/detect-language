const scriptInfo = {
  "Basic Latin": {
    range: ["0000", "007F"],
    direction: "LTR",
    writingSystem: "Alphabet",
  },
  "Latin-1 Supplement": {
    range: ["0080", "00FF"],
    direction: "LTR",
    writingSystem: "Alphabet",
  },
  "Latin Extended-A": {
    range: ["0100", "017F"],
    direction: "LTR",
    writingSystem: "Alphabet",
  },
  "Latin Extended-B": {
    range: ["0180", "024F"],
    direction: "LTR",
    writingSystem: "Alphabet",
  },
  "IPA Extensions": {
    range: ["0250", "02AF"],
    direction: "LTR",
    writingSystem: "Alphabet",
  },
  "Spacing Modifier Letters": {
    range: ["02B0", "02FF"],
    direction: "LTR",
    writingSystem: "Alphabet",
  },
  "Combining Diacritical Marks": {
    range: ["0300", "036F"],
    direction: "LTR",
    writingSystem: "Diacritical",
  },
  "Greek and Coptic": {
    range: ["0370", "03FF"],
    direction: "LTR",
    writingSystem: "Alphabet",
  },
  Cyrillic: {
    range: ["0400", "04FF"],
    direction: "LTR",
    writingSystem: "Alphabet",
  },
  "Cyrillic Supplement": {
    range: ["0500", "052F"],
    direction: "LTR",
    writingSystem: "Alphabet",
  },
  Armenian: {
    range: ["0530", "058F"],
    direction: "LTR",
    writingSystem: "Alphabet",
  },
  Hebrew: {
    range: ["0590", "05FF"],
    direction: "RTL",
    writingSystem: "Abjad",
  },
  Arabic: {
    range: ["0600", "06FF"],
    direction: "RTL",
    writingSystem: "Abjad",
  },
  Syriac: {
    range: ["0700", "074F"],
    direction: "RTL",
    writingSystem: "Abjad",
  },
  "Arabic Supplement": {
    range: ["0750", "077F"],
    direction: "RTL",
    writingSystem: "Abjad",
  },
  Thaana: {
    range: ["0780", "07BF"],
    direction: "RTL",
    writingSystem: "Abugida",
  },
  NKo: {
    range: ["07C0", "07FF"],
    direction: "RTL",
    writingSystem: "Syllabary",
  },
  Samaritan: {
    range: ["0800", "083F"],
    direction: "RTL",
    writingSystem: "Abjad",
  },
  Mandaic: {
    range: ["0840", "085F"],
    direction: "RTL",
    writingSystem: "Abjad",
  },
  "Syriac Supplement": {
    range: ["0860", "086F"],
    direction: "RTL",
    writingSystem: "Abjad",
  },
  "Arabic Extended-B": {
    range: ["0870", "089F"],
    direction: "RTL",
    writingSystem: "Abjad",
  },
  "Arabic Extended-A": {
    range: ["08A0", "08FF"],
    direction: "RTL",
    writingSystem: "Abjad",
  },
  Devanagari: {
    range: ["0900", "097F"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  Bengali: {
    range: ["0980", "09FF"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  Gurmukhi: {
    range: ["0A00", "0A7F"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  Gujarati: {
    range: ["0A80", "0AFF"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  Oriya: {
    range: ["0B00", "0B7F"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  Tamil: {
    range: ["0B80", "0BFF"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  Telugu: {
    range: ["0C00", "0C7F"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  Kannada: {
    range: ["0C80", "0CFF"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  Malayalam: {
    range: ["0D00", "0D7F"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  Sinhala: {
    range: ["0D80", "0DFF"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  Thai: {
    range: ["0E00", "0E7F"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  Lao: {
    range: ["0E80", "0EFF"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  Tibetan: {
    range: ["0F00", "0FFF"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  Myanmar: {
    range: ["1000", "109F"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  Georgian: {
    range: ["10A0", "10FF"],
    direction: "LTR",
    writingSystem: "Alphabet",
  },
  "Hangul Jamo": {
    range: ["1100", "11FF"],
    direction: "LTR",
    writingSystem: "Alphabet",
  },
  Ethiopic: {
    range: ["1200", "137F"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  "Ethiopic Supplement": {
    range: ["1380", "139F"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  Cherokee: {
    range: ["13A0", "13FF"],
    direction: "LTR",
    writingSystem: "Syllabary",
  },
  "Unified Canadian Aboriginal Syllabics": {
    range: ["1400", "167F"],
    direction: "LTR",
    writingSystem: "Syllabary",
  },
  Ogham: {
    range: ["1680", "169F"],
    direction: "LTR",
    writingSystem: "Alphabet",
  },
  Runic: {
    range: ["16A0", "16FF"],
    direction: "LTR",
    writingSystem: "Alphabet",
  },
  Tagalog: {
    range: ["1700", "171F"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  Hanunoo: {
    range: ["1720", "173F"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  Buhid: {
    range: ["1740", "175F"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  Tagbanwa: {
    range: ["1760", "177F"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  Khmer: {
    range: ["1780", "17FF"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  Mongolian: {
    range: ["1800", "18AF"],
    direction: "TTB",
    writingSystem: "Alphabet",
  },
  "Unified Canadian Aboriginal Syllabics Extended": {
    range: ["18B0", "18FF"],
    direction: "LTR",
    writingSystem: "Syllabary",
  },
  Limbu: {
    range: ["1900", "194F"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  "Tai Le": {
    range: ["1950", "197F"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  "New Tai Lue": {
    range: ["1980", "19DF"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  "Khmer Symbols": {
    range: ["19E0", "19FF"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  Buginese: {
    range: ["1A00", "1A1F"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  "Tai Tham": {
    range: ["1A20", "1AAF"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  "Combining Diacritical Marks Extended": {
    range: ["1AB0", "1AFF"],
    direction: "LTR",
    writingSystem: "Diacritical",
  },
  Balinese: {
    range: ["1B00", "1B7F"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  Sundanese: {
    range: ["1B80", "1BBF"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  Batak: {
    range: ["1BC0", "1BFF"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  Lepcha: {
    range: ["1C00", "1C4F"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  "Ol Chiki": {
    range: ["1C50", "1C7F"],
    direction: "LTR",
    writingSystem: "Alphabet",
  },
  "Cyrillic Extended-C": {
    range: ["1C80", "1C8F"],
    direction: "LTR",
    writingSystem: "Alphabet",
  },
  "Georgian Extended": {
    range: ["1C90", "1CBF"],
    direction: "LTR",
    writingSystem: "Alphabet",
  },
  "Sundanese Supplement": {
    range: ["1CC0", "1CCF"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  "Vedic Extensions": {
    range: ["1CD0", "1CFF"],
    direction: "LTR",
    writingSystem: "Diacritical",
  },
  "Phonetic Extensions": {
    range: ["1D00", "1D7F"],
    direction: "LTR",
    writingSystem: "Alphabet",
  },
  "Phonetic Extensions Supplement": {
    range: ["1D80", "1DBF"],
    direction: "LTR",
    writingSystem: "Alphabet",
  },
  "Combining Diacritical Marks Supplement": {
    range: ["1DC0", "1DFF"],
    direction: "LTR",
    writingSystem: "Diacritical",
  },
  "Latin Extended Additional": {
    range: ["1E00", "1EFF"],
    direction: "LTR",
    writingSystem: "Alphabet",
  },
  "Greek Extended": {
    range: ["1F00", "1FFF"],
    direction: "LTR",
    writingSystem: "Alphabet",
  },
  "General Punctuation": {
    range: ["2000", "206F"],
    direction: "LTR",
    writingSystem: "Punctuation",
  },
  "Superscripts and Subscripts": {
    range: ["2070", "209F"],
    direction: "LTR",
    writingSystem: "Alphabet",
  },
  "Currency Symbols": {
    range: ["20A0", "20CF"],
    direction: "LTR",
    writingSystem: "Symbol",
  },
  "Combining Diacritical Marks for Symbols": {
    range: ["20D0", "20FF"],
    direction: "LTR",
    writingSystem: "Diacritical",
  },
  "Letterlike Symbols": {
    range: ["2100", "214F"],
    direction: "LTR",
    writingSystem: "Symbol",
  },
  "Number Forms": {
    range: ["2150", "218F"],
    direction: "LTR",
    writingSystem: "Number",
  },
  Arrows: {
    range: ["2190", "21FF"],
    direction: "LTR",
    writingSystem: "Symbol",
  },
  "Mathematical Operators": {
    range: ["2200", "22FF"],
    direction: "LTR",
    writingSystem: "Symbol",
  },
  "Miscellaneous Technical": {
    range: ["2300", "23FF"],
    direction: "LTR",
    writingSystem: "Symbol",
  },
  "Control Pictures": {
    range: ["2400", "243F"],
    direction: "LTR",
    writingSystem: "Symbol",
  },
  "Optical Character Recognition": {
    range: ["2440", "245F"],
    direction: "LTR",
    writingSystem: "Symbol",
  },
  "Enclosed Alphanumerics": {
    range: ["2460", "24FF"],
    direction: "LTR",
    writingSystem: "Symbol",
  },
  "Box Drawing": {
    range: ["2500", "257F"],
    direction: "LTR",
    writingSystem: "Symbol",
  },
  "Block Elements": {
    range: ["2580", "259F"],
    direction: "LTR",
    writingSystem: "Symbol",
  },
  "Geometric Shapes": {
    range: ["25A0", "25FF"],
    direction: "LTR",
    writingSystem: "Symbol",
  },
  "Miscellaneous Symbols": {
    range: ["2600", "26FF"],
    direction: "LTR",
    writingSystem: "Symbol",
  },
  Dingbats: {
    range: ["2700", "27BF"],
    direction: "LTR",
    writingSystem: "Symbol",
  },
  "Miscellaneous Mathematical Symbols-A": {
    range: ["27C0", "27EF"],
    direction: "LTR",
    writingSystem: "Symbol",
  },
  "Supplemental Arrows-A": {
    range: ["27F0", "27FF"],
    direction: "LTR",
    writingSystem: "Symbol",
  },
  "Braille Patterns": {
    range: ["2800", "28FF"],
    direction: "LTR",
    writingSystem: "Symbol",
  },
  "Supplemental Arrows-B": {
    range: ["2900", "297F"],
    direction: "LTR",
    writingSystem: "Symbol",
  },
  "Miscellaneous Mathematical Symbols-B": {
    range: ["2980", "29FF"],
    direction: "LTR",
    writingSystem: "Symbol",
  },
  "Supplemental Mathematical Operators": {
    range: ["2A00", "2AFF"],
    direction: "LTR",
    writingSystem: "Symbol",
  },
  "Miscellaneous Symbols and Arrows": {
    range: ["2B00", "2BFF"],
    direction: "LTR",
    writingSystem: "Symbol",
  },
  Glagolitic: {
    range: ["2C00", "2C5F"],
    direction: "LTR",
    writingSystem: "Alphabet",
  },
  "Latin Extended-C": {
    range: ["2C60", "2C7F"],
    direction: "LTR",
    writingSystem: "Alphabet",
  },
  Coptic: {
    range: ["2C80", "2CFF"],
    direction: "LTR",
    writingSystem: "Alphabet",
  },
  "Georgian Supplement": {
    range: ["2D00", "2D2F"],
    direction: "LTR",
    writingSystem: "Alphabet",
  },
  Tifinagh: {
    range: ["2D30", "2D7F"],
    direction: "LTR",
    writingSystem: "Alphabet",
  },
  "Ethiopic Extended": {
    range: ["2D80", "2DDF"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  "Cyrillic Extended-A": {
    range: ["2DE0", "2DFF"],
    direction: "LTR",
    writingSystem: "Alphabet",
  },
  "Supplemental Punctuation": {
    range: ["2E00", "2E7F"],
    direction: "LTR",
    writingSystem: "Punctuation",
  },
  "CJK Radicals Supplement": {
    range: ["2E80", "2EFF"],
    direction: "LTR",
    writingSystem: "Logographic",
  },
  "Kangxi Radicals": {
    range: ["2F00", "2FDF"],
    direction: "LTR",
    writingSystem: "Logographic",
  },
  "Ideographic Description Characters": {
    range: ["2FF0", "2FFF"],
    direction: "LTR",
    writingSystem: "Logographic",
  },
  "CJK Symbols and Punctuation": {
    range: ["3000", "303F"],
    direction: "LTR",
    writingSystem: "Logographic",
  },
  Hiragana: {
    range: ["3040", "309F"],
    direction: "LTR",
    writingSystem: "Syllabary",
  },
  Katakana: {
    range: ["30A0", "30FF"],
    direction: "LTR",
    writingSystem: "Syllabary",
  },
  Bopomofo: {
    range: ["3100", "312F"],
    direction: "LTR",
    writingSystem: "Syllabary",
  },
  "Hangul Compatibility Jamo": {
    range: ["3130", "318F"],
    direction: "LTR",
    writingSystem: "Alphabet",
  },
  Kanbun: {
    range: ["3190", "319F"],
    direction: "LTR",
    writingSystem: "Logographic",
  },
  "Bopomofo Extended": {
    range: ["31A0", "31BF"],
    direction: "LTR",
    writingSystem: "Syllabary",
  },
  "CJK Strokes": {
    range: ["31C0", "31EF"],
    direction: "LTR",
    writingSystem: "Logographic",
  },
  "Katakana Phonetic Extensions": {
    range: ["31F0", "31FF"],
    direction: "LTR",
    writingSystem: "Syllabary",
  },
  "Enclosed CJK Letters and Months": {
    range: ["3200", "32FF"],
    direction: "LTR",
    writingSystem: "Logographic",
  },
  "CJK Compatibility": {
    range: ["3300", "33FF"],
    direction: "LTR",
    writingSystem: "Logographic",
  },
  "CJK Unified Ideographs Extension A": {
    range: ["3400", "4DBF"],
    direction: "LTR",
    writingSystem: "Logographic",
  },
  "Yijing Hexagram Symbols": {
    range: ["4DC0", "4DFF"],
    direction: "LTR",
    writingSystem: "Symbol",
  },
  "CJK Unified Ideographs": {
    range: ["4E00", "9FFF"],
    direction: "LTR",
    writingSystem: "Logographic",
  },
  "Yi Syllables": {
    range: ["A000", "A48F"],
    direction: "LTR",
    writingSystem: "Syllabary",
  },
  "Yi Radicals": {
    range: ["A490", "A4CF"],
    direction: "LTR",
    writingSystem: "Logographic",
  },
  Lisu: {
    range: ["A4D0", "A4FF"],
    direction: "LTR",
    writingSystem: "Alphabet",
  },
  Vai: {
    range: ["A500", "A63F"],
    direction: "LTR",
    writingSystem: "Syllabary",
  },
  "Cyrillic Extended-B": {
    range: ["A640", "A69F"],
    direction: "LTR",
    writingSystem: "Alphabet",
  },
  Bamum: {
    range: ["A6A0", "A6FF"],
    direction: "LTR",
    writingSystem: "Syllabary",
  },
  "Modifier Tone Letters": {
    range: ["A700", "A71F"],
    direction: "LTR",
    writingSystem: "Diacritical",
  },
  "Latin Extended-D": {
    range: ["A720", "A7FF"],
    direction: "LTR",
    writingSystem: "Alphabet",
  },
  "Syloti Nagri": {
    range: ["A800", "A82F"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  "Common Indic Number Forms": {
    range: ["A830", "A83F"],
    direction: "LTR",
    writingSystem: "Number",
  },
  "Phags-pa": {
    range: ["A840", "A87F"],
    direction: "TTB",
    writingSystem: "Abugida",
  },
  Saurashtra: {
    range: ["A880", "A8DF"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  "Devanagari Extended": {
    range: ["A8E0", "A8FF"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  "Kayah Li": {
    range: ["A900", "A92F"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  Rejang: {
    range: ["A930", "A95F"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  "Hangul Jamo Extended-A": {
    range: ["A960", "A97F"],
    direction: "LTR",
    writingSystem: "Alphabet",
  },
  Javanese: {
    range: ["A980", "A9DF"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  "Myanmar Extended-B": {
    range: ["A9E0", "A9FF"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  Cham: {
    range: ["AA00", "AA5F"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  "Myanmar Extended-A": {
    range: ["AA60", "AA7F"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  "Tai Viet": {
    range: ["AA80", "AADF"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  "Meetei Mayek Extensions": {
    range: ["AAE0", "AAFF"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  "Ethiopic Extended-A": {
    range: ["AB00", "AB2F"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  "Latin Extended-E": {
    range: ["AB30", "AB6F"],
    direction: "LTR",
    writingSystem: "Alphabet",
  },
  "Cherokee Supplement": {
    range: ["AB70", "ABBF"],
    direction: "LTR",
    writingSystem: "Syllabary",
  },
  "Meetei Mayek": {
    range: ["ABC0", "ABFF"],
    direction: "LTR",
    writingSystem: "Abugida",
  },
  "Hangul Syllables": {
    range: ["AC00", "D7AF"],
    direction: "LTR",
    writingSystem: "Alphabet",
  },
  "Hangul Jamo Extended-B": {
    range: ["D7B0", "D7FF"],
    direction: "LTR",
    writingSystem: "Alphabet",
  },
  "High Surrogates": {
    range: ["D800", "DB7F"],
    direction: "LTR",
    writingSystem: "Surrogate",
  },
  "High Private Use Surrogates": {
    range: ["DB80", "DBFF"],
    direction: "LTR",
    writingSystem: "Surrogate",
  },
  "Low Surrogates": {
    range: ["DC00", "DFFF"],
    direction: "LTR",
    writingSystem: "Surrogate",
  },
  "Private Use Area": {
    range: ["E000", "F8FF"],
    direction: "LTR",
    writingSystem: "Private",
  },
  "CJK Compatibility Ideographs": {
    range: ["F900", "FAFF"],
    direction: "LTR",
    writingSystem: "Logographic",
  },
  "Alphabetic Presentation Forms": {
    range: ["FB00", "FB4F"],
    direction: "LTR",
    writingSystem: "Alphabet",
  },
  "Arabic Presentation Forms-A": {
    range: ["FB50", "FDFF"],
    direction: "RTL",
    writingSystem: "Abjad",
  },
  "Variation Selectors": {
    range: ["FE00", "FE0F"],
    direction: "LTR",
    writingSystem: "Diacritical",
  },
  "Vertical Forms": {
    range: ["FE10", "FE1F"],
    direction: "TTB",
    writingSystem: "Punctuation",
  },
  "Combining Half Marks": {
    range: ["FE20", "FE2F"],
    direction: "LTR",
    writingSystem: "Diacritical",
  },
  "CJK Compatibility Forms": {
    range: ["FE30", "FE4F"],
    direction: "LTR",
    writingSystem: "Logographic",
  },
  "Small Form Variants": {
    range: ["FE50", "FE6F"],
    direction: "LTR",
    writingSystem: "Punctuation",
  },
  "Arabic Presentation Forms-B": {
    range: ["FE70", "FEFF"],
    direction: "RTL",
    writingSystem: "Abjad",
  },
  "Halfwidth and Fullwidth Forms": {
    range: ["FF00", "FFEF"],
    direction: "LTR",
    writingSystem: "Symbol",
  },
  Specials: {
    range: ["FFF0", "FFFF"],
    direction: "LTR",
    writingSystem: "Control",
  },
  "Linear B Syllabary": {
    range: ["10000", "1007F"],
    direction: "LTR",
    writingSystem: "Syllabary",
  },
  "Linear B Ideograms": {
    range: ["10080", "100FF"],
    direction: "LTR",
    writingSystem: "Logographic",
  },
  "Aegean Numbers": {
    range: ["10100", "1013F"],
    direction: "LTR",
    writingSystem: "Number",
  },
  "Ancient Greek Numbers": {
    range: ["10140", "1018F"],
    direction: "LTR",
    writingSystem: "Number",
  },
  "Ancient Symbols": {
    range: ["10190", "101CF"],
    direction: "LTR",
    writingSystem: "Symbol",
  },
  "Phaistos Disc": {
    range: ["101D0", "101FF"],
    direction: "LTR",
    writingSystem: "Symbol",
  },
  Lycian: {
    range: ["10280", "1029F"],
    direction: "LTR",
    writingSystem: "Alphabet",
  },
  Carian: {
    range: ["102A0", "102DF"],
    direction: "LTR",
    writingSystem: "Alphabet",
  },
  "Coptic Epact Numbers": {
    range: ["102E0", "102FF"],
    direction: "LTR",
    writingSystem: "Number",
  },
  "Old Italic": {
    range: ["10300", "1032F"],
    direction: "LTR",
    writingSystem: "Alphabet",
  },
  Gothic: {
    range: ["10330", "1034F"],
    direction: "LTR",
    writingSystem: "Alphabet",
  },
  "Old Permic": {
    range: ["10350", "1037F"],
    direction: "LTR",
    writingSystem: "Alphabet",
  },
  Ugaritic: {
    range: ["10380", "1039F"],
    direction: "LTR",
    writingSystem: "Abjad",
  },
};

module.exports = {
  scriptInfo,
};
