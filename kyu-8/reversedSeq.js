// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
    let array = [];
    let count = 0;
    while (n !== 0){
      array[count] = n;
      n--;
      count++;
    }
    return array;
};

// const reverseSeq = n => {
//     return Array(n).fill(0).map((e, i) => n - i );
// };