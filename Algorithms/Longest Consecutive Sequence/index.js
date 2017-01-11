/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if(nums.length === 0) return 0;
  
  let hash = [];
  nums.forEach(function(item) {
    hash[item] = true;
  });

  var ans = -1;
  nums.forEach(function(item, idx) {
    // this item is the largest in the sequence
    if (!hash[item + 1]) {
      var tmp = 0, index = item;
      while (hash[index]) {
        tmp++;
        index--;
      }
      ans = Math.max(ans, tmp);
    }
  });

  return ans;
    
};
