/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let arr = [];
    let length = ratings.length;
    
    for(var i = 0; i<length; i++){
        arr.push(1);
    }
    for(var i = 0; i<(ratings.length-1); i++){
        if(ratings[i] < ratings[i+1]){
            arr[i+1] = arr[i] + 1;
        }
    }
    
    for(var i = ratings.length-2; i>=0; i--){
        if(ratings[i] > ratings[i+1] && arr[i] <= arr[i+1]){
            arr[i] = arr[i+1] + 1;
        }
    }
    
    let ans = 0;
    arr.map(function(item){
        ans = ans + item;
    })
    return ans;
    
};
