/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let map = {};
    let ans = [];
    for(var i = 0; i< nums.length; i++){
        if(map[nums[i]] === undefined) map[nums[i]] = 1;
        else
            map[nums[i]]++;
    }
    
    for(var key in map){
        if(map[key] === 1) ans.push(~~key);
    }
    
    return ans;
};
