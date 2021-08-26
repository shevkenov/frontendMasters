function add(v) { return v + 1};
function mult2(v) { return v * 2};
function subs3(v) { return v / 3};

function composeTwo(fn1, fn2){
    return (v) => fn2(fn1(v))
}

const f = [add, mult2, subs3].reduce(composeTwo);
const g = [subs3, mult2, add].reduceRight(composeTwo);

console.log(f(8));
console.log(g(8));

function compose(...fns){
    return (v) => fns.reduce((val, fn) => fn(val), v);
}

const c = compose(add, mult2, subs3)
console.log(c(8))