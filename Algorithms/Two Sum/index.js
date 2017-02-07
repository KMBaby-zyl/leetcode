/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var r = [];
    for(var i = 0, len = nums.length; i < len; i++){
        var tmp = target -  nums[i];
        if(r[tmp] !== undefined) return [r[tmp], i]
        
        r[nums[i]] = i;
    }
};
