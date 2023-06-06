// variabele maken waar 5 getallen in zitten. 
let dice = [1, 5, 1, 2, 3];

let onesScore = document.getElementById("ones");
onesScore.addEventListener("click", function() {
  this.innerText = calculateScoreForNumber(1);
})


// maak het skelet van een functie die sum heet
function sum() {
  // let result = dice[0] + dice[1] + dice[2] + dice[3] + dice[4];
  let result = 0;
  // 1. index variabele aanmaken
  // 2. Evaluatie: Gaan we nog door met loopen of niet?
  // 3. increment: Ophogen van index variabele
  for (let index = 0; index < dice.length; index++ ) {
      // console.log(index)
      // console.log(dice[index]);
      result = result + dice[index]
  }
  console.log(result);
  return result;
}

// stel 5, 5, 1, 2, 3 -> countNumber(5)
// verwachte uitkomst? 2
// Uitkomst: 1

// stel 5, 4, 1, 2, 3 -> countNumber(5)
// verwachte uitkomst? 1
// Uitkomst: 1

// stel 1, 5, 1, 2, 3 -> countNumber(4)
// verwachte uitkomst? 0
// Uitkomst: 

function countNumber(num) {
  let result = 0;
  // voor iedere dobbelsteen
  for (let index = 0; index < dice.length; index++ ) {
  // als de dobbelsteen 2 is
    if (dice[index] === num) {
      result++; // result = result + 1; result += 1;
    }
  }
  return result;
}

function calculateScoreForNumber(num) {
  // resultaat = ogen * frequentie
  return countNumber(num) * num;
}

