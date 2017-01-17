/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let len = nums.length;
    if(len === 1) return nums[0];
    
    if(nums[0] > nums[len-1]){
        let mid = ~~(len/2);
        return Math.min( findMin(nums.slice(0,mid)), findMin(nums.slice(mid)) );
    }else{
        return nums[0];
    }
};
