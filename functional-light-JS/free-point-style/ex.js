"use strict";

// function output(txt) {
// 	console.log(txt);
// }

const output = console.log;

// function printIf(shouldPrintIt) {
// 	return function(msg) {
// 		if (shouldPrintIt(msg)) {
// 			output(msg);
// 		}
// 	};
// }

function when(fn){
	return (predicat) => {
		return (...args) => {
			if(predicat(...args)){
				return fn(...args)
			}
		}
	}
}

function isShortEnough(str) {
	return str.length <= 5;
}

// function isLongEnough(str) {
// 	return !isShortEnough(str);
// }

function not(f) {
	return (str) => !f(str)
} 

var msg1 = "Hello";
var msg2 = msg1 + " World";

//const isShort = printIf(isShortEnough);
//isShort()
const isLongEnough = not(isShortEnough);
console.log(isLongEnough(msg1));
console.log(isLongEnough(msg2));

// printIf(isShortEnough)(msg1);		// Hello
// printIf(isShortEnough)(msg2);
// printIf(isLongEnough)(msg1);
// printIf(isLongEnough)(msg2);		// Hello World

const printIf = when(output)(isShortEnough);
const printIfLong = when(output)(isLongEnough);
printIf(msg2);
printIf(msg1);
printIfLong(msg1);
printIfLong(msg2);


