function mod(y) {
    return (x) => x % y;
}

function eq(y) {
    return x => x === y;
}

const mod2 = mod(2);
const eq1 = eq(1);

const isOdd = eq1(mod2(5))
console.log(isOdd)