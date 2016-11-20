/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let ans = [];
    
    if(nums.length === 1) return [[nums[0]]];
    
    for(var i = 0; i< nums.length; i++){
        let new_nums = nums.slice(0);
        new_nums.splice(i,1);
        let r = permute(new_nums);
        
        r.map(function(item){
            item.push(nums[i]);
            ans.push(item);
        });
    }
    
    return ans;
};
