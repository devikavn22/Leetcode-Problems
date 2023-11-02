/*
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. 
For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.
You must write an algorithm that runs in O(log n) time.

Example 1:

Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.

Example 2:

Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
Example 3:

Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 
 

Constraints:

n == nums.length
1 <= n <= 5000
-5000 <= nums[i] <= 5000
All the integers of nums are unique.
nums is sorted and rotated between 1 and n times.
*/

// SOLUTION:
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] > nums[right]) {
      // The minimum element is on the right side
      left = mid + 1;
    } else {
      // The minimum element is on the left side or at mid
      right = mid;
    }
  }

  return nums[left];
};
console.log(findMin([3, 4, 5, 1, 2])); // 1

/*
***** of O(log n) time complexity:
The binary search algorithm used in this solution has a time complexity of O(log n) 
because it reduces the search range by half in each iteration, 
leading to a logarithmic number of comparisons and iterations.
Since we keep reducing the search range by half in each iteration, 
the number of iterations required to reach the final result is proportional 
to the logarithm (base 2) of the size of the input array (n). 
And this is a fundamental property of binary search.

***** O(1) space complexity :
because it uses a constant amount of additional space regardless of the size of the input array.
*/
