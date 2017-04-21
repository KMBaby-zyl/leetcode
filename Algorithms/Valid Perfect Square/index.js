/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    var i = 1;
    while(true){
        let t = i * i;
        if(t === num){
            return true;
        }else if(t > num){
            return false;
        }
        
        i++;
    }
};
