!(function() {
    function load() {
        lazyScripts.forEach(function (s) {
            const e = document.createElement("script");
            e.src = s;
            document.head.appendChild(e);
        });
        lazyStyles.forEach(function (s) {
            const e = document.createElement("link");
            e.rel = "stylesheet";
            e.href = s;
            document.head.appendChild(e);
        });
    }

    if (window.requestIdleCallback) {
        window.requestIdleCallback(load, { timeout: 2000 });
    } else {
        window.setTimeout(load, 500);
    }
})();
