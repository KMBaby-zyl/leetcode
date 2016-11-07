/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let T = getNewString(s);
    let maxlen = 1;
    let center = 1;
    let i = 1;
    
    
    while(i < T.length){
        let j = maxlen;
        for(;j >= 1; j--){
            //console.log(i + '-' + j);
            if(T[i-j] && T[i+j] && (T[i-j] === T[i+j])){
                if(j === 1){
                    let k = maxlen +1;
                    //console.log('i:' + i + ' k:' + k);
                    //console.log(T);
                    while(T[i-k] && T[i+k] && (T[i-k] === T[i+k])){
                        maxlen = k;
                        center = i;
                        k++;
                        //console.log('maxlen' + maxlen);
                    }
                }
            }else{
                j = 0;
                
            }
        }
        
        i++
    }
    
    center = center/2;
    maxlen = maxlen/2;
    
    return s.slice(center-maxlen,center + maxlen);
};

function getNewString(s){
    let t = '#';
    
    for(var i = 0; i< s.length; i++){
        t = t + s[i] + '#';
    }
    
    return t;
}
