// Instructions:
// Write a function that accepts a number and a string, the goal is to repeat the string for the quantity of the number

// e.g. 
// stringRepeat(3, 'hello') --> 'hellohellohello'
// stringRepeat(4, 'Candle') --> 'CandleCandleCandleCandle'

function stringRepeat(number, string) {
    // Write your code here
    let result = "";
    for (let i = 0; i < number; i++) {
        result += string;
        console.log(result);
    }
    return result;
}

// DO NOT TOUCH TESTS BELOW
console.log(
    stringRepeat(3, 'hello') === 'hellohellohello' ?
        '✅ 01 - Test Passed' : '❌ 01 - Test Failed'
);

console.log(
    stringRepeat(4, 'Candle') === 'CandleCandleCandleCandle' ?
        '✅ 01 - Test Passed' : '❌ 01 - Test Failed'
);