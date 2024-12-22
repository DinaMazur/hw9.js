// завдання 1

// function logItem(array) {
//     for (let i = 0; i < array.length; i ++) {
//         console.log(`${i + i} - ${array[i]}`);
//     }
// }
// const items = ["Mango", "Poly", "Ajax"];
// const viklik = logItem(items)
// console.log(viklik);



// завдання 2

// function calculateEngravingPrice(message, pricePerWord){
//    const words = message.split("");
//    const priceSum = words.length * pricePerWord
//    return priceSum;
// }

// const message = "Приклад Гравіювання"
// const pricePerWord = 5;  //Ціна за слово
// const challenge = calculateEngravingPrice(message, pricePerWord);
// console.log(`Сума гравіювання ${challenge}`);



// завдання 3

// function findLongestWord(string) {
//    const words = string.split(' ');
//    let longWord = words[0];
//    for (const word of words) {
//      if (word.length > longWord.length) {
//        longWord = word;
//      }
//    }
//    return longWord;
//  }
//  console.log(findLongestWord(" Олександр Усик найкращий"));




// завдання 4

// function formatString(string) {
//    if (string.length <= 40) {
//        return string
//    } else {
//        return string.slice(0, 40) + "...";
//    }
// }

// const shortString = "Це короткий рядок";
// const longString = "Цей рядок довший за 40 символів і потрбує форматування";
// console.log(formatString(shortString)); 


// завдання 5

// function checkForSpam(message) { 
//    const lowerCaseMessage = message.toLowerCase();
//      if (lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale')) {
//         return true;
//      } else {
//             return false; 
//      }
// }

// console.log(checkForSpam(" in the next day Jysk will have very good sale"));
// console.log(checkForSpam("Have you ever read this book?"));
// console.log(checkForSpam("dog sister spam letter"));

