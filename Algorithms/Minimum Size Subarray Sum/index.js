/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    let all = 0;
    let length = 0;
    let ans = 10000;
    for(var i = 0; i<nums.length; i++){
        all = all + nums[i];
        
        if(all >= s){
            while((all - nums[i-length] >= s)){
                all = all - nums[i-length];
                length--;
            }
            
            ans = Math.min(ans, length + 1);
        }
        
        length++;
    }
    
    if(ans === 10000) return 0;
    return ans;
};
