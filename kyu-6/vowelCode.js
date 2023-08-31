// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

function encode(string) {
    for (let letter of string) {
      switch (letter) {
        case "a":
          string = string.replace("a", "1");
          break;
        case "e":
          string = string.replace("e", "2");
          break;
        case "i":
          string = string.replace("i", "3");
          break;
        case "o":
          string = string.replace("o", "4");
          break;
        case "u":
          string = string.replace("u", "5");
          break;
        default:
          string = string;
      }
    }
    return string;
}
  
function decode(string) {
    for (let letter of string) {
      switch (letter) {
        case "1":
          string = string.replace("1", "a");
          break;
        case "2":
          string = string.replace("2", "e");
          break;
        case "3":
          string = string.replace("3", "i");
          break;
        case "4":
          string = string.replace("4", "o");
          break;
        case "5":
          string = string.replace("5", "u");
          break;
        default:
          string = string;
      }
    }
    return string;
}

// Best Practice

// turn vowels into numbers
// function encode(string){
//     return string.replace(/[aeiou]/g, function (x) { return '_aeiou'.indexOf(x) });
// }
  
//turn numbers back into vowels
// function decode(string){
//     return string.replace(/[1-5]/g, function (x) { return '_aeiou'.charAt(x) });
// }