/*
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5

Input : ar1[] = {-5, 3, 6, 12, 15}
        ar2[] = {-12, -10, -6, -3, 4, 10}
        The merged array is :
        ar3[] = {-12, -10, -6, -5 , -3,
                 3, 4, 6, 10, 12, 15}
Output : The median is 3.

Input : ar1[] = {2, 3, 5, 8}
        ar2[] = {10, 12, 14, 16, 18, 20}
        The merged array is :
        ar3[] = {2, 3, 5, 8, 10, 12, 14, 16, 18, 20}
        if the number of the elements are even, 
        so there are two middle elements,
        take the average between the two :
        (10 + 12) / 2 = 11.      
Output : The median is 11.
*/

var findMedianSortedArrays = function(nums1, nums2) {
  let arr = [...nums2];
  if (nums2.length === 0) arr = [...nums1];
  if (nums2.length !== 0 && nums2.length !== 0) {
    let arr1 = [...nums1];
    for (num of arr1) {
      if (num <= arr[0]) arr.unshift(num);
      else if (num >= arr[arr.length - 1]) arr.push(num);
      else {
        let start = 0;
        let end = arr.length - 1;
        let middle = Math.floor((end + start) / 2);
        while (start <= end) {
          middle = Math.floor((end + start) / 2);
          if (num >= arr[middle]) start = middle + 1;
          else if (num < arr[middle]) end = middle - 1;
        }
        arr.splice(start, 0, num);
      }
    }
  }
  console.log(arr);
  const middle = Math.floor((arr.length - 1) / 2);
  let median;
  if (arr.length % 2 === 1) median = arr[middle];
  else {
    median = (arr[middle] + arr[middle + 1]) / 2;
  }
  return median;
};

// ar1 = [2, 3, 5, 8];
// ar2 = [10, 12, 14, 16, 18, 20];
// console.log(findMedianSortedArrays(ar1, ar2));
// ar1 = [1];
// ar2 = [];
// console.log(findMedianSortedArrays(ar1, ar2));
ar1 = [1, 2, 2];
ar2 = [1, 2, 3];
console.log(findMedianSortedArrays(ar1, ar2));
