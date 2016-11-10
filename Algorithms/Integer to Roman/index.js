/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let r = '';
    let t;
    
    
    t = ~~(num/1000);
    num = num - 1000*t;
    
    while(t > 0){
        r = r + 'M';
        t--
    }
    
    if(num >= 900){
        r = r + 'CM';
        num = num - 900;
    }
    
    
     t = ~~(num/500);
    num = num - 500*t;
    while(t > 0){
        r = r + 'D';
        t--
    }
    
    if(num >= 400){
        r = r + 'CD';
        num = num - 400;
    }
    
    t = ~~(num/100);
    num = num - 100*t;
    while(t > 0){
        r = r + 'C';
        t--
    }
    
    if(num >= 90){
        r = r + 'XC';
        num = num - 90;
    }
    
    t = ~~(num/50);
    num = num - 50*t;
    while(t > 0){
        r = r + 'L';
        t--
    }
    
    if(num >= 40){
        r = r + 'XL';
        num = num - 40;
    }
    
    t = ~~(num/10);
    num = num - 10*t;
    while(t > 0){
        r = r + 'X';
        t--
    }
    
    if(num === 9){
        return r + 'IX';
    }
    
    if(num >= 5){
        r =r + 'V';
        num = num - 5;
    }
    r = r + tenRoman(num);
    
    return r;
};


function tenRoman(num){
    if(num === 0) return '';
    if(num === 1){
        return 'I'
    }
    if(num === 2){
        return 'II'
    }
    if(num === 3){
        return 'III'
    }
    if(num === 4){
        return 'IV'
    }
}
