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
            },
        },
        upload: {
            target: "temporary-public-storage",
        },
    }
};
