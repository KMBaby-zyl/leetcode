/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let an = a.length - 1;
    let bn = b.length - 1;
    
    let len = Math.max(an, bn);
    let t = 0;
    let ans = [];
    for(var i = 0; i<= len;i++){
        if(i<=an && i<=bn){
            var tmp = parseInt(a[an-i]) + parseInt(b[bn-i]) + t;
        }else if(i <= an){
            var tmp = parseInt(a[an-i]) + t;
        }else{
            var tmp = parseInt(b[bn-i]) + t;
        }
        
        if(tmp === 2){
            t = 1;
            ans.unshift(0)
        }else if(tmp === 3){
            t = 1;
            ans.unshift(1)
        }else if(tmp === 1){
            t = 0;
            ans.unshift(1)
        }else{
            t = 0;
            ans.unshift(0)
        }
    }
    
    if(t === 1){
        ans.unshift(1)
    }
    
    return ans.join('');
};
