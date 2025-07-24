module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer", // reads commit type
    "@semantic-release/release-notes-generator", // generates changelog
    "@semantic-release/changelog", // updates CHANGELOG.md
    "@semantic-release/git", // commits changelog and package.json
    "@semantic-release/github", // creates GitHub Release
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md", "package.json"],
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
  ],
};
