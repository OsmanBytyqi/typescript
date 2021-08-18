
 import { Invoice } from "./classes/Invoice.js";
 import { Payments } from "./classes/payment.js";
 import { formatter } from './interfaces/formatter.js';
 import { ListTemplate } from './classes/templates.js';

//  import { formatter } from './interfaces/formatter.js';




 // interfaces
 export interface IsPerson {
   name: string;
   age?: number;
   speak(a: string): void;
   spend(a: number): number;
 }
 
 const me: IsPerson = {
   name: 'Osman',
   //age: 30,
   speak(text: string): void {
     console.log(text);
   },
   spend(amount: number): number {
     console.log('I spent ', amount);
     return amount;
   },
 };
 
 console.log(me);
 me.speak('hello, world');
 
 const greetPerson = (person: IsPerson): void => {
   console.log('hello ', person.name);
 }
 
 greetPerson(me);
 //greetPerson({name: 'shaun'});
 
 const form = document.querySelector('.new-item-form') as HTMLFormElement;
 console.log(form.children);
 
 // inputs
 const type = document.querySelector('#type') as HTMLInputElement;
 const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
 const details = document.querySelector('#details') as HTMLInputElement;
 const amount = document.querySelector('#amount') as HTMLInputElement;

 const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

 
 form.addEventListener('submit', (e: Event) => {
   e.preventDefault();
   let doc: formatter;
   if (type.value === 'invoice') {
     doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
   } else {
     doc = new Payments(tofrom.value, details.value, amount.valueAsNumber);
   }
   list.render(doc, type.value, 'end');
 });



//<T>(type)


 const addUID = <T extends {name: string}>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
}

let docOne = addUID({name: 'yoshi', age: 40});
//let docTwo = addUID('shaun');

console.log(docOne.name);

// with interfaces
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const docThree: Resource<object> = {
  uid: 1, 
  resourceName: 'person', 
  data: { name: 'man' }
};

const docFour: Resource<string[]> = {
  uid: 1, 
  resourceName: 'shoppingList', 
  data: ['bread', 'milk']
};

console.log(docThree, docFour);