// hello
console.log("hello and welcome back");

//  for "noUnusedLocals"
function apple() {
  // let x=10; //"noUnusedLocals": true is commented-out so you get warning
  return true;
}

apple();

// for "noUnusedParameters"
// function mango(data) {
//   let item = 10;
//   return true;
// }
// mango("fruit");

// "noImplicitReturns"
// error/warning - Not all code paths return a value.
function orange(data: string | number) {
  if (data == 20) {
    return true;
  } else {
    console.log("yo bro");
  }
}

orange("fruit");

// "noFallthroughCasesInSwitch"
// error/warning - Fallthrough case in switch.
// but if you add break; - no error
function cherry(data: string) {
  switch (data) {
    case "fruit":
      console.log("fruit - true");

      break;

    case "color":
      console.log("red");
  }
}
cherry("fruit");
