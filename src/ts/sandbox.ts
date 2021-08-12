// not return number or something else, just print in console 
let hello: (a: string, b: string) => void;

hello = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
}

let calc: (a: number, b: number, c: string) => number;
// return number like int function in cpp
calc = (numOne: number, numTwo: number, action: string) => {
  if (action === 'add') {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
}

let logDetails: (obj: {name: string, age: number}) => void;

logDetails = (mani: {name: string, age: number}) => {
  console.log(`${mani.name} is ${mani.age} years old`);
}