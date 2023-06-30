// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

function solution(nums){
    return nums !== null ? nums.sort((a,b)=> a-b) : [] ;
}

// When you sort an array with .sort(), it assumes that you are sorting strings. When sorting numbers, the default behavior will not sort them properly.

// The function that you pass tells how to sort the elements. It takes two parameters (a and b) that represent any two elements from the array. How the elements will be sorted depends on the function’s return value:

// if it returns a negative value, the value in a will be ordered before b.
// if it returns 0, the ordering of a and b won’t change.
// if it returns a positive value, the value in b will be ordered before a.

// When you pass the function (a, b) => a - b, you’re telling the .sort() function to sort the numbers in ascending order.