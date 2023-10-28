console.log("HELLO PAPA PLATOON!")
// Your function(s) should go here that will interact with the webpage or DOM

let randomNum = Math.floor(Math.random() * 101)
let rando = Math.floor(Math.random() * 4)
let resultBox = document.getElementById('result')
let historyBox = document.getElementById('guess-hx')
let image1 = "https://media.giphy.com/media/g9582DNuQppxC/giphy.gif"
let image2 = "https://media.giphy.com/media/wZjlCH43M3M0U/giphy.gif"
let image3 = "https://media.giphy.com/media/XreQmk7ETCak0/giphy.gif"
let image4 = "https://media.giphy.com/media/l2Sqir5ZxfoS27EvS/giphy.gif"
let image_select = [image1, image2, image3, image4]

console.log(randomNum)

function checkGuess(){
    let guess = document.getElementById('input-box').value*1
    if (guess === randomNum){
        resultBox.innerText = "Correct!"
        randomCongrats()
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

function randomCongrats(){
    console.log(image_select[rando])
    
    let parent = document.getElementById('image_div')
    let img = document.createElement('img')
    img.src = image_select[rando]
    parent.appendChild(img)

}

// randomCongrats()

/* <img src="https://media.giphy.com/media/g9582DNuQppxC/giphy.gif" id="congrats1" class="congrats_image">
      <img src="https://media.giphy.com/media/wZjlCH43M3M0U/giphy.gif" id="congrats2" class="congrats_image">
      <img src="https://media.giphy.com/media/XreQmk7ETCak0/giphy.gif" id="congrats3" class="congrats_image">
      <img src="#" id="congrats4" class="congrats_image"></img> */