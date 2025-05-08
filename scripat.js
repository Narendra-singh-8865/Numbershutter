let maxClicks = 15;
let timeLimit = 15; 
const clickedIndices = [];
const clickedValues = [];

let total = 0;
let timerCount = 0;

const container = document.querySelector('#number');
const sumDisplay = document.querySelector('#sum');
const targetDisplay = document.querySelector('#target');
const timeDisplay = document.querySelector('#time');
const clickDisplay = document.querySelector('#click-data');

const targetNumber = Math.floor(Math.random() * 30 + 3);
targetDisplay.innerHTML = `Target: ${targetNumber}`;

let timer = setInterval(() => {
  timerCount++;
  timeDisplay.textContent = `Time: ${timerCount} Sec`;
  if (timerCount === timeLimit) {
    clearInterval(timer);
    alert('Time out. Please restart the game.');
    document.querySelectorAll('.circle').forEach(div => div.style.pointerEvents = "none");
  }}, 1000);

function restartFunction() {
  location.reload();
}

let remainingClicks = maxClicks;

for (let i = 0; i < 208; i++) {
   
  const div = document.createElement('div');
  div.classList.add('circle');
  container.appendChild(div);

  div.addEventListener('click', function () {
    if (clickedIndices.includes(i)) {
      alert('You already clicked this circle.');
      }

    if (clickedValues.length >= maxClicks) {
      alert(`You can only click ${remainingClicks} times.`);
      }
  
    const randomValue = Math.floor(Math.random() * 30);
    div.textContent = randomValue;
    div.style.backgroundColor = "#6d2727";
    clickedIndices.push(i);
    clickedValues.push(randomValue);

    total = clickedValues.reduce((sum, num) => sum + Number(num), 0);
     sumDisplay.textContent = `Sum: ${total}`;
     remainingClicks--;
     clickDisplay.textContent = `Click: ${remainingClicks}`; 
     
     if (randomValue <= 2) {
     total = total - randomValue;
     sumDisplay.textContent = `Sum: ${total} `;
     div.textContent = "Bhum";  
       document.querySelectorAll('.circle').forEach(div => div.style.pointerEvents = "none");   
      clearInterval(timer);
      }

    if (randomValue == targetNumber) {
      div.style.backgroundColor = '#5d390edb';
    }
    
    if (clickedValues.length === maxClicks) {
      clearInterval(timer);
      alert(`You reached the 15-click limit. Your final score is: ${total}`);
      document.querySelectorAll('.circle').forEach(div => div.style.pointerEvents = "none");
    } });
}          
function andgame(e){
 if(e.id == "submit"){              
 clearInterval(timer);
 alert(`You reached the ${remainingClicks}-click limit. Your final score is: ${total}`);
  document.querySelectorAll('.circle').forEach(div => div.style.pointerEvents = "none");
  }
}

