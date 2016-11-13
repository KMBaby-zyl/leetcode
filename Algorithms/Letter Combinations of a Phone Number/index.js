/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  let map = {};
  map['2'] = ['a','b','c'];
  map['3'] = ['d','e','f'];
  map['4'] = ['g','h','i'];
  map['5'] = ['j','k','l'];
  map['6'] = ['m','n','o'];
  map['7'] = ['p','q','r','s'];
  map['8'] = ['t','u','v'];
  map['9'] = ['w','x','y', 'z'];
  
  let r = [];
  let preR = [];
  
  for(var i = 0, len=digits.length; i < len; i++){
      let key = digits[i];
      preR = r;
      r = [];
      
      map[key].map(function(mi){
          if(preR.length === 0){
              r.push(mi);
          }else{
              preR.map(function(ni){
                  r.push(ni + mi);
              })
          }
          
      });
  }
  
  return r;
  
};
