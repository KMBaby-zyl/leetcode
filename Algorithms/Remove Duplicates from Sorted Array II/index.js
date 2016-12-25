/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let key = '';
    let ans = nums.length;
    let map = {};
    
    for(var i =0; i< nums.length; i++){
        if(map[nums[i]] === undefined){
            map[nums[i]] = 1;   
        }else if(map[nums[i]] === 1){
            map[nums[i]] = 2;
        }else{
            nums.splice(i,1);
            i--;
            ans--;
        }
    }
    
    return ans;
};
