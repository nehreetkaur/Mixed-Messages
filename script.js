const iceCream={
  flavours:["chocolate","strawberry","vanilla","cookies&cream"],
  toppings:["choco-waffer","sprinkles","gummies","m&ms"],
  cones:["waffer","simple","chocolate","cup"],
  


}
// to get random index of props
let myFlavour=iceCream.flavours[Math.floor(Math.random()*iceCream.flavours.length)];
//console.log(myFlavour)
let myTopping=iceCream.toppings[Math.floor(Math.random()*iceCream.toppings.length)];
//console.log(myTopping)
let myCones=iceCream.cones[Math.floor(Math.random()*iceCream.cones.length)];
//console.log(myCones);

console.log(`Your icecream flavour is  ${myFlavour} and you chosen a ${myCones} cone with ${myTopping} topping  ENJOYY!!!
`);