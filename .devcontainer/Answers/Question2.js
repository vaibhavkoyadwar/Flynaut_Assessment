function bigchain(word) {
    let initialLength = 0;
    let finalLength = 0;
    
    for (let i = 0; i < word.length; i++) {
      if (word[i] === '1') {
        initialLength++;
        finalLength = Math.max(initialLength, finalLength);
      } else {
        initialLength = 0;
      }
    }
    
    return finalLength;
  }
  
  const word = '00000111110101001111100001001';
  const ChainLength = bigchain(word);
  console.log(ChainLength);
  