const { languageUnicode } = require("./data/languageUnicode");

function validateUnicodeRanges() {
  const errors = [];

  languageUnicode.forEach((item, index) => {
    // Convert hex strings to numbers
    const start = parseInt(item.start_code, 16);
    const end = parseInt(item.end_code, 16);

    // Check if conversion was successful
    if (isNaN(start) || isNaN(end)) {
      errors.push(
        `Invalid hex values in ${item.name}: start=${item.start_code}, end=${item.end_code}`
      );
      return;
    }

    // Check if start is less than end
    if (start > end) {
      errors.push(
        `Invalid range in ${item.name}: start (${item.start_code}) is greater than end (${item.end_code})`
      );
    }

    // Check if range is within valid Unicode range (0 to 0x10FFFF)
    if (start < 0 || end > 0x10ffff) {
      errors.push(
        `Range out of bounds in ${item.name}: start=${item.start_code}, end=${item.end_code}`
      );
    }

    // Check for overlapping ranges
    for (let i = 0; i < index; i++) {
      const prevStart = parseInt(languageUnicode[i].start_code, 16);
      const prevEnd = parseInt(languageUnicode[i].end_code, 16);

      if (
        (start >= prevStart && start <= prevEnd) ||
        (end >= prevStart && end <= prevEnd) ||
        (start <= prevStart && end >= prevEnd)
      ) {
        errors.push(
          `Overlapping range detected between ${item.name} and ${languageUnicode[i].name}`
        );
      }
    }
  });

  if (errors.length === 0) {
    console.log("All Unicode ranges are valid!");
  } else {
    console.log("Found errors:");
    errors.forEach((error) => console.log(`- ${error}`));
  }
}

validateUnicodeRanges();
