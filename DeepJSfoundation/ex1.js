let x = "5";
console.log(x + 1);

let y = 5;
console.log(++x);

function plusPlus(orignalX) {
    let convertedX = Number(orignalX);
    convertedX = convertedX + 1;
    return convertedX;
}

let z = "10";
console.log(plusPlus(z))
console.log(z)