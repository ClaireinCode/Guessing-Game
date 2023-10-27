console.log("HELLO PAPA PLATOON!")
// Your function(s) should go here that will interact with the webpage or DOM

let randomNum = Math.floor(Math.random() * 101)
let guessHx = []
let resultBox = document.getElementById('result')
let historyBox = document.getElementById('guess-hx')


console.log(randomNum)

function checkGuess(){
    let guess = document.getElementById('input-box').value*1
    guessHx.push(guess)
    if (guess === randomNum){
        resultBox.innerText = "Correct!"
    } else if (guess > randomNum){
        resultBox.innerText = "Too high!"
    } else {
        resultBox.innerText = "Too Low!"
    }
    historyBox.innerText += ` ${guess} |`
}


function clearField(){
    resultBox.innerText = ''
    document.getElementById('input-box').value = ''
}

