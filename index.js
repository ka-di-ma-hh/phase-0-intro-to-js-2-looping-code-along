// Code your solutions in this file

function writeCards() {
    let names = ["Guadalupe", "Ollie", "Aki"];
      let messages = [];
      for (let i = 0; i < names.length; i++) {
          messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
      }
       return messages
  }
  console.log(writeCards())
  
  function countDown(number) {
      for (let i = number; i >= 0; i--) {
          console.log(i);
      }
  }
  console.log(countDown)
