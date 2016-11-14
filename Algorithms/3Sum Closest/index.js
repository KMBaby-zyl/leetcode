// 强行搜索
// 可以2分查找来优化
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort(function(a, b) {
        return a - b;
      });

  var len = nums.length;
  var ans = Infinity;
  var r;
  
  for(var i=0; i<len; i++){
      for(j = i+1; j<len; j++){
          let tar = target - nums[i] - nums[j];
          let tmp = serch(nums, tar, j);
          if(  Math.abs(tmp) < ans){
              ans = Math.abs(tmp);
              r = tmp;
          }
      }
  }
  
  return target - r;
};

function serch(nums, tar, j){
    let len = nums.length;
    
    var ans = Infinity;
    var r;
    
    for(var i = j+1; i< len; i++){
        if(Math.abs(tar - nums[i]) < ans){
            ans = Math.abs(tar - nums[i]);
            r = tar - nums[i];
        }
    }
    
    return r;
}




