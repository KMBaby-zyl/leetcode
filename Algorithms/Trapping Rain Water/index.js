/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if(height.length <= 2){
        return 0;
    }
    
    var hsArr = getHS(height);
    if(!hsArr){
        return 0;
    }
    console.log(hsArr);
    
    var left = hsArr[0];
    var right = hsArr[1];
    var r = 0;
    r = r + trap(height.slice(0, left.position + 1));
    r = r + trap(height.slice(right.position));
    
    var h = Math.min(left.height, right.height);
    r = r + ana(h, left.position, right.position, height);


    return r;
};


function ana(h, left, right, arr){
    var r = 0;

    for(var i = left; i<=right; i++){
        var t = h - arr[i];
        if(t < 0) t = 0;
        r = r + t;
    } 
    
    return r;
    
}

function getHS(arr){
    var h1 = {
        position: 0,
        height: 0
    },  h2 = {
        position: arr.length -1,
        height: 0
    };
    
    
    for(var i = 0, len=arr.length; i<len; i++){
        if(arr[i] > h1.height){
            h2 = {
                position: h1.position,
                height: h1.height
            }
            h1 = {
                position: i,
                height: arr[i]
            }
        }else if(arr[i] > h2.height){
            h2 = {
                position: i,
                height: arr[i]
            }
        }
    }
    
    if(h2.height === 0){
        return false;
    }
    
    if(h2.position < h1.position){
        return [h2,h1]
    }
    
    return [h1,h2];
}
