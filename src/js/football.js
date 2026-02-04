const arena = document.getElementById("arena");
const ball = document.getElementById("ball");

arena.addEventListener("click", (e) => {
  const rect = arena.getBoundingClientRect();

  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;

  const ballRadius = ball.offsetWidth / 2;

  x = Math.max(ballRadius, Math.min(x, rect.width - ballRadius));
  y = Math.max(ballRadius, Math.min(y, rect.height - ballRadius));

  ball.style.left = x + "px";
  ball.style.top = y + "px";
});
