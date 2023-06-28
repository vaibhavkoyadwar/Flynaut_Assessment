let obj1 = { "greeting": "hello" };
let obj2 = obj1;
obj1["greeting"] = "Bye";  //from this line bye will be the value for "greeting


console.log(obj1);    //{ greeting: 'Bye' }
console.log(obj2);    //{ greeting: 'Bye' }  // as this both obj1  and obj2 are sharing the same refrence variable the output will be same
