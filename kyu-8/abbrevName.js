// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
    let temp = [name[0]]
    for(let i = 0; i < name.length; i++) {
        if(name[i] === " ") {
            temp.push(name[i + 1]);
        }
    }
    return temp.map(element => element.toUpperCase()).join(".")
}

// function abbrevName(name){

//     let nameArray = name.split(" ");
//     return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
// }