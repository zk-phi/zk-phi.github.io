function makeKira (pos, speed) {
    const el = document.createElement("div");
    el.innerHTML = "⭐️";
    el.classList.add("kira");
    el.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
    document.body.appendChild(el);
    return { pos, speed, el };
}

const gravity = 0.05;

function moveKira (kira) {
    const newPos = {
        x: kira.pos.x - kira.speed.x,
        y: kira.pos.y - kira.speed.y
    };

    if (newPos.y > window.innerHeight || newPos.x < 0 || newPos.x > window.innerWidth) {
        kira.el.remove();
        return null;
    }

    kira.el.style.transform = `translate(${newPos.x}px, ${newPos.y}px)`;

    return {
        pos: newPos,
        speed: { x: kira.speed.x, y: kira.speed.y - gravity },
        el: kira.el,
    };
}

document.getElementById("JS_clap").onclick = function (e) {
    window.alert("応援ありがとうございます!!");
    e.target.disabled = true;

    let kiras = [];

    for (let i = 0; i < 400; i++) {
        const fromLeft = i < 200;
        kiras.push(makeKira({
            x: fromLeft ? 0 : window.innerWidth,
            y: window.innerHeight
        }, {
            x: (fromLeft ? -1 : 1) * (Math.random()) * (window.innerWidth / 400),
            y: (Math.random() / 2 + 0.5) * (window.innerHeight / 40)
        }));
    }

    const nextFrame = () => {
        kiras = kiras.reduce((l, r) => {
            const newKira = moveKira(r);
            if (newKira) l.push(newKira);
            return l;
        }, []);
        if (kiras.length) {
            window.requestAnimationFrame(nextFrame);
        }
    };

    nextFrame();
};
