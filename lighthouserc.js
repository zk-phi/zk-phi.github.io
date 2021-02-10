module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      staticDistDir: "./",
      url: ['index.html'],
    },
    "assert": {
      preset: "lighthouse:no-pwa",
    },
    "upload": {
      "target": "temporary-public-storage",
    },
  }
};

