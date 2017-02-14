/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let len = secret.length;
    let map = {};
    let a = 0;
    let b = 0;
    for(var i = 0; i<len; i++){
        if(secret[i] === guess[i]){
            a++;
        }else if(map[secret[i]] === undefined){
            map[secret[i]] = 1;
        }else{
            map[secret[i]]++;
        }
    }
    for(var i = 0; i<len; i++){
        if(secret[i] === guess[i]){
            continue;
        }else if(map[guess[i]]){
            b++;
            map[guess[i]]--;
        }
    }
    
    
    return a + 'A' + b + 'B';
};
