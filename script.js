const hoverSound = document.getElementById('hoverSound');
const clickSound = document.getElementById('clickSound');
const errorSound = document.getElementById('errorSound');

document.getElementById('yesButton').addEventListener('mouseover', () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
});

document.getElementById('noButton').addEventListener('mouseover', () => {
  hoverSound.currentTime = 0; 
  hoverSound.play();
});

document.getElementById('yesButton').addEventListener('click', () => {
  clickSound.currentTime = 0;
  clickSound.play();
});

document.getElementById('noButton').addEventListener('click', () => {
  errorSound.currentTime = 0;
    errorSound.play();
});

document.getElementById('yesButton').addEventListener('click', function () {
  const content = document.getElementById('content');
  content.innerHTML = `
      <div id="codeEditor">
          <div id="notebook">
              <h1>Yippie!</h1>
              <p id="notebookText"></p> <!-- Text will appear here -->
          </div>
      </div>
  `;

  const numHearts = 100;
  for (let i = 0; i < numHearts; i++) {
      const heart = document.createElement('img');
      heart.src = 'heart.png';
      heart.classList.add('heart');
      heart.style.top = `${Math.random() * 100}%`; 
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.animationDelay = `${Math.random() * 5}s`;
      document.body.appendChild(heart);
  }

  const codeText = `Afdsfdsfsdfs, you said yes! I love you so much!\n I wish we could be together for Valentine's Day, but I know I'll or well we'll make up for it in April!\n Anyways, thank you for being an amazing girlfriend, and for making me the happiest person ever\n I love you so so much!\nWish I could give you the biggest smooch right. (APRIL.)`

  const notebookText = document.getElementById('notebookText');
  let index = 0;

  function typeCode() {
      if (index < codeText.length) {
          notebookText.textContent += codeText[index];
          index++;
          setTimeout(typeCode, 20);
      }
  }

  typeCode();
});

const noButton = document.getElementById('noButton');
const noButtonMessages = [
    "Still no, fricking freak",
    "Nah, you stink.",
    "I rather not..",
    "Nah, you're ugly",
    "Nah, I don't wanna."
];
let noButtonClickCount = 0;

noButton.addEventListener('click', function () {
    noButton.textContent = noButtonMessages[noButtonClickCount % noButtonMessages.length];
    noButtonClickCount++;
});
