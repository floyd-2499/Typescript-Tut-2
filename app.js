// const num:number = 10;
// console.warn(num)
// *********************************************
// NUMBER
// let num:number = "10"; //you cannot write like this ... cz number !== " ";
// let num:number = 10; //correct
// *********************************************
// let num:number = 10; 
// num = 10; 
//  num = "hello";       // error - Type 'string' is not assignable to type 'number'.
// *********************************************
// STRING
// let myString1:string = "abc";  //valid
// let myString2:string = "10";  // valid
// let myString2:string = 10;   //  not-valid
// *********************************************
// BOOLEAN
// let iamTrue:boolean = true; //valid
// let iamFalse:boolean = "false"; //not-valid
// *********************************************
function add(n1, n2) {
    return n1 + n2;
}
var result = add(10, 20);
console.log(result, "line-36 tut-2");
function myName(a) {
    return a;
}
var runName = myName("Dummy");
console.log(runName);
