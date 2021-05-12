!(function () {
  const ANGLE = 150 / 180 * Math.PI;
  const LAYERS = [
    { speed: 0.1, radius: 2 * (0.3 + 0.1), count: 3 * 3 * 3 * 3 * 3 },
    { speed: 0.2, radius: 2 * (0.3 + 0.2), count: 3 * 3 * 3 * 3 },
    { speed: 0.4, radius: 2 * (0.3 + 0.4), count: 3 * 3 * 3 },
    { speed: 0.8, radius: 2 * (0.3 + 0.8), count: 3 * 3 },
    { speed: 1.6, radius: 2 * (0.3 + 1.6), count: 3 }
  ];

  const canvas = document.getElementById("bg");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "rgb(255, 255, 255, 0.5)";

  const stars = [];
  for (let j = 0; j < LAYERS.length; j++) {
    const vx = Math.cos(ANGLE) * LAYERS[j].speed;
    const vy = Math.sin(ANGLE) * LAYERS[j].speed;

    for (let i = 0; i < LAYERS[j].count; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: vx,
        vy: vy,
        radius: LAYERS[j].radius,
      });
    }
  }

  const nextFrame = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < stars.length; i++) {
      if (stars[i].life == 0) {
        stars.splice(i, 1);
      } else {
        stars[i].x = (stars[i].x + stars[i].vx + canvas.width) % canvas.width;
        stars[i].y = (stars[i].y + stars[i].vy + canvas.height) % canvas.height;
        if (stars[i].life) stars[i].life--;
        ctx.beginPath();
        ctx.arc(stars[i].x, stars[i].y, stars[i].radius, 0, Math.PI * 2, false);
        ctx.fill();
      }
    }

    /* shootingstar */
    if (Math.random() < 0.01) {
      const direction = Math.random() * 2 * Math.PI;
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.cos(direction) * 5,
        vy: Math.sin(direction) * 5,
        radius: 2,
        life: 60,
      });
    }

    window.requestAnimationFrame(nextFrame);
  };

  nextFrame();
})();
