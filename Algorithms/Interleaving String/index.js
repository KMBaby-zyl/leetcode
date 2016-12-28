/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    if((s1.length + s2.length) != s3.length) return false;
    let m = s1.length;
    let n = s2.length;
    let k = s3.length;
    
    if( m === 0){
        return s2 === s3
    }
     if( n === 0){
        return s1 === s3
    }
    // 递归
    // function check(m1, n1, k1){
    //     if(k1 === k){
    //         return true;
    //     } 
    //     let ans = false;
    //     if(s3[k1] === s1[m1]){
    //         ans = check(m1+1, n1, k1+1);
    //     }
    //     if(ans){
    //         return true;
    //     }
        
    //     if(s3[k1] === s2[n1]){
    //         ans = chyeck(m1, n1+1, k1+1);
    //     }
        
        
    //     return ans;
    // }
    
    //  动态规划
    let m2 = [];
    m2[0] = [true];
    
    
    for(var i = 1; i<=m; i++){
         m2[i] = [false];
    }
    for(var i = 1; i<=m; i++){
        if(s1[i-1] === s3[i-1]){
            m2[i][0] = true;
        }else{
            break
        }
    }
    for(var j = 1; j<=n; j++){
        if(s2[j-1] === s3[j-1]){
            m2[0][j] = true;
        }else{
            break
        }
    }
    
    console.log(m2);
    for(var i1 = 1; i1 <= m; i1++){
        for(var j1 = 1; j1<=n; j1++){
            m2[i1][j1] = false;
            if(s1[i1-1] === s3[i1+j1-1]){
                m2[i1][j1] = m2[i1-1][j1]
            }
            if(s2[j1-1] === s3[i1+j1-1]){
                m2[i1][j1] |= m2[i1][j1-1]
            }
        }
    }
    
    return m2[m][n] == true
};
