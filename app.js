var numData = 20;
var strData = "hello";
var booData = true;
// type inference means you first do not define ..:number/:boolean/:string
// but it auto-detects the type.....
// further if you change num to bool... like
// numData = false;
// this shows error...
// but you can do this...
var data;
data = "abcd";
data = true;
data === 123;
console.log(data);
var me = 123; //you can change this 
me = 234;
// but if you
var num; //you cannot edit that. if you, it gives error.
//  num= 10; //error
// num = 5;  //no-error
// Const
var val = 10; //constant - cannot change 
