/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    let len = nums.length;
    
    for(var i = 0; i<len; i++){
        for(var j = i+1; j<=Math.min(i + k, len - 1); j++){
            if( Math.abs(nums[j]-nums[i]) <= t) return true;
        }
    }
    
    return false;
};
