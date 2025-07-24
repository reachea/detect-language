module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer", // reads commit type
    "@semantic-release/release-notes-generator", // generates changelog
    "@semantic-release/changelog", // updates CHANGELOG.md
    "@semantic-release/git", // commits changelog and package.json
    "@semantic-release/github", // creates GitHub Release
  ],
};
