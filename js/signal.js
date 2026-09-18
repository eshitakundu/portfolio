// A small signal field: pointer input bends the strands; no library or network calls.
(() => {
  const canvas = document.querySelector('#signalCanvas');
  if (!canvas) return;
  const context = canvas.getContext('2d');
  if (!context) return;
  const button = document.querySelector('#heroMotion');
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  let paused = preference.matches, visible = true, frame = 0, time = 0, last = 0;
  let width = 0, height = 0, pointer = {x: .5, y: .5}, current = {x: .5, y: .5};
  function size() {
    const box = canvas.getBoundingClientRect(), scale = Math.min(devicePixelRatio || 1, 2);
    width = box.width; height = box.height;
    canvas.width = Math.round(width * scale); canvas.height = Math.round(height * scale);
    context.setTransform(scale, 0, 0, scale, 0, 0); draw();
  }
  function draw() {
    context.clearRect(0, 0, width, height);
    for (let x = 12; x < width; x += 18) for (let y = 12; y < height; y += 18) {
      context.fillStyle = '#8c9bc035'; context.fillRect(x, y, 1, 1);
    }
    const lines = 19;
    for (let line = 0; line < lines; line++) {
      const center = line - (lines - 1) / 2;
      context.beginPath();
      for (let x = -4; x <= width + 4; x += 3) {
        const u = x / width;
        const envelope = Math.sin(u * Math.PI);
        const wave = Math.sin(u * 9 + time * .7 + line * .13);
        const bend = Math.exp(-Math.pow((u - current.x) * 4, 2)) * (current.y - .5) * height * .65;
        const y = height / 2 + center * 4.2 + envelope * wave * (height * .23) + bend;
        if (x === -4) context.moveTo(x, y); else context.lineTo(x, y);
      }
      context.strokeStyle = line % 6 === 0 ? '#c34521a0' : '#294fe57a';
      context.lineWidth = line % 6 === 0 ? 1.3 : .7; context.stroke();
      const u = ((time * .11 + line * .061) % 1);
      const x = u * width;
      const y = height / 2 + center * 4.2 + Math.sin(u * Math.PI) * Math.sin(u * 9 + time * .7 + line * .13) * height * .23 + Math.exp(-Math.pow((u - current.x) * 4, 2)) * (current.y - .5) * height * .65;
      if (line % 3 === 0) { context.beginPath(); context.arc(x, y, 2.1, 0, Math.PI * 2); context.fillStyle = line % 6 === 0 ? '#c34521' : '#294fe5'; context.fill(); }
    }
  }
  function tick(now) {
    time += last ? Math.min((now - last) / 1000, .05) : 0; last = now;
    current.x += (pointer.x - current.x) * .06; current.y += (pointer.y - current.y) * .06;
    draw(); frame = requestAnimationFrame(tick);
  }
  function sync() {
    cancelAnimationFrame(frame); last = 0;
    button.textContent = paused ? 'Play' : 'Pause';
    button.setAttribute('aria-label', paused ? 'Play signal animation' : 'Pause signal animation');
    if (!paused && visible && !document.hidden) frame = requestAnimationFrame(tick); else draw();
  }
  canvas.addEventListener('pointermove', e => { const box = canvas.getBoundingClientRect(); pointer = {x:(e.clientX-box.left)/box.width,y:(e.clientY-box.top)/box.height}; });
  canvas.addEventListener('pointerleave', () => { pointer = {x:.5,y:.5}; });
  button.addEventListener('click', () => { paused = !paused; sync(); });
  preference.addEventListener('change', e => { paused = e.matches; sync(); });
  document.addEventListener('visibilitychange', sync);
  new ResizeObserver(size).observe(canvas);
  new IntersectionObserver(entries => {visible = entries[0].isIntersecting;sync();}).observe(canvas);
  size(); sync();
})();
