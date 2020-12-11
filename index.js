
let who = ['The dog ', 'My grandma ', 'His pig ', 'My monkey '];
let action = ['ate ', 'peed ', 'crushed ', 'threw ', 'hid '];
let what = ['my homework ', 'the keys ', 'the car '];
let when = ['before  class ', 'while walking ', 'when I was sleeping ', 'while talking ', 'during my lunch ', 'while I was showering '];



function randomSentence(array) {
    
    let randomNumber = Math.floor(Math.random() * array.length);

    return array[randomNumber]


}
document.querySelector("#excuse").innerHTML = randomSentence(who) + randomSentence(action) + randomSentence(what) + randomSentence(when);

console.log(randomNumber);



