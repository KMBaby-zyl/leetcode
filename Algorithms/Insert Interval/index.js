/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
    let len = intervals.length;
    let t = 0;
    let flag = false;
    
    if(len === 0) return [newInterval];
    
    for(var i=0; i<len; i++){
        if(newInterval.start < intervals[i].start){
            if(i > 0 && newInterval.start <= intervals[i-1].end ){
                intervals[i-1].end = Math.max(newInterval.end, intervals[i - 1].end);
                t = i -1;
                i = len;
            }else{
                intervals.splice(i, 0, newInterval);
                t = i;
                i = len;
            }
            flag = true;
        }
    }
    
    if(!flag){
        i = len - 1;
        if(newInterval.start <= intervals[i].end){
            intervals[i].end = Math.max(newInterval.end, intervals[i].end);
            t = len - 1;
        }else{
            intervals.push(newInterval);
            t = len;
        }
    }
    
    var j = t+1;
    while(intervals[j]){
        if(intervals[j].start <= intervals[t].end){
            if(intervals[j].end >= intervals[t].end){
                intervals[t].end = intervals[j].end;
            }
            
            intervals.splice(j, 1);
        }else{
            j ++;
        }
    }
    
    return intervals;
    
    
};
