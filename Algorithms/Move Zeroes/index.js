/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let len = nums.length;
    for(var i = 0; i<len; i++){
        if(nums[i] === 0){
            nums.splice(i,1);
            nums.push(0);
            i--;
            len--;
        }
    }
};
