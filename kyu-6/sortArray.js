// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
    let newArray = array.filter(x => x%2).sort((a, b) => a - b);      
    return array.map(x => x%2 ? newArray.shift() : x);
}

// Take too much time to read
//
// function sortArray(array) {
//     let newArray = [...array];
//     let cpt = 0;
//     for(let i = 0 ; i < array.length ; i++){
//       if( array[i]%2 !== 1 ){
//         newArray.push(array[i]);
//         array[i] = 0;
//       }
//     }
//     newArray.sort();
//     for(let j = 0 ; j < array.length ; j++){
//       if( array[j] == 0 ){
//         array.splice(j,0,newArray[cpt]);
//         cpt++;
//       }
//     }
//     return newArray;
// }