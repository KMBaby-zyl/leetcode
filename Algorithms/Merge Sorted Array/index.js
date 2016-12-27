/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = 0;
    let j = 0;
    let flag;
        nums1.splice(m, n)
    
    for(; i< n; i++){
        flag = true;
        while(flag){
            if(j >= nums1.length){
                nums1.push(nums2[i]);
                flag = false;
            }else if(nums1[j] > nums2[i]){
                nums1.splice(j, 0, nums2[i]);
                j++;
                flag = false;
            }else{
                j++;
            }
        }
    }
};
