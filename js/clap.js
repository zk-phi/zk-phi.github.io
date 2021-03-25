!(function () {
    const kirakira = () => {
        const gravity = window.innerHeight / 20000;
        const resistance = 0.99;
        const aveSpdX = window.innerWidth / 40;
        const aveSpdY = window.innerHeight / 15;

        const normalRand = (n) => {
            let res = 0;
            for (let i = 0; i < n; i++) {
                res += Math.random();
            }
            return res / n;
        };

        const kiras = [];
        for (let i = 0; i < 100; i++) {
            const fromLeft = i % 2 == 0;
            kiras.push({
                pos: {
                    x: fromLeft ? 0 : window.innerWidth,
                    y: window.innerHeight
                },
                speed: {
                    x: (fromLeft ? -1 : 1) * normalRand(2) * aveSpdX / 2,
                    y: normalRand(4) * aveSpdY / 2
                }
            });
        }

        const canvas = document.createElement('canvas');
        canvas.id = "kira";
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        body.appendChild(canvas);
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'rgba(255, 0, 0)';
        ctx.font = 'normal 1em sans-serif';

        const nextFrame = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < kiras.length;) {
                // render
                ctx.fillText('💮', kiras[i].pos.x, kiras[i].pos.y);
                // update position
                kiras[i] = {
                    pos: {
                        x: kiras[i].pos.x - kiras[i].speed.x,
                        y: kiras[i].pos.y - kiras[i].speed.y
                    },
                    speed: {
                        x: kiras[i].speed.x * resistance,
                        y: kiras[i].speed.y * resistance - gravity,
                    }
                };
                if (kiras[i].pos.y > window.innerHeight ||
                    kiras[i].pos.x < 0 || kiras[i].pos.x > window.innerWidth) {
                    kiras.splice(i, 1);
                } else {
                    i++;
                }
            }

            if (kiras.length) {
                window.requestAnimationFrame(nextFrame);
            } else {
                body.removeChild(canvas);
            }
        };

        nextFrame();
    };

    const dialog = () => {
        const dom = document.createElement("div");
        dom.id = "dialog-container";
        dom.innerHTML = `
          <div id="dialog" class="ui">
            <div id="dialog-title">
              謝謝茄子
            </div>
            <div id="dialog-body">
              応援ありがとうございます！
              <div id="dialog-btns">
                <button class="btn ui" id="JS_closeDialog">ほい(Y)</button>
              </div>
            </div>
          </div>`;
        document.body.appendChild(dom);
        document.getElementById("JS_closeDialog").onclick = () => {
            dom.remove();
        };
    };

    document.getElementById("JS_clap").onclick = (e) => {
        e.target.disabled = true;
        dialog();
        kirakira();
    };
})();
