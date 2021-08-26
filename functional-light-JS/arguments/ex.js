//unary function
function increment(x){
    return sum(x, 1)
}

//binary function
function sum(x, y) {
    return x + y
}

//////////////////////////////////////
// n-ary to unary adapter

function unary(fn) {
    return function one(arg){
        fn(arg)
    }
}

function binary(fn) {
    return (arg1, arg2) => fn(arg1, arg2)
}

function f(...args) {
    return args
} 

const u = unary(f);
const b = binary(f);

console.log(u(1,2,3,4,5));
console.log(b(1,2,3,4,5));

/////////////////////////////////////////
// flip arguments adapter

function flip(fn) {
    return (arg1, arg2, ...args) => fn(arg2, arg1, ...args);
}

const g = flip(f);
console.log(g(1,2,3,4));

////////////////////////////////////////
// reverse order adapter

function reverse(fn) {
    return (...args) => fn(...args.reverse())
}

const r = reverse(f);
console.log(r(1,2,3,4));

////////////////////////////////////////
// spread arguments

function spread(fn){
    return (arg) => fn(...arg);
}

function sumArgs(arg1, arg2, arg3, arg4) {
    return arg1 + arg2 + arg3 + arg4;
}

const s = spread(sumArgs);
console.log(s([1,2,3,4]));

//////////////////////////////////////////
function max(f) {
    return (arr) => f(arr);
}

function maxValue(arr){
    return Math.max(...arr)
}

const m = max(maxValue);
console.log(m([1,3,41,6,7,9]))

///////////////////////////////////////////
function not(f) {
    return (arg) => !f(arg);
}

function isEven(n) {
    return n % 2 === 0;
}

const odd = not(isEven);
console.log(odd(4))
console.log(odd(5))