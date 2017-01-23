/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let len = nums.length;
    k = k % len;
    
    let n = nums.slice(0, len-k);
    nums.splice(0,len-k)
    nums.splice(k,0,...n)
};
