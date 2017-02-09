/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if(nums.length === 0) return [];
    let len = nums.length;
    let ans = [];
    
    let arr = nums.slice(0,k);
    let max = -Infinity;
    max = getMax(arr);
    ans.push(max);
    
    for(var i = k; i<len; i++){
        let val = arr.shift();
        arr.push(nums[i]);
        if(val === max){
            max = getMax(arr);
        }else if(nums[i] > max){
            max = nums[i];
        }
        ans.push(max);
    }
    
    function getMax(arr){
        let max = -Infinity;
        for(var i = 0; i<arr.length; i++){
            max = Math.max(arr[i], max);
        }
        return max;
    }
    
    return ans;
};


