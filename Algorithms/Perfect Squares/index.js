/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    var arr = [];
    function findi(nn){
        if(nn === 0){
            return 0;
        }
        if(!arr[nn]){
            var min = 10000;
            for(var i = 1; i*i <= nn; i++){
                var tmp = 1 + findi(nn-i*i);
                if(min > tmp){
                    min = tmp;
                }
            }
            return arr[nn] = min;
        }else{
            return arr[nn];
        }
    }


    findi(n);
    return arr[n];
};
