// Array type in TypeScript

let arr:string[] = ["php", "js", "ts", "node"]; //string array - :string[]
// let arr2:string[] | number[] = ["php", "js", "ts", "node"]; //string/number array - :string[] | number []

// let randomNum = ["abc", 123, false] //all mix so
let random:[string, number, boolean] = ["abc", 123, false];
// what if you have many
// so 
let random2:any[] = ["abc", 123, false];



// Tuple - vid 10
// Tuple means - you specify all 
let role:[string, string, number, number] = ['admin', 'manager', 2 , 5];
// but if you wanna edit it
// role[0] = 123; //error cz only string  can pass at position[0]
role[1] = "hello"; // it can pass

// to push
let role2:[string, string, number, number, boolean?] = ['admin', 'manager', 2 , 5];
role2.push(true);
console.log(role2)

