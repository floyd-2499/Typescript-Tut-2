// Difference between javascript and Typescript

// function add(n1:number, n2:number){
//     return n1+n2;
// }
// let result = add(10, 20);
// console.log(result, "line-5 tut-2");

// the above is from typescript



// the below one is normal JavaScript

function sum(num1, num2){

    if(typeof num1 === "number" && typeof num2 === "number"){
        return num1+num2;
    }else{
       return new Error("values are not number") 
    }
}

console.log(sum(20, 30), "@line 5") // result = 50
console.log(sum("20", 30), "@line 5") // result = 2030 so Error