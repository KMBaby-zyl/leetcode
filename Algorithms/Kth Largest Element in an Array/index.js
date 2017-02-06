/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let arr = nums.sort(function(a,b) {return a-b});
    return arr[arr.length-k];
};
