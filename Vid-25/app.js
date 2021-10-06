"use strict";
// class Users {
//   name: any = "";
//   email: any = "";
//   addUsers(user: any) {
//     return `${user} is added.`;
//   }
// }
// let User1 = new Users();
// let result = User1.addUsers("Floyd");
// console.log(result);
// please watch video again... got an error
// For video 26 difference b/w ES5 and ES6 check the video
// vid 27
// public access modifier
class Me {
    constructor() {
        //   name = ""; // this was public
        this.name = ""; //now this becomes private
    }
    setName(name) {
        this.name = name;
    }
    displayName() {
        console.log(this.name);
        this.getLength(); //in private you use this....
    }
    //   if not specified as private/public
    //   for function - private -public
    //   getLength() {    //now  this is public ... for private type
    //     console.log(this.name.length);
    //   }
    getLength() {
        console.log(this.name.length);
    }
}
const u1 = new Me();
u1.setName("Floyd"); // here you can change but if you private to "name"
u1.displayName();
// u1.getLength() // in private you get error
//  if in public the above function
// you can change name..like
// u1.name ="Dummy"; // if in private then , here you'll get the error
