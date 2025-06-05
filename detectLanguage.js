const { languageUnicode } = require("./data");
const { scriptInfo } = require("./data/scriptInfo");

function detectLanguage(text) {
  // split into words
  const langs = text
    .trim()
    .split(/\s+/)
    .map((word) => {
      return detect(word);
    });

  // pick the lang with the most occurances
  return (langs || []).reduce(
    (acc, el) => {
      acc.k[el] = acc.k[el] ? acc.k[el] + 1 : 1;
      acc.max = acc.max ? (acc.max < acc.k[el] ? el : acc.max) : el;
      return acc;
    },
    { k: {} }
  ).max;

  function detect(text) {
    const scores = {};

    const regexes = {};

    languageUnicode?.forEach((item) => {
      regexes[item.name] = new RegExp(
        `[\\u${item.start_code}-\\u${item.end_code}]`,
        "gi"
      );
    });

    for (const [lang, regex] of Object.entries(regexes)) {
      // detect occurances of lang in a word
      let matches = text.match(regex) || [];
      let score = matches.length / text.length;

      if (score) {
        // high percentage, return result
        if (score > 0.85) {
          return lang;
        }
        scores[lang] = score;
      }
    }

    // not detected
    if (Object.keys(scores).length == 0) return "Not found!";

    // pick lang with highest percentage
    return Object.keys(scores).reduce((a, b) =>
      scores[a] > scores[b] ? a : b
    );
  }
}

function deepDetectLanguage(text) {
  // split into words
  const wordResults = text
    .trim()
    .split(/\s+/)
    .map((word) => {
      return detectWithScores(word);
    });

  // Aggregate results across all words
  const aggregatedScores = wordResults.reduce((acc, result) => {
    if (result === "Not found!") return acc;

    Object.entries(result).forEach(([lang, score]) => {
      acc[lang] = (acc[lang] || 0) + score;
    });
    return acc;
  }, {});

  // Calculate final scores
  const totalWords = wordResults.length;
  const finalScores = Object.entries(aggregatedScores).map(([lang, score]) => ({
    language: lang,
    confidence: (score / totalWords) * 100,
    score: score,
  }));

  // Sort by confidence
  finalScores.sort((a, b) => b.confidence - a.confidence);

  return {
    detected: finalScores.length > 0,
    primary: finalScores[0] || null,
    alternatives: finalScores.slice(1),
    wordResults: wordResults,
  };
}

function detectWithScores(text) {
  const scores = {};
  const regexes = {};

  languageUnicode?.forEach((item) => {
    regexes[item.name] = new RegExp(
      `[\\u${item.start_code}-\\u${item.end_code}]`,
      "gi"
    );
  });

  for (const [lang, regex] of Object.entries(regexes)) {
    let matches = text.match(regex) || [];
    let score = matches.length / text.length;

    if (score) {
      scores[lang] = score;
    }
  }

  return Object.keys(scores).length === 0 ? "Not found!" : scores;
}

function analyzeText(text) {
  const result = [];
  const regexes = {};

  // Create regexes for each language
  languageUnicode?.forEach((item) => {
    regexes[item.name] = new RegExp(
      `[\\u${item.start_code}-\\u${item.end_code}]`,
      "gi"
    );
  });

  // Analyze each character
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    let script = "Unknown";

    // Check each language's regex
    for (const [lang, regex] of Object.entries(regexes)) {
      if (regex.test(char)) {
        script = lang;
        break;
      }
    }

    result.push({
      char,
      script,
      unicode: char.charCodeAt(0).toString(16).toUpperCase(),
    });
  }

  return result;
}

function getScriptInfo(scriptName) {
  const info = scriptInfo[scriptName];
  if (!info) {
    return null;
  }

  return {
    ...info,
    range: info.range.map((code) => `0x${code.toString(16).toUpperCase()}`),
  };
}

module.exports = {
  detectLanguage,
  deepDetectLanguage,
  analyzeText,
  getScriptInfo,
};
