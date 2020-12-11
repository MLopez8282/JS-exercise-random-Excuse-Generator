
let who = ['The dog ', 'My grandma ', 'His pig ', 'My monkey '];
let action = ['ate ', 'peed ', 'crushed ', 'threw ', 'hid '];
let what = ['my homework ', 'the keys ', 'the car '];
let when = ['before  class ', 'while walking ', 'when I was sleeping ', 'while talking ', 'during my lunch ', 'while I was showering '];



function randomNumber(array) {
    
    return Math.floor(Math.random() * array.length);

    


}
document.querySelector("#excuse").innerHTML = who[randomNumber(who)] + action[randomNumber(action)] + what[randomNumber(what)] + when[randomNumber(when)];

console.log(randomNumber);



