/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    let ans = [];
    let len = intervals.length;  
    if(len === 0) return [];
    let i = 1;
    
    let sarr = sort(intervals);
    t = sarr[0];
    console.log(sarr);
    
    while ( i < len ){
        let item = sarr[i];
        if(item.start <= t.end){
            if(item.end > t.end){
                t.end = item.end;
            }
            
            i++;
        }else{
            ans.push(t);
            t = item;
            i++
        }
    }
    
    ans.push(t);
    
    return ans;
};


function sort(intervals){
    let len = intervals.length;
    let ans = [intervals[0]];
    
    for(var i = 1; i<len; i++){
        for(var j = 0; j < ans.length; j++){
            if(intervals[i].start < ans[j].start){
                ans.splice(j,0,intervals[i]);
                j = ans.length;
            }
        }
        
        if( j === ans.length){
            ans.push(intervals[i]);
        }
    }
    
    return ans;
}
