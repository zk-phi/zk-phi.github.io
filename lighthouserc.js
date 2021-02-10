module.exports = {
    ci: {
        collect: {
            numberOfRuns: 3,
            staticDistDir: "./",
            url: ['index.html'],
        },
        assert: {
            preset: "lighthouse:no-pwa",
            assertions: {
                "uses-long-cache-ttl": "off",
                "render-blocking-resources": ["error", { maxLength: 1 }],
            },
        },
        upload: {
            target: "temporary-public-storage",
        },
    }
};
