// Instructions:
// Using the array of numbers sum only the positive numbers
// e.g [-1, 2, -3, 4, -5]
// returns 6


function sumOfPositives(numbers) {
    // Write your code here
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            sum += numbers[i];
        }
    }
    console.log(sum);
    return sum;
}


// DO NOT TOUCH TESTS BELOW
console.log(sumOfPositives([-1, 2, -3, 4, -5]) === 6 ? '✅ 01 - Test Passed' : '❌ 01 - Test Failed');
console.log(sumOfPositives([-2, 3, -4, -5, -10, 13]) === 16 ? '✅ 01 - Test Passed' : '❌ 01 - Test Failed');