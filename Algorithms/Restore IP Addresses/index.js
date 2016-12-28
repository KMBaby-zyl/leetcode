/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let ans = [];
    let n = s.length;
    
    
    getItem(0, []);
    
    
    function getItem(len, arr){
        if(arr.length === 4 ){
            if(len === n){
                ans.push(arr);
            }
            return
        }
        if(len >= n ) return;
        
        if(s.slice(len,len+1) === '0'){
            getItem(len+1, arr.concat(s.slice(len,len+1)));
        }else{
            getItem(len+1, arr.concat(s.slice(len,len+1)));
            getItem(len+2, arr.concat(s.slice(len,len+2)));
            if( ~~s.slice(len,len+3) <= 255){
                getItem(len+3, arr.concat(s.slice(len,len+3)));
            }
        }
    }
    
    
    ans = ans.map(function(item){
        return item.join('.')
    })
    
    return ans;
};
