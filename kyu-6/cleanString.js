// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

function cleanString(s) {
    let newArray = [];
    s.split("").forEach(element => {
      element !== "#" ? newArray.push(element) : newArray.pop();
    });
    return newArray.join("");
}