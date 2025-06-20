const cube1 = document.getElementById("cube1");
const cube2 = document.getElementById("cube2");
const button = document.getElementById("roll-button");
const winnerText = document.getElementById("winner-text");

button.addEventListener("click", rollDice);

function rollDice() {
  button.disabled = true;

  const rot1 = getRandomRotation();
  const rot2 = getRandomRotation();

  cube1.style.transform = `rotateX(${rot1.x}deg) rotateY(${rot1.y}deg)`;
  cube2.style.transform = `rotateX(${rot2.x}deg) rotateY(${rot2.y}deg)`;

  setTimeout(() => {
    const face1 = getFaceFromRotation(rot1);
    const face2 = getFaceFromRotation(rot2);

    if (face1 > face2) {
      winnerText.textContent = `🚩 Player 1 Wins! (Rolled ${face1} vs ${face2})`;
    } else if (face2 > face1) {
      winnerText.textContent = `Player 2 Wins! 🚩 (Rolled ${face1} vs ${face2})`;
    } else {
      winnerText.textContent = `It's a Draw! (Both rolled ${face1})`;
    }

    button.disabled = false;
  }, 1000);
}

function getRandomRotation() {
  const angles = [0, 90, 180, 270];
  return {
    x: angles[Math.floor(Math.random() * angles.length)],
    y: angles[Math.floor(Math.random() * angles.length)]
  };
}

function getFaceFromRotation(rot) {
  if (rot.x === 0 && rot.y === 0) return 1;
  if (rot.x === 90) return 5;
  if (rot.x === 180) return 6;
  if (rot.x === 270) return 2;
  if (rot.y === 90) return 3;
  if (rot.y === 270) return 4;
  return 1;
}
