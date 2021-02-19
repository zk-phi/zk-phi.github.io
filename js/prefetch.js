// --- -prefetch links with the same origin, and prerender mouseover
!(function () {
    function link(href, rel) {
        const link = document.createElement("link");
        link.rel = rel;
        link.href = href;
        document.head.appendChild(link);
    }

    function prerender(e) {
        if (e.target.tagName === "A" && !e.target["data-prerendered"]
            && e.target.origin === location.origin) {
            link(e.target.href, "prerender");
            e.target["data-prerendered"] = true;
        }
    }

    document.querySelectorAll('a').forEach(function(a) {
        if (a.origin === location.origin) {
            link(a.href, "prefetch");
        }
    });

    link("/fonts/DotGothic16-Regular.woff", "prefetch");
    document.documentElement.addEventListener("mouseover", prerender, { passive: true });
    document.documentElement.addEventListener("touchstart", prerender, { passive: true });
})();
