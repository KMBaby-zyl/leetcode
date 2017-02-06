/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    let wordDictionary = new WordDictionary();
    words.forEach(function(item){
        wordDictionary.addWord(item);
    });
    
    let m = board.length;
    let n = board[0].length;
    let ans = [];
    
    for(var i = 0; i<m; i++){
        for(var j = 0; j<n; j++){
            search(i, j, '');
        }
    }
    
    function search(x, y, s){
        if(x < 0 || y < 0 || x === m || y === n) return;
        if(board[x][y] === '#') return;
        
        s = s + board[x][y];
        let t = board[x][y];
        board[x][y] = '#';
        
        if(wordDictionary.search(s)){
            ans.push(s);
        }
        
        if(wordDictionary.trySearch(s+'.')){
            search(x-1,y,s);
            search(x+1,y,s);
            search(x,y-1,s);
            search(x,y+1,s);
        }
        
        board[x][y] = t;
    }
    
    return ans;
};


/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
    this.map = {};
    this.indexMap = {};
    this.searchMap = {};
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
     this.map[word] = true;
    let len = word.length;
    if(!this.indexMap[len]){
        this.indexMap[len] = [];
    }
    
    this.indexMap[len].push(word);
    
    let index = word[0];
    if(!this.indexMap[index]){
        this.indexMap[index] = [];
    }
    
    this.indexMap[index].push(word);
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    if(this.searchMap[word]) return false;
    
    var rg = new RegExp('^' + word + '$');
    let len = word.length;
    
    let arr = this.indexMap[len];
    if(!arr || arr.length === 0) return false;
    for(var i = 0; i<arr.length; i++){
        if(rg.test(arr[i])){
            arr.splice(i,1);
            this.searchMap[word] = true;
            return true;
        }
    }
    
    this.searchMap[word] = true;
    return false;
};

WordDictionary.prototype.trySearch = function(word) {
    var rg = new RegExp('^' + word);
    let first = word[0];
    
    let arr = this.indexMap[first];
    if(!arr || arr.length === 0) return false;
    for(var i = 0; i<arr.length; i++){
        if(rg.test(arr[i])){
            return true;
        }
    }
    
    return false;
};
