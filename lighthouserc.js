module.exports = {
    ci: {
        collect: {
            numberOfRuns: 4,
            url: ["http://localhost:9000/gatsby-otameshi/"],
            startServerCommand: "npm run serve",
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
