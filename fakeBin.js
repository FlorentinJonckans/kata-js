// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x){
    let newX = x.split("");
    // console.log(newX);
    for(let i = 0 ; i < newX.length ; i++){
      if ( newX[i] < 5 ){
        newX[i] = '0';
      } else if ( newX[i] >= 5 ){
        newX[i] = '1';
      }
    }
    return newX.toString().replaceAll(",","");
}

// function fakeBin(x) {
//     return x.split('').map(n => n < 5 ? 0 : 1).join('');
// }