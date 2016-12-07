/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let ans = 0;
    
    if(nums.length === 1) return 0;
    
    let len = nums.length;
    var i = 0;
    while( (nums[i] + i) < (len -1)){
        let max = 0;
        let index = 0;
        for(var j=i+1; j<= (nums[i] + i); j++){
            if( (nums[j] + j) > max){
                max = nums[j] + j;
                index = j;
            }
        }
        
        i = index;
        ans ++;
    }
    
    ans ++;
    
    
    return ans;

};
