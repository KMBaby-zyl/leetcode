/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    
    let max = nums[0];
    
    let arr1 =[nums[0]], arr2 = [nums[0]];
    
    for(var i = 1; i<nums.length; i++){
        arr1.push(Math.max(arr1[i-1]*nums[i], arr2[i-1]*nums[i], nums[i]));
        arr2.push(Math.min(arr1[i-1]*nums[i], arr2[i-1]*nums[i], nums[i]));
    }
    
    for(var i = 0; i<arr1.length; i++){
        max = Math.max(max, arr1[i]);
    }
    
    return max;
    
};
