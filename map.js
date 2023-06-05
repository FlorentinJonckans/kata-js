// Given an array of integers, return a new array with each value doubled.

function maps(x){
    let temp = [];
    for(let i = 0 ; i < x.length ; i++){
      temp[i] = x[i]*2;
    }
    return temp;
}