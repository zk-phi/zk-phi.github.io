module.exports = {
    ci: {
        collect: {
            numberOfRuns: 4,
            url: ["http://localhost:9000/"],
            startServerCommand: "npm run serve",
        },
        assert: {
            preset: "lighthouse:no-pwa",
            assertions: {
                "uses-long-cache-ttl": "off",
                "image-size-responsive": "off",
                "tap-targets": ["error", { minScore: 0.78 }],
                "unused-css-rules": ["error", { maxLength: 1 }],
            },
        },
        upload: {
            target: "temporary-public-storage",
        },
    }
};
