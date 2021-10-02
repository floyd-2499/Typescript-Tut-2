// object

const person1:object = {
    name: 'Floyd Manuel',
    age: 27,
}

console.log(person1);
// console.log(person1.name);gives error cz you mentioned person as object
// how to get? hmm...
// so answer:-

const person2:{name:string, age:number, email:string} = {
    name: 'Floyd Manuel',
    age: 22,
    email: "me@gmail.com"
}
console.log(person2 ,"- object")
console.log(person2.name , "- name")

// what if you had many objects then???
// like below
const person3:{name:string, age:number, email:string} = {
    name: 'Floyd Manuel',
    age: 22,
    email: "me@gmail.com"
}
// then try this...

type objType = {name:string, age:number, email:string}
// then you can directly use objType(any name)
const person4:objType = {
    name: 'Floyd Manuel',
    age: 22,
    email: "me@gmail.com"
}
const person5:objType = {
    name: 'Prakash Manuel',
    age: 18,
    email: "Pakku@gmail.com"
}
