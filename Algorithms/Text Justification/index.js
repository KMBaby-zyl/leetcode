/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let arr = [];
    
    let tmp = words[0];
    for(var i=1; i<words.length; i++){
        if( (tmp.length + words[i].length + 1) > maxWidth ){
            arr.push(tmp);
            tmp = words[i];
        }else{
            tmp += ' ' + words[i];
        }
    }
    
    arr.push(tmp);
    
    console.log(arr.length);
    arr.map(function(item, index, self){
        let slen = maxWidth - item.length;
        
        self[index] = item.split(' ');
        let len = self[index].length - 1;
        let a; 
        let b;
        
        
        if(len === 0){
            a = 0;
            b = slen;
        }else{
            a = parseInt(slen/(len));
            b = slen%len;
        }
        
        
        let space = ' ';
        
        
        
        // 只有一个单词
        if(len === 0){
            for(var i=0; i<b; i++){
                self[index][0] += ' ';
            }
        }else{
            for(var i = 1; i<=a; i++){
                space += ' ';
            }
            
            for(var i=0; i<b; i++){
                self[index][i] += ' ';
            }
        }
    
        self[index] =  self[index].join(space);
        
    });
    
    // 最后一个单词是句号
    let alen = arr.length;
    let ailen = arr[alen-1].length;
    if(arr[alen-1][ailen-1] === '.'){
        arr[alen-1] = arr[alen-1].replace(/(\s+)/g, ' ');
        let ilen = maxWidth - arr[alen-1].length;
        for(var i = 0; i< ilen; i++){
             arr[alen-1] += ' ';
        }
    }
    
    
    return arr;
};
