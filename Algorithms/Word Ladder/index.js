/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {Set} wordList
 *   Note: wordList is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {number}
 */
 
var ladderLength = function(beginWord, endWord, wordList) {
    let char = 'abcdefghijklmnopqrstuvwxyz';
    let hasSet = new Set();
    hasSet.add(beginWord);
    let bfs = function(arr, index){
        if(index > wordList.size) return 0;
        let _arr = [];
        for(var k = 0; k<arr.length; k++){
            let item = arr[k];
            
            for(var i = 0; i<item.length; i++){
                let t = item
                for(var j = 0; j<char.length; j++){
                    if(char[j] === item[i]) continue;
                    t = t.substr(0, i) + char[j] + t.substring(i+1, i.length);

                    if(t === endWord){
                        return index + 1;
                    }
                    
                    if(hasSet.has(t)){
                        continue;
                    }
                    if(wordList.has(t)){
                        _arr.push(t);
                        hasSet.add(t);
                    }
                }
            }
        }
        
        return bfs(_arr, index + 1);
    }
    
    return bfs([beginWord], 1)
};
