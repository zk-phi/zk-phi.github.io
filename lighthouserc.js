module.exports = {
    ci: {
        collect: {
            numberOfRuns: 4,
            url: ["http://localhost:8080/"],
            startServerCommand: "npm run start",
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
