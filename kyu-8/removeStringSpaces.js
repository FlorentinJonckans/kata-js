// Write a function that removes the spaces from the string, then return the resultant string.

function noSpace(x){
    return x.replaceAll(" ","");
}

// function noSpace(x){
//     return x.replace(/\s/g, '');
// }

// function noSpace(x){return x.split(' ').join('')}

// function noSpace(x){
//     var result = ""
//     for(var index = 0; index < x.length; index++){
//       if(x[index] !== " "){
//         result += x[index];
//       }
//     }
//     return result;
// }