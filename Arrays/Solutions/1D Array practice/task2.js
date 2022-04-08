// Brute force solution
/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let count = 0;
    while (count < nums.length -1) {
        while (count < nums.length -1 && nums[count] === nums[count + 1]) {
            nums.splice(count+1,1);
        }
        count++;
    }
};