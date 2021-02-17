module.exports = {
    ci: {
        collect: {
            numberOfRuns: 4,
            url: ["http://localhost:8000/"],
            startServerCommand: "npm run serve",
        },
        assert: {
            preset: "lighthouse:no-pwa",
            assertions: {
                "uses-long-cache-ttl": "off",
                "uses-text-compression": "off",
                "image-size-responsive": "off",
                "tap-targets": ["error", { minScore: 0.78 }]
            },
        },
        upload: {
            target: "temporary-public-storage",
        },
    }
};
