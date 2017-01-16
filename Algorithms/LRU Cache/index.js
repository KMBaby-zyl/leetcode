/**
 * @constructor
 */
var LRUCache = function(capacity) {
    this.map = {};
    this.capacity = capacity;
    this.catchArr = [];
};

/**
 * @param {number} key
 * @returns {number}
 */
LRUCache.prototype.get = function(key) {
    let val = this.map[key];
    if(val === undefined) return -1;
    
    let index = this.catchArr.indexOf(key);
    this.catchArr.splice(index,1);
    this.catchArr.push(key);
        
    return val;
};

/**
 * @param {number} key
 * @param {number} value
 * @returns {void}
 */
LRUCache.prototype.set = function(key, value) {
    if(this.map[key] !== undefined){
        this.map[key] = value;
        let index = this.catchArr.indexOf(key);
        this.catchArr.splice(index,1);
        this.catchArr.push(key);
    }else{
        if(this.catchArr.length === this.capacity){
            let oldkey = this.catchArr.shift();
            this.map[oldkey] = undefined;
        }
        
        this.catchArr.push(key);
        this.map[key] = value;
    }
    
    
};
