let v;
console.log(typeof v);
console.log(typeof v === "undefined");

v = 5;
console.log(typeof v)

v = "5";
console.log(typeof v)

v = false;
console.log(typeof v)

v = {};
console.log(typeof v)

v = [];
console.log(typeof v)

v = [];
console.log(Array.isArray(v))

v = Symbol();
console.log(typeof v)

v = () => {};
console.log(typeof v)

v = null;
console.log(typeof v)

console.log(typeof doesNotExists)

v = BigInt;
console.log(typeof v)