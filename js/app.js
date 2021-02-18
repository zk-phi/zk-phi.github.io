!(function () {
    // --- -add prefetch link on mouseover

    function prefetch(e) {
        if (e.target.tagName != "A") {
            return;
        }
        if (e.target["data-prefetched"]) {
            return;
        }
        if (e.target.origin != location.origin) {
            return;
        }
        if (window.location.href === e.target.href) {
            return;
        }
        e.target["data-prefetched"] = true;

        const link = document.createElement("link");
        link.rel = "prefetch";
        link.href = e.target.href;
        document.head.appendChild(link);
    }

    document.documentElement.addEventListener("mouseover", prefetch, { passive: true });
    document.documentElement.addEventListener("touchstart", prefetch, { passive: true });

    // ---- mouse-stalker

    let stalker;
    let isTouch = false;

    const handleMousemove = (e) => {
        if (!isTouch) {
            if (!stalker) {
                stalker = document.createElement("div");
                stalker.innerHTML = "🦄";
                stalker.id = "stalker";
                document.body.appendChild(stalker);
            }
            stalker.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        }
    };
    const handleMouseout = (e) => {
        if (stalker) {
            stalker.style.opacity = 0;
        }
    };
    const handleTouchstart = (e) => {
        isTouch = true;
    };

    document.addEventListener('mousemove', handleMousemove, { passive: true });
    document.addEventListener('mouseout', handleMouseout, { passive: true });
    document.addEventListener('touchstart', handleTouchstart, { passive: true });

    //// start loading webfont
    //document.body.classList.add("dotgothic");
})();
