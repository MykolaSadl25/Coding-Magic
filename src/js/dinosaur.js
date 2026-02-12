const arena = document.querySelector('.dino__game');
const dino = document.getElementById('dino__dino');
const obstacle = document.getElementById('dino__obstacle');

let isJumping = false;
let gameStarted = false;
let collisionCheck = null;

function startGame() {
  if (!gameStarted) {
    gameStarted = true;
    startCollision();
    obstacle.style.animationPlayState = 'running';
  }

  if (!isJumping) jump();
}


arena.addEventListener('click', startGame);


document.addEventListener('keydown', (e) => {
  if (e.code === 'Space') startGame();
});


function jump() {
  isJumping = true;
  let position = 0;
  const maxHeight = 120;

  const upInterval = setInterval(() => {
    if (position >= maxHeight) {
      clearInterval(upInterval);

      const downInterval = setInterval(() => {
        if (position <= 0) {
          clearInterval(downInterval);
          isJumping = false;
          position = 0;
        }

        position -= 10;
        dino.style.bottom = position + 'px';
      }, 20);

    } else {
      position += 10;
      dino.style.bottom = position + 'px';
    }
  }, 20);
}

function startCollision() {
  collisionCheck = setInterval(() => {
    const dinoRect = dino.getBoundingClientRect();
    const obstacleRect = obstacle.getBoundingClientRect();

    const paddingX = 20;
    const paddingY = 20;

    const isColliding =
      dinoRect.right - paddingX > obstacleRect.left &&
      dinoRect.left + paddingX < obstacleRect.right &&
      dinoRect.bottom - paddingY > obstacleRect.top;

    if (isColliding) {
      gameOver();
    }
  }, 20);
}

function gameOver() {
  obstacle.style.animationPlayState = 'paused';
  clearInterval(collisionCheck);

  alert('Game Over');
}