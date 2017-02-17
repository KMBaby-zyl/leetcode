/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    let ans = [0];
    if(nums.length === 0) return [];
    
    let arr = [nums[nums.length -1]];
    
    for(var i = nums.length-2; i>=0; i--){
        let v = bSearch(nums[i], arr);
        ans.unshift(v);
        
        arr.splice(v, 0, nums[i]);
        
    }
    
   // binary search
  function bSearch(target, a) {
    var start = 0
      , end = a.length - 1;

    while(start <= end) {
      var mid = ~~((start + end) >> 1);
      if (a[mid] >= target)
        end = mid - 1;
      else if (a[mid] < target)
        start = mid + 1;
    }

    return start;
  }
    
    return ans;
    
};
