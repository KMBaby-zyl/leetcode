/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let zeroList = [];
    let flist = [];
    let zlist = [];
    
    nums.map(function(i){
       if(i === 0){
           zeroList.push(i);
       }else if(i < 0){
           flist.push(i);
       }else{
           zlist.push(i);
       }
    });
    
    let zlen = zlist.length;
    let flen = flist.length;
    
    let r = [];
    let a = [];
    
    //000
    if(zeroList.length >= 3){
        r.push([0,0,0]);
    }
    
    // f 0 z
    if(zeroList.length > 0){
        a = [];
        for(var i = 0; i < flen; i++){
            if(a.indexOf(flist[i]) === -1 && zlist.indexOf(Math.abs(flist[i])) != -1){
                a.push(flist[i]);
                r.push([flist[i], 0 , -flist[i]]);
            }
        }
    }
    
    // ffz
    a = [];
    for(var i = 0; i < zlen; i++){
        if(a.indexOf(zlist[i]) === -1){
            a.push(zlist[i]);
            var za = [];
            for(var j = 0; j<flen; j++){
                if(za.indexOf(flist[j]) === -1){
                    za.push(flist[j]);
                    let tmp = flist[j];
                    flist[j] = '';
                    let j2 = flist.indexOf(-zlist[i] - tmp);
                    flist[j] = tmp;
                    if(j2 != -1){
                        za.push(flist[j2]);
                        r.push([flist[j2], tmp, zlist[i]]);
                    }
                }
            }
        }
    }
    
    // zzf
    a = [];
    for(var i = 0; i < flen; i++){
        if(a.indexOf(flist[i]) === -1){
            a.push(flist[i]);
            var za = [];
            for(var j = 0; j<zlen; j++){
                if(za.indexOf(zlist[j]) === -1){
                    za.push(zlist[j]);
                    let tmp = zlist[j];
                    zlist[j] = '';
                    let j2 = zlist.indexOf(-flist[i] - tmp);
                    zlist[j] = tmp;
                    if(j2 != -1){
                        za.push(zlist[j2]);
                        r.push([zlist[j2], tmp, flist[i]]);
                    }
                }
            }
        }
    }
    
    
    
    return r;
    
    
};
