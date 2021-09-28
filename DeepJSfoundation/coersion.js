const years = 16;

function message(v){
    return `I am ${v} years old!` // implicit coersion!
}

function message1(v){
    return `I am ${[v].join("")} years old!` // explicit coersion!
}

function message2(v){
    return `I am ${String(v)} years old!` // explicit coersion!
}

console.log(message(years))
console.log(message1(years))
console.log(message2(years))

/////////////////////////////////////////////////////////////////////

let stringYear = "26";

function yearsOld(v){
    return +v + 1;
}

function yearsOld1(v){
    return Number(v) + 1;
}

function yearsOld2(v){
    return v - 1;
}

console.log(yearsOld(stringYear))
console.log(yearsOld1(stringYear))
console.log(yearsOld2(stringYear))