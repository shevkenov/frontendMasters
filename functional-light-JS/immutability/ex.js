"use strict";

function lotteryNum() {
	return (Math.round(Math.random() * 100) % 58) + 1;
}

function pickNumber(numbers, num) {
	if(!numbers.includes(num)){
		numbers = [...numbers, num];
		numbers.sort((x,y) => x - y)
	}

	return numbers;
}

var luckyLotteryNumbers = [];
var o = Object.freeze(luckyLotteryNumbers)

while (luckyLotteryNumbers.length < 6) {
	//luckyLotteryNumbers = pickNumber(Object.freeze(luckyLotteryNumbers), lotteryNum());
	luckyLotteryNumbers.push(lotteryNum())
}

console.log(luckyLotteryNumbers);
