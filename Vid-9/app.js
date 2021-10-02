// Array type in TypeScript
var arr = ["php", "js", "ts", "node"]; //string array - :string[]
// let arr2:string[] | number[] = ["php", "js", "ts", "node"]; //string/number array - :string[] | number []
// let randomNum = ["abc", 123, false] //all mix so
var random = ["abc", 123, false];
// what if you have many
// so 
var random2 = ["abc", 123, false];
// Tuple - vid 10
// Tuple means - you specify all 
var role = ['admin', 'manager', 2, 5];
// but if you wanna edit it
// role[0] = 123; //error cz only string  can pass at position[0]
role[1] = "hello"; // it can pass
// to push
var role2 = ['admin', 'manager', 2, 5];
role2.push(true);
console.log(role2);
