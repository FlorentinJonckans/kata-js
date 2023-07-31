// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function
function solution(string) {
    let newStr = "";
    for(letter of string){
      if(letter == letter.toUpperCase()){
         newStr += " ";
         newStr += letter;
      } else {
        newStr += letter;
      }
    }
    return newStr;
}
  