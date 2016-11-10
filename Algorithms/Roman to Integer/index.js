/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var hash = {};
  hash["I"] = 1;
  hash["X"] = 10;
  hash["C"] = 100;
  hash["M"] = 1000;
  hash["V"] = 5;
  hash["L"] = 50;
  hash["D"] = 500;
  
  let r = 0;
  
  for(var i = 0; i<s.length; i++){
      let item = hash[s[i]];
      let next = 0;
      r = r + item;
      
      if((i + 1) < s.length){
          next = hash[s[i + 1]];
      }
         
      
      if(next > item){
          r = r - item * 2;
      }
  }
  
  return r;
};
