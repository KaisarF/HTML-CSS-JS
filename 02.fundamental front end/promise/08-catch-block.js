const executorFunction = (resolve, reject) => {
 const isCoffeeMakerReady = false;
 if(isCoffeeMakerReady) {
   resolve("Kopi berhasil dibuat");
 } else {
   reject("Mesin Kopi tidak bisa digunakan!")
 }
}

const handlerSuccess = coffee => {
  console.log(coffee);
 }
 
 const handlerRejected = penolakan=> {
  console.log(penolakan)
 }

const makeCoffee = new Promise(executorFunction);
makeCoffee
 .then(handlerSuccess)
 .catch(handlerRejected);

/* output:
Mesin Kopi tidak bisa digunakan!
*/