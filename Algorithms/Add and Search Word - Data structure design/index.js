/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
    this.map = {};
    this.indexMap = {};
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
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    var rg = new RegExp('^' + word + '$');
    let len = word.length;
    
    let arr = this.indexMap[len];
    if(!arr || arr.length === 0) return false;
    for(var i = 0; i<arr.length; i++){
        if(rg.test(arr[i])){
            return true;
        }
    }
    
    return false;
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = Object.create(WordDictionary).createNew()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
