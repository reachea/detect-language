const {
  detectLanguage,
  deepDetectLanguage,
  analyzeText,
  getScriptInfo,
} = require("./index");

// Test cases
const testCases = {
  basicLatin: "Hello, how are you?",
  thai: "สวัสดีครับ",
  arabic: "مرحبا",
  mixed: "Hello สวัสดี مرحبا",
  japanese: "こんにちは世界",
  chinese: "你好世界",
  korean: "안녕하세요",
  cyrillic: "Привет мир",
  greek: "Γεια σας",
  hebrew: "שלום עולם",
};

// Helper function to check if test passed
function assert(condition, message) {
  if (!condition) {
    console.error(`❌ Test failed: ${message}`);
    return false;
  }
  console.log(`✅ Test passed: ${message}`);
  return true;
}

// Test basic language detection
console.log("\n=== Testing Basic Language Detection ===");
Object.entries(testCases).forEach(([name, text]) => {
  const result = detectLanguage(text);
  assert(result !== null, `${name}: Should detect language`);
  console.log(`${name}: Detected as "${result}"`);
});

// Test deep language detection
console.log("\n=== Testing Deep Language Detection ===");
Object.entries(testCases).forEach(([name, text]) => {
  const result = deepDetectLanguage(text);
  assert(result.detected, `${name}: Should detect language`);
  assert(result.primary, `${name}: Should have primary language`);
  assert(
    result.primary.confidence > 0,
    `${name}: Should have confidence score`
  );
  console.log(
    `${name}: Primary "${result.primary.language}" (${result.primary.confidence}%)`
  );
});

// Test text analysis
console.log("\n=== Testing Text Analysis ===");
Object.entries(testCases).forEach(([name, text]) => {
  const result = analyzeText(text);
  assert(Array.isArray(result), `${name}: Should return array`);
  assert(
    result.length === text.length,
    `${name}: Should analyze each character`
  );
  assert(
    result.every((r) => r.char && r.script && r.unicode),
    `${name}: Should have complete analysis`
  );
  console.log(`${name}: Analyzed ${result.length} characters`);
});

// Test script information
console.log("\n=== Testing Script Information ===");
const scripts = [
  "Thai",
  "Arabic",
  "Basic Latin",
  "CJK Unified Ideographs",
  "Hiragana",
  "Cyrillic",
  "Greek and Coptic",
  "Hebrew",
];

scripts.forEach((script) => {
  const info = getScriptInfo(script);
  assert(info !== null, `${script}: Should return script info`);
  assert(Array.isArray(info.range), `${script}: Should have range array`);
  assert(info.range.length === 2, `${script}: Should have start and end range`);
  assert(info.direction, `${script}: Should have direction`);
  assert(info.writingSystem, `${script}: Should have writing system`);
  console.log(
    `${script}: Range ${info.range.join(" - ")}, ${info.direction}, ${
      info.writingSystem
    }`
  );
});

// Test edge cases
console.log("\n=== Testing Edge Cases ===");
assert(detectLanguage("") === null, "Empty string should return null");
assert(
  detectLanguage("123") === "Basic Latin",
  "Numbers should be detected as Basic Latin"
);
assert(
  detectLanguage("!@#$") === "Basic Latin",
  "Special characters should be detected as Basic Latin"
);

const deepEmpty = deepDetectLanguage("");
assert(
  !deepEmpty.detected,
  "Empty string should not be detected in deep detection"
);
assert(
  deepEmpty.primary === null,
  "Empty string should have null primary in deep detection"
);

const analysisEmpty = analyzeText("");
assert(Array.isArray(analysisEmpty), "Empty string should return empty array");
assert(analysisEmpty.length === 0, "Empty string should return empty array");

// Test invalid script names
console.log("\n=== Testing Invalid Script Names ===");
assert(
  getScriptInfo("InvalidScript") === null,
  "Invalid script should return null"
);
assert(getScriptInfo("") === null, "Empty script name should return null");

console.log("\n=== All Tests Completed ===");
