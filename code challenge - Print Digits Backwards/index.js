function printDigits(num) {

    while (num > 0) {
        let digit = num % 10; // Get the last digit
        console.log(digit); // Print the last digit
       num = Math.floor(num / 10); // Remove the last digit
    }
}

// Test cases
printDigits(1)
// 1
printDigits(314)
// 4
// 1
// 3

printDigits(12)
// 2
// 1
