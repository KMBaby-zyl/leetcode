/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let ans = [];
    let map = {};
    
    for(var i = 0; i<numbers.length; i++){
        if(map[numbers[i]]) continue;
        if(numbers[i] <= target){
            let index = numbers.indexOf(target-numbers[i], i+1);
            if(index > 0 && index != i){
                ans.push(i+1);
                ans.push(index+1)
                return ans;
            }else{
                map[numbers[i]] = true;
            }
        }
    }
    
    return ans;
};
