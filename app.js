// add prefetch link on mouseover
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
