// Array type in TypeScript

let arr: string[] = ["php", "js", "ts", "node"]; //string array - :string[]
// let arr2:string[] | number[] = ["php", "js", "ts", "node"]; //string/number array - :string[] | number []

// let randomNum = ["abc", 123, false] //all mix so
let random: [string, number, boolean] = ["abc", 123, false];
// what if you have many
// so
let random2: any[] = ["abc", 123, false];

// **********************************************************

// Tuple - vid 10
// Tuple means - you specify all
let role: [string, string, number, number] = ["admin", "manager", 2, 5];
// but if you wanna edit it
// role[0] = 123; //error cz only string  can pass at position[0]
role[1] = "hello"; // it can pass

// to push
let role2: [string, string, number, number, boolean?] = [
  "admin",
  "manager",
  2,
  5,
];
role2.push(true);
// console.log(role2)

// **********************************************************

// Enum - vid-11
// enum - gives number to every string/value

enum Role {
  admin,
  manager,
  read_only_user,
}

// this is used cz when you jus type Role for further reference it automatically pops up - Role.
// console.log(Role)
// console.log(Role.admin, "admin")
// console.log(Role.manager, "manager")

// *********************************************************

// ANY type in TypeScript
// any means any kind of data type can come...
let data: any = 10;
data = "hello";
// you can also define any as array....   but in js has more chances of getting error
let data2: any[] = [20, "yo yo"];

// ******************************************************************

// union Type in Typescript
// union type means assigning two or more types
let data10: number | string = 10; //example

function combine(a: number | string, b: number | string) {
  // return a+b  this shows error so try below

  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return a.toString() + b.toString();
  }
}
// console.log(combine(10,20))
// console.log(combine("Floy","Manuel"))

// what is alternate???

// use any???

//  better use union  than any cz some benefits you won't receive in any.

// ******************************************************************

// Literal Type in TS
// Actual type is written instead of union...  like
let dataLt: "abc" | 123 = "abc"; // but here you can only apply two types of values (string/number)

//  if many numbers use literals
// https://www.youtube.com/watch?v=hgtYclE95sc&t=1s  - check vid 14

function combineMe(
  a: number | string,
  b: number | string,
  type: "as-number" | "as-string"
) {
  if (type === "as-number") {
    return +a + +b;
  } else {
    return a.toString() + b.toString();
  }
}
// console.log(combineMe(10, 20, "as-number"));
// console.log(combineMe("Floy", "Manuel", "as-string"));

// ******************************************************************

// Type Alias in TS
// writing common type for below

// let a : string|number|undefined|boolean = 20;
// let b : string|number|undefined|boolean = "hello";
// let c : string|number|undefined|boolean = undefined;
// let d : string|number|undefined|boolean = true;

// instead of writng similar code for all do alias

type anyNameType = string | number | undefined | boolean;
let a: anyNameType = 20;
let b: anyNameType = "hello";
let c: anyNameType = undefined;
let d: anyNameType = true;
// works.......!!!!

// ******************************************************************

// Function Type
// we use function type to get correct return type-value

function add() {
  return "yo";
} // string type function  - hover over "function"
function add2() {
  return 203;
} // numeric type function
// How to define...??

function add3(): number {
  return 50;
  // return "hello" // if you pass string it shows error
}


function add4(a: number, b: number): number {
  return a + b;
//   return a+b+"yo bro" //error
}
// the add4 function only defines a numeric type return nothing else
console.log(add4(25, 50));

// lets try something new
const ab = 20;
const ac = "hello";
function add5():number{
    // return ac; //error cz numeric type function
    return ab;
}

// ******************************************************************


// Void - function
// when a function is returning nothing it is void type function 
let today;
function printData(){
    console.log("hello brother")
    today = new Date;
} // this functions returns nothing so this is void type function


// ******************************************************************
