// Complete the solution so that it reverses the string passed into it. 

function solution(str){
    let temp = '';
    
    for(let i = str.length - 1; i >= 0; i--){
      temp += str[i];
    }
    return temp;
}

// const solution = str => str.split('').reverse().join('');