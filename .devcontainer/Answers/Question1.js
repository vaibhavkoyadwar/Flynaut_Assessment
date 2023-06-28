var fullWordList = ['1', '2', '3', '4', '5'];
var wordsToRemove = ['1', '2', '3'];

//create the empty array to store the duplicate and same value
let duplicate = [];
let same_values = [];

for (let i = 0; i < fullWordList.length; i++) {
    //here value according to the index is given to the 'word ' variable
    let word = fullWordList[i];
    //here it is compared as if the value is present in the another array,
    
  if (wordsToRemove.includes(word)) {
      //if yes then it is pushed in the empty array as below
    duplicate.push(word);
    same_values.push(word);
  }
}

//here we are printing the output
console.log("Duplicates:", duplicate);
console.log("Same_values:", same_values);
