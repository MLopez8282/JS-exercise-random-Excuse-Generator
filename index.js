let who = ['The dog ','My grandma ','His turtle ','My bird '];
let action = ['ate ','peed ','crushed ','broke '];
let what = ['my homework ', 'the keys ', 'the car '];
let when = ['before the class ','right on time ','when I finished ','during my lunch ','while I was praying '];


function randomNumber(array){

   return Math.floor(Math.random() * array.length);

}
document.querySelector("#excuse").innerHTML = who[randomNumber(who)] + action[randomNumber(action)] + what[randomNumber(what)] + when[randomNumber(when)];

 console.log(randomNumber);


/*randomNumber(when)
console.log(when[randomNumber(when)]);*/

