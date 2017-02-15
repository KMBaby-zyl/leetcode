/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.map = {};
    this.nums = nums;
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    let nums = this.nums;
    
    let ans = 0;
    for(var k = i; k<=j; k++){
        ans = ans + nums[k];
    }
    return ans;
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */
