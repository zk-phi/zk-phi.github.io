function normalRand (n) {
    let res = 0;
    for (let i = 0; i < n; i++) {
        res += Math.random();
    }
    return res / n;
}

function makeKira (pos, speed) {
    const el = document.createElement("div");
    el.innerHTML = "💮";
    el.classList.add("kira");
    el.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
    document.body.appendChild(el);
    return { pos, speed, el };
}

const gravity = window.innerHeight / 20000;
const resistance = 0.995;
const aveSpdX = window.innerWidth / 70;
const aveSpdY = window.innerHeight / 20;

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
        speed: {
            x: kira.speed.x * resistance,
            y: kira.speed.y * resistance - gravity,
        },
        el: kira.el,
    };
}

document.getElementById("JS_close").onclick = function (e) {
    document.getElementById("dialog-container").classList.remove("open");
}

document.getElementById("JS_clap").onclick = function (e) {
    document.getElementById("dialog-container").classList.add("open");
    e.target.disabled = true;

    let kiras = [];

    for (let i = 0; i < 100; i++) {
        const fromLeft = i % 2 == 0;
        kiras.push(makeKira({
            x: fromLeft ? 0 : window.innerWidth,
            y: window.innerHeight
        }, {
            x: (fromLeft ? -1 : 1) * normalRand(2) * aveSpdX / 2,
            y: normalRand(4) * aveSpdY / 2
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
