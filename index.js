const name = ["jude","masssi","jess"]
function writeCards(names) {
    const thankYouMessages = [];
    
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    
    return thankYouMessages;
  }

console.log(writeCards(name));
 
//for(let countDown= 10; countDown> -1; countDown --){
  //console.log(countDown)
//}

//let countDown = 10;
//while(countDown >=0){
  //console.log(countDown--);
//}
function countDown(number) {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
}
