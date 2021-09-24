let zero = -0;
console.log(zero)

function formatTrends(trendRate){
    const direction = trendRate < 0 || Object.is(trendRate, -0) ? "down" : "up"
    
    return `${direction} ${Math.abs(trendRate)}`
}

console.log(formatTrends(3)) // -0
console.log(formatTrends(-3)) //up 3
console.log(formatTrends(-0)) //down 3
console.log(formatTrends(0)) //up 0
console.log(Object.is(-0, -0)) //true
console.log(1 / 0) // Infinity
console.log(1 / -0) // -Infinity
console.log(Object.is(Infinity, -Infinity)) // false
console.log(Object.is(Infinity, Infinity)) // true
console.log(0 === -0)
console.log(Number(1) === NaN)
console.log(Object.is(NaN,NaN)) //false
