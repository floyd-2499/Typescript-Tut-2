// Array type in TypeScript
var arr = ["php", "js", "ts", "node"]; //string array - :string[]
// let arr2:string[] | number[] = ["php", "js", "ts", "node"]; //string/number array - :string[] | number []
// let randomNum = ["abc", 123, false] //all mix so
var random = ["abc", 123, false];
// what if you have many
// so
var random2 = ["abc", 123, false];
// **********************************************************
// Tuple - vid 10
// Tuple means - you specify all
var role = ["admin", "manager", 2, 5];
// but if you wanna edit it
// role[0] = 123; //error cz only string  can pass at position[0]
role[1] = "hello"; // it can pass
// to push
var role2 = [
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
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["manager"] = 1] = "manager";
    Role[Role["read_only_user"] = 2] = "read_only_user";
})(Role || (Role = {}));
// this is used cz when you jus type Role for further reference it automatically pops up - Role.
// console.log(Role)
// console.log(Role.admin, "admin")
// console.log(Role.manager, "manager")
// *********************************************************
// ANY type in TypeScript
// any means any kind of data type can come...
var data = 10;
data = "hello";
// you can also define any as array....   but in js has more chances of getting error
var data2 = [20, "yo yo"];
// ******************************************************************
// union Type in Typescript
// union type means assigning two or more types
var data10 = 10; //example
function combine(a, b) {
    // return a+b  this shows error so try below
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
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
var dataLt = "abc"; // but here you can only apply two types of values (string/number)
//  if many numbers use literals
// https://www.youtube.com/watch?v=hgtYclE95sc&t=1s  - check vid 14
function combineMe(a, b, type) {
    if (type === "as-number") {
        return +a + +b;
    }
    else {
        return a.toString() + b.toString();
    }
}
var a = 20;
var b = "hello";
var c = undefined;
var d = true;
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
function add3() {
    return 50;
    // return "hello" // if you pass string it shows error
}
function add4(a, b) {
    return a + b;
    //   return a+b+"yo bro" //error
}
// the add4 function only defines a numeric type return nothing else
console.log(add4(25, 50));
// lets try something new
var ab = 20;
var ac = "hello";
function add5() {
    // return ac; //error cz numeric type function
    return ab;
}
// ******************************************************************
// Void 
// when a function is returning nothing it is void type function 
function printData() {
    console.log("hello brother");
} // this functions returns nothing so this is void type function
