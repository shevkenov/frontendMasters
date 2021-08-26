function closure() {
    let counter = 0;

    return () => ++counter
}

const c = closure();

console.log(c())
console.log(c())
console.log(c())
console.log(c())
console.log(c())

//////////////////////////////////////
// leazy closer

function repeat(count){
    return () => "".padStart(count, "A")
}

const a = repeat(10);
console.log(a())
console.log(a())

/////////////////////////////////////
// eager closer

function repeatEager(count){
    const str = "".padStart(count, "A")
    return () => str
}

const A = repeat(10);
console.log(A())
console.log(A())
