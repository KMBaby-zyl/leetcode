/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = new Set();
    for(var i = 0; i<nums.length; i++){
        let item = nums[i];
        if(set.has(item)){
            return true;
        }else{
            set.add(item);
        }
    }
    
    return false;
};
