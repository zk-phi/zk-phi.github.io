// mouse stalker
!(function () {
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
            stalker.style.opacity = 1;
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
})();
