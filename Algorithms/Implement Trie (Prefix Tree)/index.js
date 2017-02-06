// 14 / 14 test cases passed.
// Status: Accepted
// Runtime: 185 ms
// beat 100%
/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.map = {};
    this.indexMap = {};
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    this.map[word] = true;
    let index = word[0];
    if(!this.indexMap[index]){
        this.indexMap[index] = [];
    }
    
    this.indexMap[index].push(word);
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    return !!this.map[word]
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let first = prefix[0];
    let arr = this.indexMap[first];
    if(!arr || arr.length === 0) return false;
    for(var i = 0; i<arr.length; i++){
        if(arr[i].startsWith(prefix)){
            return true;
        }
    }
    
    return false;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
