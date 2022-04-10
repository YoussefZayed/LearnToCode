// Brute force solution

function diagonalDifference(arr) {
    // Write your code here
    let total = 0;
    let arrSize = arr.length;
    for (let index = 0; index < arrSize; index++ ) {
        // get top left to bottom right diagonal
        total += arr[index][index];
        // get top right to bottom left diagonal
        total -= arr[index][arrSize-index - 1];
    }
    return Math.abs(total);
}