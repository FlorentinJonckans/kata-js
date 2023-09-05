// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr){
    let newArray={};
    for(let i=0;i<arr.length;i++){
      if(newArray[arr[i]]){
        newArray[arr[i]]++;
      }
      else{
        newArray[arr[i]]=1;
      }
    }
    let countMax=0;
    let valueMax=0;
    for(element in newArray){
        if(countMax<=newArray[element]){
            valueMax=Math.max(element,valueMax);
            countMax=Math.max(newArray[element],countMax);
        }
    }
    return valueMax;
}

// Best Practice
// function highestRank(arr){
//     return arr.sort((a,b)=>arr.filter(i=>i===b).length - arr.filter(i=>i===a).length)[0];
// }