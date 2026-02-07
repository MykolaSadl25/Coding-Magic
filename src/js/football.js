const arena = document.getElementById("arena");
const ball = document.getElementById("ball");
const scoreEl = document.getElementById("score");
const goals = document.querySelectorAll(".goal");

let score = 0;

arena.addEventListener("click", (e) => {
  const rect = arena.getBoundingClientRect();

  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;

  const r = ball.offsetWidth / 2;

  x = Math.max(r, Math.min(x, rect.width - r));
  y = Math.max(r, Math.min(y, rect.height - r));

  ball.style.left = x + "px";
  ball.style.top = y + "px";

  setTimeout(checkGoal, 350);
});

function checkGoal() {
  const ballRect = ball.getBoundingClientRect();

  goals.forEach(goal => {
    const goalRect = goal.getBoundingClientRect();

    const hit =
      ballRect.left < goalRect.right &&
      ballRect.right > goalRect.left &&
      ballRect.top < goalRect.bottom &&
      ballRect.bottom > goalRect.top;

    if (hit) {
      score++;
      scoreEl.textContent = score;

      ball.style.left = "50%";
      ball.style.top = "50%";
    }
  });
}
