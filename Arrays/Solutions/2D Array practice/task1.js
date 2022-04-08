// Brute force solution
var construct2DArray = function(original, m, n) {
    let count = 0;
    let ans = [];
    for (let i = 0; i < m; i++) {
        ans.push([]);
        for (let j = 0; j < n; j++) {
            if (count >= original.length) {
                return [];
            }
            ans[i].push(original[count]);
            count++;
        }
    }
    if (count < original.length) 
    {
        return [];
    }
    return ans;
};