// HOW IS YOUR DAY COUNTER
// SUNSHINE // RAINYDAYS

const sun = document.querySelector('.sunCounter')
const plusSun = document.querySelector('.plusSun')
const rain = document.querySelector('.rainCounter')
const plusRain = document.querySelector('.plusRain')


let countSun = 0;
// updaterar solsken

plusSun.addEventListener('click', () => {
    countSun++;
    updateSunshine();
})
function updateSunshine() {
    sun.innerHTML = countSun;
}

let countRain = 0;

plusRain.addEventListener('click', () => {
    countRain++;
    updateRain();
})

function updateRain() {
    rain.innerHTML = countRain;
}
 ///////    LIKES DISLIKES ///////////////////////
 const thumbsUp = document.querySelector('.thumbsUp')
 const likes = document.querySelector('.likes')
 const thumbsDown = document.querySelector('.thumbsDown')
 const dislikes = document.querySelector('.dislikes')

let like = 0;

// LIKES

thumbsUp.addEventListener('click', () => {
    like++
    updateLikes();
})

function updateLikes() {
    likes.innerHTML = like;
}

let dislike = 0;

// DISLIKES
thumbsDown.addEventListener('click', () => {
    dislike--
    updateDislikes();
})

function updateDislikes() {
    dislikes.innerHTML = dislike;
}

// counter  - 0 + /////////////////////////

const minusOne = document.querySelector('#sub')
const plusOne = document.querySelector('#plus')
const counter = document.querySelector('#counter')

// sätter räknare
let count = 0;



// funktion för att ta bort, med en if statement för att stoppa om räknaren är på 0
minusOne.addEventListener('click', () => {
    if(count === 0) {
        stop();
    } else {
count--; 
}
// updaterar räknaren
updateCounter();

})

// funktion för att lägga till i räknaren
plusOne.addEventListener('click', () => {
    count++;
    updateCounter();
})

// funktion för updatering av räknare så det syns i DOM:en
function updateCounter() {
    
    counter.innerHTML = count;
}