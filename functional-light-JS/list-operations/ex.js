"use strict";

// Put your code here! :)
function constant(v) {
    return () => v;
}

const five = constant(5);
const seven = constant(7);

//////////////////////////////////////////////

function add(num1, num2){
    return num1 + num2
}
console.log(add(five(), seven()))

//////////////////////////////////////////////

function add2(fn1, fn2){
    
    return add(fn1(), fn2())
}

console.log(add2(five, seven))

///////////////////////////////////////////////

function addn(fns) {
    
    while(fns.length > 2){
        const [fn1, fn2, ...rest] = fns;
        
        fns = [
            () => add2(fn1, fn2),
            ...rest
        ]
    }

    return add2(fns[0], fns[1])
}

function addnRecursion([fn1, fn2, ...rest]) {
    if(!rest.length) return add2(fn1, fn2);

    return addnRecursion([() => add2(fn1, fn2), ...rest])
}

function addnReduce(fns) {
    return fns.reduce((bigFn, fn) => {
        return () => add2(bigFn, fn);
    })()
}

console.log(addn([seven, five, constant(6), constant(4), constant(8)]))
console.log(addnRecursion([seven, five, constant(6), constant(4), constant(8)]))
console.log(addnReduce([seven, five, constant(6), constant(4), constant(8)]))

///////////////////////////////////////////////////////////////////////////////

const numbers = [ 2,3,5,6,2,5,2,36,18,46,10,12,17,36,6,5,18 ];
const newNumbers = numbers.reduce((acc, cur) => {
    if(!acc.includes(cur)) {
        return [...acc, cur]
    }

    return acc
},[])
.filter( v => v % 2 === 0)
.map(v => () => v)

console.log(newNumbers);

console.log(addn(newNumbers))

