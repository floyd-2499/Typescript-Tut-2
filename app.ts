let numData = 20;
let strData = "hello";
let booData = true;

// type inference means you first do not define ..:number/:boolean/:string
// but it auto-detects the type.....
// further if you change num to bool... like

// numData = false;
// this shows error...

// but you can do this...

let data;
data = "abcd";
data = true;
data === 123;
console.log(data)



let me = 123; //you can change this 
me = 234;

// but if you
let num: 5; //you cannot edit that. if you, it gives error.
//  num= 10; //error
// num = 5;  //no-error


// Const
const val = 10; //constant - cannot change 