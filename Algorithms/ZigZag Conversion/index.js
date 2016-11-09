/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let ns = [];
    if(numRows === 1){
        return s;
    }
    
    for(var i = 0; i< numRows; i++){
        let j = 0;
        while(s[(numRows + (numRows-2)) * j + i]){
            let k = (numRows + (numRows-2)) * j + i;
            ns.push(s[k]);
            if(0<i && i<(numRows-1)){
                let temp = s[k + 2*(numRows-2-i+1)];
                if(temp && (numRows > 2)){
                    ns.push(temp);
                }
            }
            j++
        }
    }
    
    return ns.join('');
};
