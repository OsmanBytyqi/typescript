let age: any = 25;

age = true;
console.log(age);
age = 'hello';
console.log(age);
age = { name: 'wow' };
console.log(age);

let mixed: any[] = [];

mixed.push(5);
mixed.push('mario');
mixed.push(false);
console.log(mixed);

let mani: { name: any, age: any };

mani = { name: 'wow', age: 25 };
console.log(mani);

mani = { name: 25, age: 'wow' };
console.log(mani);