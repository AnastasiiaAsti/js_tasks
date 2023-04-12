// Given an array of integers nums which is sorted in ascending order,
//     and an integer target, write a function to search target in nums.
//     If target exists, then return its index.Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.


// The function takes two parameters: an array of integers nums and an integer target to search for
let search = function (nums, target) {
    // initialize left and right pointers to the start and end of the array
    let left = 0;
    let right = nums.length - 1;
    // a loop that continues as long as left is less than or equal to right
    while (left <= right) {
        // calculate the midpoint mid of the current range
        const mid = Math.floor((left + right) / 2);
        // check whether the element at mid equals the target.
        if (nums[mid] === target) {
            // If it does, the function returns mid as the index of the target in the array
            return mid;
        } else if (nums[mid] < target) {
            // if nums[mid] is less than the target, the search is restricted to 
            // the right half of the array by updating left to mid + 1
            left = mid + 1;
        } else {
            // If nums[mid] is greater than the target, 
            // the search is restricted to the left half of the array by updating right to mid - 1
            right = mid - 1;
        }
    }
    //If the target is not found in the array, the function returns -1.
return -1;
};

// This algorithm has a runtime complexity of O(log n), 
//since the size of the search range is divided by 2 
//at each iteration of the loop, leading to a logarithmic growth 
//in the number of iterations required to find the target.


// Binary search is a search algorithm that works on sorted arrays, and has a time complexity of O(log n). The idea behind binary search is to divide the array into two roughly equal halves at each step of the search, and then eliminate one of the halves based on the comparison of the target value with the middle element of the array. By repeatedly dividing the array in half and eliminating one half at each step, the algorithm quickly narrows down the search space until it either finds the target element, or determines that it doesn't exist in the array.

// Here's how the binary search algorithm works in detail:

// Initialize left and right pointers to the first and last elements of the array, respectively.
// While the left pointer is less than or equal to the right pointer:

// a.Calculate the middle index as the average of the left and right pointers,
//     rounded down to the nearest integer.
// b. If the middle element is equal to the target, return its index.
// 
// c.If the middle element is less than the target, update the left pointer to 
//      be one index to the right of the middle index.
// d.If the middle element is greater than the target, update the right pointer to 
//      be one index to the left of the middle index.
//      If the target is not found in the array, return -1.

// Binary search is a very efficient algorithm for searching for a specific element in a large,
//     sorted array, as it eliminates roughly half of the remaining search space at each step.
//     However, it requires the array to be sorted beforehand, which can be an additional
// cost in terms of time and space complexity.