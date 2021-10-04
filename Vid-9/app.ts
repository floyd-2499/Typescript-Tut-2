// Array type in TypeScript

let arr:string[] = ["php", "js", "ts", "node"]; //string array - :string[]
// let arr2:string[] | number[] = ["php", "js", "ts", "node"]; //string/number array - :string[] | number []

// let randomNum = ["abc", 123, false] //all mix so
let random:[string, number, boolean] = ["abc", 123, false];
// what if you have many
// so 
let random2:any[] = ["abc", 123, false];

// **********************************************************

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

// **********************************************************

// Enum - vid-11
// enum - gives number to every string/value 

enum Role{
    admin, manager, read_only_user
}

// this is used cz when you jus type Role for further reference it automatically pops up - Role.
console.log(Role)
console.log(Role.admin, "admin")
console.log(Role.manager, "manager")

// *********************************************************

// ANY type in TypeScript
// any means any kind of data type can come...
let data:any = 10;
data = "hello";
// you can also define any as array....   but in js has more chances of getting error
let data2:any[] = [20, "yo yo"];

// ******************************************************************

// union Type in Typescript
// union type means assigning two or more types
let data10 : number | string = 10; //example

function combine(a:number | string, b:number |string){
    // return a+b  this shows error so try below

    if(typeof a === 'number' && typeof b === 'number'){
        return a+b;
    }else {
        return a.toString() + b.toString();
    }
}
console.log(combine(10,20))
console.log(combine("Floy","Manuel"))

// what is alternate???

// use any???

//  better use union  than any cz some benefits you won't receive in any.


