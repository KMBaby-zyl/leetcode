/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
    for(var i = 1; i<(num.length-1); i++){
        let s1 = num.slice(0,i);
        if(s1.length > 1 && s1[0] == '0') continue;
        s1 = ~~s1;
        for(var j = i+1; j<num.length; j++){
            
            let s2 = num.slice(i,j);
            if(s2.length > 1 && s2[0] == '0') continue;
            s2 = ~~s2;
            let nn = num.slice(j);
            if(check(nn, s1, s2)){
                return true;
            }
        }
    }
    
    return false;
};


function check(num, s1, s2){
    let a = String(s1 + s2);
    let b = num.slice(0, a.length);
    num = num.slice(a.length);
    if(a === b){
        if(num.length === 0) return true;
        return check(num, s2, ~~a);
    }else{
        return false;
    }
}
