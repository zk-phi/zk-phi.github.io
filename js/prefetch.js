// --- -prefetch links with the same origin, and prerender mouseover
!(function () {
    function link(href, rel) {
        const link = document.createElement("link");
        link.rel = rel;
        link.href = href;
        document.head.appendChild(link);
    }

    function prerender(e) {
        if (e.target.tagName === "A" && e.target.origin === location.origin) {
            link(e.target.href, "prerender");
        }
    }

    const fetchedUrls = {};
    document.querySelectorAll('a').forEach(function(a) {
        if (a.origin === location.origin
            && !fetchedUrls[a.href] && !a.href.match("/activities/item")) {
            link(a.href, "prefetch");
            fetchedUrls[a.href] = true;
        }
    });

    link("/css/font.css", "prefetch");
    link("/css/common_critical.css", "prefetch");
    link("/fonts/DotGothic16-Regular.woff2", "prefetch");
    document.documentElement.addEventListener("mousedown", prerender, { passive: true });
    document.documentElement.addEventListener("touchstart", prerender, { passive: true });
})();
