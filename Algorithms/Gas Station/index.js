/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let arr = [];
    for(var i = 0; i<gas.length; i++){
        arr[i] = gas[i]-cost[i];
    }
    
    let start = 0;
    let allg = 0;
    let fg = 0;
    for(var i = 0; i<gas.length; i++){
        allg = allg + arr[i];
        if(allg < 0){
            fg = fg + allg;
            start = i+1;
            allg = 0;
        }
    }
    
    if(start === gas.length) return -1;
    if((allg + fg) < 0) return -1;
    
    return start;
};
