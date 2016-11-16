/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let start = nums.indexOf(target);
    if(start === -1) return [-1,-1];
    
    nums.reverse();
    
    let end = nums.indexOf(target);
    
    end = nums.length - 1 - end;
    
    return [start, end]
};
