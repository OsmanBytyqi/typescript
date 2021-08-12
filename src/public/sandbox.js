"use strict";
// not return number or something else, just print in console 
var hello;
hello = function (name, greeting) {
    console.log(name + " says " + greeting);
};
var calc;
// return number like int function in cpp
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
var logDetails;
logDetails = function (mani) {
    console.log(mani.name + " is " + mani.age + " years old");
};
