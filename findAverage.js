// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
    let temp = 0;
    
    if (array.length == 0){
      return 0;
    }
  
    for (let i = 0; i < array.length; i++) {
        temp += array[i];
    }
    return temp / array.length;
}

// let find_average = (array) => {  
//     return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
// }