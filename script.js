'use strict';

console.log(document.querySelector('.message').textContent);

//random number
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const rndInt = randomIntFromInterval(1, 20);
console.log(rndInt);

//correct
document.querySelector('.check').addEventListener('click',function(){
    if(document.querySelector('#numberGuess').value == rndInt)
    {
        document.querySelector('.message').textContent = "Correct Ansswer Hurray!!!!!😍✨"
        document.querySelector('body').style.backgroundColor = "green";
        //updated highest score
        let currentScoreValue = document.querySelector('.scoreValue').textContent;
        let updatedValue = document.querySelector('.attemptValue').textContent;
        document.querySelector('.scoreValue').textContent = Math.max(currentScoreValue,updatedValue);
        document.querySelector('.helper').textContent = "CORRECT💖🎶😎💖";
    }
    else{
        //wrong
        document.querySelector('.message').textContent = "Keep Trying😢😜"
        document.querySelector('body').style.backgroundColor = "red";
        document.querySelector('.attemptValue').textContent = document.querySelector('.attemptValue').textContent - 1;
        if(document.querySelector('#numberGuess').value > rndInt) {
            document.querySelector('.helper').textContent = "TOO HIGH😁🤦‍♀️🤦‍♂️";
        }
        else if (document.querySelector('#numberGuess').value < rndInt){
            document.querySelector('.helper').textContent = "TOO LOW🤦‍♀️🤦‍♂️🤷‍♀️🤷‍♂️";
        }
    }
    
});

//display
console.log(document.querySelector('.display').textContent);
document.querySelector('.display').textContent = document.querySelector('#numberGuess').value;
console.log(document.querySelector('.display').textContent);

document.querySelector('.restart').addEventListener('click',function(){
    document.querySelector('body').style.backgroundColor = "white";
    document.querySelector('.message').textContent = "Start Guessing 🤔🤔🤔"
    document.querySelector('.display').textContent = "?";
    document.querySelector('.attemptValue').textContent = 20;
    document.querySelector('.helper').textContent = "Start the journey!!!"
});

