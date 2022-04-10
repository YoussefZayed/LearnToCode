// Brute force solution

function getHourglassNum(arr,row,col) {
    let total = 0;
    // get middle value of hourglass
    total += arr[row+1][col+1]
    for (let width = 0; width < 3 ; width++) {
        // get top and bottom values of hourglass
        total += arr[row][col+width];
        total += arr[row+2][col+width];
    }
    return total;
}

function hourglassSum(arr) {
    let result = (-Number.MAX_VALUE);
    for (let row = 0; row < arr.length -2 ; row++) {
        for (let col = 0; col < arr.length -2 ; col++) {
            let tmp = getHourglassNum(arr, row, col);
            if (tmp > result) {
                result = tmp;
            }
        }
    }
    return result;
}