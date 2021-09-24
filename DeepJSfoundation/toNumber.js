console.log(Number(-0)) // -0
console.log(Number("")) // 0
console.log(Number("0.")) // 0
console.log(Number(null)) // 0
console.log(Number(undefined)) // NaN
console.log(Number(false)) // 0
console.log(Number(true)) // 1
console.log(Number(null)) // 0


console.log(([]).toString()) // ""
console.log((["0"]).toString()) // 0
console.log(([""]).toString()) // ""
console.log(Number([""])) // 0
console.log(Number(["0"])) // 0
console.log(Number([[[]]])) // 0