/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.arr = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if(this.arr.length === 0){
        this.arr.push(num); 
        return;
    }
    let len = this.arr.length;
    if(this.arr[len-1] < num) {
        this.arr.push(num);
        return;
    }
    for(var i = 0; i<len; i++){
        if(this.arr[i] >= num){
            this.arr.splice(i,0,num);
            return;
        }
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    let len = this.arr.length;
    if(len%2 === 0){
        return (this.arr[len/2] + this.arr[len/2 -1])/2;
    }else{
        return this.arr[(len-1)/2];
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = Object.create(MedianFinder).createNew()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
