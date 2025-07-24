module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer", // reads commit type
    "@semantic-release/release-notes-generator", // generates changelog
    "@semantic-release/changelog", // updates CHANGELOG.md
    "@semantic-release/github", // creates GitHub Release
  ],
  repositoryUrl: "https://github.com/reachea/unicode-lang.git",
};
