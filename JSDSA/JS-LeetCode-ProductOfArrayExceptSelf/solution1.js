/* 
Given an integer array nums, return an array answer such that answer[i] is equal to the product of 
all the elements of nums except nums[i].The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 
Constraints:
2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 
****** Follow up: Can you solve the problem in O(1) extra space complexity? 
(The output array does not count as extra space for space complexity analysis.)
*/

// SOLUTION 1:

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length;

  // Initialize left and right arrays to store products
  const leftProducts = new Array(n);
  const rightProducts = new Array(n);

  // Initialize the result array
  const result = new Array(n);

  // product of elements to the left of each element
  leftProducts[0] = 1;
  for (let i = 1; i < n; i++) {
    leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
  }

  // product of elements to the right of each element
  rightProducts[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
  }

  // Calculate the final result
  for (let i = 0; i < n; i++) {
    result[i] = leftProducts[i] * rightProducts[i];
  }

  return result;
};

console.log(productExceptSelf([-1, 1, 0, -3, 3])); //  [0,0,9,0,0]

/* 
Time Complexity: O(n), Without using the division operation and in O(n) time complexity, 
you can use two auxiliary arrays to keep track of the product of elements to the left and right of each element in the input array.

Space Complexity:The space complexity is O(n) as well since it uses two auxiliary arrays of the same size as the input array.
*/
