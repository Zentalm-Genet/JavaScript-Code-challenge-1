function best(prices) {
    // Check if the array of prices has at least two elements
    if (prices.length < 2) {
        return 0; // If not, no profit can be made, so return 0
    }

    // Initialize variables to track the minimum price and maximum profit

    let minPrice = prices[0];
    let maxProfit = 0;

    // Iterate through the prices starting from the second element
    for (let i = 1; i < prices.length; i++) {
        // Calculate the potential profit if selling at the current price
        let potentialProfit = prices[i] - minPrice;
        
        // Update the maximum profit if the potential profit is greater
        maxProfit = Math.max(maxProfit, potentialProfit);
        
        // Update the minimum price if the current price is lower
        minPrice = Math.min(minPrice, prices[i]);
    }

    // Return the maximum profit
    return maxProfit;
}

// Test cases

console.log(best([15, 10, 20, 22, 1, 9]));  // Output: 12
console.log(best([1, 2, 3, 4, 5]));          // Output: 4
console.log(best([2, 3, 10, 6, 4, 8, 1]));    // Output: 8
console.log(best([7, 9, 5, 6, 3, 2]));        // Output: 2
console.log(best([0, 100]));                  // Output: 100
console.log(best([5, 4 , 3, 2, 1]));          // Output: 0
console.log(best([100]));                     // Output: 0
console.log(best([100, 0]));                  // Output: 0
