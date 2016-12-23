/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(s.length < t.length) return '';
    
    let map = {};
    for(var i = 0; i < t.length; i++){
        map[t[i]] = map[t[i]] ? (map[t[i]] + 1) : 1; 
    }
    
    var n = 0;
    var e = 0;
    let tlen = t.length;
    for(var i = 0; i < s.length; i++){
        if(map[s[i]]){
            
            n = i;
            e = i + 1;
            map[s[i]]--;
            tlen --;
            i = 10000000;
        }
    }
    
    let min = 10000000;
    let minN = n;
    let minE = e;
    // 只有一个
    if(tlen === 0){
        return s[n];
    }
    
    console.log(map);
    
    for(var i = e; i < s.length; i++){
        
        if(map[s[i]] >= 1){
            
            map[s[i]]--;
            tlen--;
            
            
            if(tlen === 0){
                console.log(i);
                
                while(map[s[n]] !== 0){
                    if(map[s[n]] < 0){
                        map[s[n]]++;
                        n++
                    }else if(map[s[n]] === undefined){
                        n++
                    }
                }
                
                // 命中一个长度
                if(min > (i-n)){
                    min = i-n;
                    minN = n;
                    minE = i+1;
                }
                
                // 增大n到不满足
                while(map[s[n]] !== 0){
                    n++;
                    if(map[s[n]] !== undefined){
                        map[s[n]]++;
                    }
                }
                
                
                map[s[n]]++;
                n++;
                tlen++;
            }
            
        }else if(map[s[i]] !== undefined){
            map[s[i]]--;
        }
    }
    
    // suit not
    if( (minE - minN) === 1){
        return '';
    }
    
    return s.slice(minN, minE)
    
    
};
