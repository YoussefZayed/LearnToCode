// Brute force solution
var validMountainArray = function(arr) {
    if (arr.length < 3 || arr[0] > arr[1]) {
        return false;
    }
    let isIncreasing = true;
    let isvalid = true;
    let lastEl = arr[0]-1;
    
    arr.forEach((el) => {
        if (el > lastEl && isIncreasing) {
            lastEl = el;
        } else if (el < lastEl && isIncreasing) {
            lastEl = el;
            isIncreasing = false;
        } else if (el < lastEl && !isIncreasing) {
            lastEl = el;
        } else {
            isvalid = false;
            return;
        }
    });
    return isvalid && !isIncreasing;
    
};