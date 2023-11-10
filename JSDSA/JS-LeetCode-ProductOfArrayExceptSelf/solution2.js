// SOLUTIUON 2 : (BASED ON FOLLOW_UP Q)

/* 
****** Follow up: Can you solve the problem in O(1) extra space complexity? 
(The output array does not count as extra space for space complexity analysis.)
*/

var productExceptSelf = function (nums) {
  const n = nums.length;

  // Initialize the result array
  const result = new Array(n);

  // Calculate the product of elements to the left of each element and store in the result array
  result[0] = 1;
  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  // Calculate the product of elements to the right of each element and multiply with the result array
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return result;
};

console.log(productExceptSelf([-1, 1, 0, -3, 3])); //  [0,0,9,0,0]

/* 
Time Complexity: O(n)

Space Complexity: O(1)
Here, the result array is used to store both the prefix products and the final result.
The variable rightProduct is used to keep track of the product of elements to the right of the current element.
This way, we can achieve the O(1) space complexity, as we are using the output array itself to store the required information.
*/
