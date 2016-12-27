/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    let list = [];
    
    if(n === 0) return [0];
    
    
    
    function gray(n){
        if(n === 1){
            return ['0', '1'];
        }else{
            let list = [];
            let gl = gray(n-1);
            list = gl.map(function(item){ return ('0' + item)}).concat(gl.reverse().map(function(item){ return ('1' + item)}))
            
            return list;
        }
    }
    let grayList = gray(n);
    console.log(grayList)
    
    return grayList.map(function(item){
        return parseInt(item, 2);
    });
};
