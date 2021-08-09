let age: any = 25;

age = true;
console.log(age);
age = 'hello';
console.log(age);
age = { name: 'mani' };
console.log(age);

let mixed: any[] = [];

mixed.push(5);
mixed.push('mario');
mixed.push(false);
console.log(mixed);

let object: { name: any, age: any };

object = { name: 'hey', age: 25 };
console.log(object);

object = { name: 25, age: 'wow' };
console.log(object);