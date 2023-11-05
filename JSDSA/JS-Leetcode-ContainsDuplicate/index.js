/* 
Given an integer array nums, return true if any value appears at least 
twice in the array, and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 
Constraints:
1 <= nums.length <= 105
-109 <= nums[i] <= 109 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const mySet = new Set(nums);
  return mySet.size !== nums.length;
};
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
console.log(containsDuplicate([1, 2, 3, 4])); //false

/*
**** Time complexity: O(n)

This algorithm is efficient because Sets in JavaScript are designed to 
store only unique values. As a result, it has a time complexity of O(n), 
where n is the number of elements in the input array nums. It can quickly detect duplicates 
without the need for nested loops or sorting the array, making it a good 
choice for this task, especially for large input arrays.

**** Space complexity: O(n)

The space complexity of the provided algorithm is O(n), 
This is because in the worst case, the algorithm may need to store 
all the elements of nums in the Set to check for duplicates.

Here's why the space complexity is O(n):
The Set (set) stores the unique elements from the input array. 
In the worst case, when there are no duplicates, all n elements 
from the input array will be stored in the Set.
Additionally, the algorithm uses a few constant amount of space 
for variables and temporary data structures, but they do not depend 
on the size of the input array, so they are considered constant space.
So, the dominant factor in the space complexity is the Set, and the 
space required by the Set is directly proportional to the number of elements in the 
input array, resulting in O(n) space complexity.
*/
