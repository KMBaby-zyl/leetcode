/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let samearr = [];
    let ans = [];
    
    if(nums.length === 1) return [[nums[0]]];
    
    for(var i = 0; i<nums.length; i++){
        if(samearr.indexOf(nums[i]) !== -1) continue;
        
        samearr.push(nums[i]);
        let new_nums = nums.slice(0);
        new_nums.splice(i, 1);
        
        let r = permuteUnique(new_nums);
        
        r.map(function(item){
            item.push(nums[i])
            ans.push(item);
        })
        
    }
    
    return ans;
};
