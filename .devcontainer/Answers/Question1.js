var fullWordList = ['1', '2', '3', '4', '5'];
var wordsToRemove = ['1', '2', '3'];

let duplicate = [];
let same_values = [];

for (let i = 0; i < fullWordList.length; i++) {
    let word = fullWordList[i];

  if (wordsToRemove.includes(word)) {
    duplicate.push(word);
    same_values.push(word);
  }
}

console.log("Duplicates:", duplicate);
console.log("Same_values:", same_values);
