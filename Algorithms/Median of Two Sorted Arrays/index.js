/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let all = 0;
    
    nums1 = nums1.concat(nums2);
    nums1 = nums1.sort(function(a,b){return a - b});
    
    if(nums1.length % 2 === 1){
        return nums1[~~(nums1.length/2)]
    }else{
        return (nums1[nums1.length/2] + nums1[nums1.length/2 - 1])/2
    }
    
}; 
