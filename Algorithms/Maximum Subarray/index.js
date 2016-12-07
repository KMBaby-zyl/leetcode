/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let len = nums.length;
    let i = 0;
    let t = getNum();
    let max = t;
    let left = 0;
    let right = 0;
    
    i++;
    
    for(; i<len; i++ ){
        if( (t + nums[i]) < 0 ){
            i++;
            
            while(i < len && nums[i] < 0){
                i ++;
            }
            
            t = nums[i];
            
            if(t > max) max = t;
             
            continue;
        }
        
        if( (t + nums[i]) > max){
            right = i;
            max = t + nums[i];
        }
        
        t = t + nums[i];
    }
    
   
    
    function getNum(){
        let max = nums[i];
        
        while( i < len && nums[i] < 0){
            if(nums[i] > max) max = nums[i];
            i++;
        }
        
        if(i === len){
            return max;
        }
        
        return nums[i];
    }
    
    
    return max;
};
