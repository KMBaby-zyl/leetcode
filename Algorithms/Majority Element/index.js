/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let limit = ~~(nums.length/2);
    let map = {};
    
    for(var i=0; i<nums.length; i++){
        let item = nums[i];
        if(!map[item]) {
            map[item] = 1;
            if(map[item] > limit) return item
        }else{
            
            map[item] = map[item] +1;
            if(map[item] > limit) return item
        }
    }
    
};
