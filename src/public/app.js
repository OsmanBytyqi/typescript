import { Invoice } from "./classes/Invoice.js";
import { Payments } from "./classes/payment.js";
import { ListTemplate } from './classes/templates.js';
const me = {
    name: 'Osman',
    //age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent ', amount);
        return amount;
    },
};
console.log(me);
me.speak('hello, world');
const greetPerson = (person) => {
    console.log('hello ', person.name);
};
greetPerson(me);
//greetPerson({name: 'shaun'});
const form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payments(...values);
    }
    list.render(doc, type.value, 'end');
});
//<T>(type)
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 40 });
console.log(docOne.name);
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["AUTHOR"] = 0] = "AUTHOR";
    ResourceType[ResourceType["BOOK"] = 1] = "BOOK";
    ResourceType[ResourceType["TITLE"] = 2] = "TITLE";
})(ResourceType || (ResourceType = {}));
const docThree = {
    uid: 1,
    resourceName: ResourceType.AUTHOR,
    data: { name: 'man' }
};
const docFour = {
    uid: 1,
    resourceName: ResourceType.TITLE,
    data: ['bread', 'milk']
};
console.log(docThree, docFour);
// TUPLES
let arr = ['nice', 25, true];
arr[0] = false;
arr[1] = 'osi';
arr = [30, false, 'doni'];
let tup = ['ok', 25, true];
// tup[0] = false;
tup[0] = 'ken';
let student;
//student = [23564, 'chun-li'];
student = ['mani', 23564];
