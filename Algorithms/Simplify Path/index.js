/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    
    if(path[path.length -1] === '/'){
        path = path.slice(0, -1);
    }
    
    
    if(path[0] === '/'){
        path = path.slice(1);
    }
    
    
    
    console.log(path);
    
    let arr = path.split('/');
    let ans = [];
    for(var i = 0; i< arr.length; i++){
        if( /^\.\.$/.test(arr[i])){
            console.log(i);
            
            if( !/^\.\.$/.test(ans[ans.length - 1]) && ans.length>0){
                ans.pop();
            }else{
                // ans.push(arr[i]);
                continue;
            }
        }else if(arr[i] === '.' || arr[i] ===''){
            continue;
        }else{
            ans.push(arr[i])
        }
    }

    ans = ans.join('/');

    return ('/' + ans);
};
