// Write Pseudo Code here
// Make a 12 card memory game -. If they are a match, they stay flipped. If not, they flip back over. Game is done when all cards are matched and flipped over.

//users must be able to select (eventListener on each box)
const userChoice = document.querySelectorAll(".userChoice")
let topOne = document.querySelector("#topOne")
let topTwo = document.querySelector('#topTwo')
let images = ['images/chief.jpeg', 'images/leon2.jpeg', 'images/giraffe.jpeg', 'images/download.jpeg', 'images/phone.jpeg', 'images/soccerball.png']
// create array where images will go into and make it into object becuase we want the array to have set length
// let targetArray = new Array(images.length * 2)
let targetArray= images.concat(images)
let topimageOne = document.querySelector('.topOneimg')
let topTwoimg = document.querySelector('.topTwoimg')
let count=0

shuffle(targetArray)
console.log(targetArray)


userChoice.forEach(el => {
  el.addEventListener('click', event => {
    let index= checkIndex(event)
    console.log(el)
    event.target.querySelector('img').src=targetArray[index]
    count++

  })

})

function checkIndex(event) {
  console.log(Array.from(userChoice).indexOf(event.target))

  return Array.from(userChoice).indexOf(event.target)
}

function winning(count){
if(count%2===0 )
}


//
// function setupGame() {
//   for (let i = 0; i < images.length; i++) {
//     populateTarget(images[i])
//     populateTarget(images[i])
//
//   }
// }

// function populateTarget(image) {
//   let j = Math.floor(Math.random() * targetArray.length)
//   for (let limit = 0; limit < targetArray.length; limit++) {
//     if (j >= targetArray.length) {
//       j = 0
//     }
//     if (targetArray[j] === undefined) {
//       targetArray[j] = image
//     }
//     j++
//   }
// console.log(targetArray)
//
// }
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}



document.onload = () => {
  document.querySelectorAll(".userChoice").forEach(el => {
    el.classList.add(".basketball");
  });
}
// when clicked, image(symbol) -> Match classes for same img<-- is returned to user (x2) to select two cards

//Program checks to see if there is a match
//if they are a match(conditional statements) then stay flipped and allow users to keep playing
//if they are not a match, flip over
//once all match is met, game is over
