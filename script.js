// variables
const rollBtn = document.querySelector('.roll');
const allDice = document.querySelectorAll('.dice');
const allDiceSvg = ['dice-1.svg', 'dice-2.svg', 'dice-3.svg', 'dice-4.svg', 'dice-5.svg', 'dice-6.svg'];
const rollCount = document.querySelector('.counter');
const rollNumber = document.querySelector('.number');
const endTurnBtn = document.querySelector('.end-turn');
const instructions = document.querySelector('.instructions');
const scoreForm = document.querySelector('.choose-score');
const scoreOptions = document.getElementsByTagName('option');
const noInputsNeeded = ['full-house', 'sm-straight', 'lg-straight', 'yahtzee', 'no-score'];
const scoreInput = document.querySelector('.score-input');
const selectElement = document.getElementById('scores');
const selectedIndex = selectElement.selectedIndex;

// functions
// get random element from array
const randomise = (array) => {
  return array[Math.floor(Math.random() * array.length)];
}

// actions for when turn ends (to save repeated code)
const showWhenTurnEnds = () => {
  instructions.textContent = 'End of turn!'
  rollCount.textContent = 'Decide how you want to score:';
  allDice.forEach(dice => dice.style.cursor = 'not-allowed');
  scoreForm.style.display = 'block';
  endTurnBtn.style.display = 'none';
  rollBtn.style.display = 'none';
}

// action for when roll dice button clicked
rollBtn.addEventListener('click', () => {
  endTurnBtn.style.display = 'block';
  instructions.textContent = 'Click on a dice to lock it';

  parseInt(rollNumber.textContent -= 1);
  if (parseInt(rollNumber.textContent) === 1) {
    rollCount.textContent = '1 roll left';
  }
  else if (parseInt(rollNumber.textContent) === 0) {
    showWhenTurnEnds();
  }

  allDice.forEach(dice => {
    if (!dice.classList.contains('locked-dice')) {
      dice.src = `public/${randomise(allDiceSvg)}`;
      dice.alt = `dice showing ${dice.src.match(/-[0-6]/)}`

      if (parseInt(rollNumber.textContent) >= 1) {
        dice.addEventListener('click', () => {
          dice.classList.add('locked-dice');
        })
      }
    }
  })
})

// action for when end turn button clicked
endTurnBtn.addEventListener('click', () => {
  showWhenTurnEnds();
})

if (selectedIndex === 8) {
  scoreInput.style.display = 'none';
  console.log('full house')
}
