/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let a = 0;
    let b = 0;
    let c = 0;
    
    for(var i = 0; i< nums.length; i++){
        if(nums[i] === 0) a++;
        if(nums[i] === 1) b++;
        if(nums[i] === 2) c++;
    }
    
    for(var i = 0; i< nums.length; i++){
        if(i < a) {
            nums[i] = 0;
        }else if(i < (a + b)){
            nums[i] = 1;
        }else{
            nums[i] = 2;
        }
    }
};
