let character: string = 'osi';
let age: number;
let isLoggedIn: boolean;

// age = 'luigi';
age = 30;

// isLoggedIn = 25;
isLoggedIn = true;

// arrays
let manis: string[] = [];

manis.push('gen');
manis.push('gu');
console.log(manis);

// union types
// in array we need to use (and type of array with |), not in the variable 
let mixed: (string|number|boolean)[] = [];
mixed.push('hello');
mixed.push(false);
mixed.push(20);
console.log(mixed);

let uid: string|number;

// objects
let mani: object;
mani = { name: 'yoshi', age: 30 };

let osi: {
  name: string,
  age: number,
  beltColour: string
};
osi = { name: 'ken', age: 20, beltColour: 'black' };
