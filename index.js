// const gifts = ["teddy bear", "drone", "doll"];

const { interfaces } = require("mocha");

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);


const names = ["Guadalupe", "Ollie", "Aki"]
const event = 'surprise';

function writeCards(names, event){
  let newArray = [] 
  for (let i = 0; i < names.length; i++ ){
      newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);  
    }
    return newArray
}
function countDown(number){
    let i=10;
    while (i >= 0){
        console.log(i);
        i--
    }
    return number;
}
