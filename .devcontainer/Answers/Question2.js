function bigchain(word) {
    //let's take couple of variables to store the values and initialize it to 0.
    let initialLengthOf_1 = 0;
     let initialLengthOf_0 = 0;
    let finalLength_1 = 0;
    let finalLength_0 = 0;
    
    for (let i = 0; i < word.length; i++) {
        //check for the value of word matches accordingly
      if (word[i] === '1' ) {
          //if yes ,then increase the count
        initialLengthOf_1++;
        initialLengthOf_0 = 0;

          //here we used  inbuilt method 'max', so as to initialize the max value for the variable declared
        finalLength_1 = Math.max(initialLengthOf_1, finalLength_1);
        
      }
      
      if(word[i]==='0'){
            //if yes ,then increase the count
          initialLengthOf_0++;
          initialLengthOf_1 = 0;

            //here we used  inbuilt method 'max', so as to initialize the max value for the variable declared
          finalLength_0 = Math.max(initialLengthOf_0, finalLength_0);
          
      }else {
          //if the chain breaks the initialize the value to zero
              initialLengthOf_0 = 0;
              initialLengthOf_1 = 0;
      }
    }
    
    return  Math.max(finalLength_0, finalLength_1);;
  }
  
  const word = '00000111110101001111100001001';
  const ChainLength = bigchain(word);
  console.log(ChainLength);
