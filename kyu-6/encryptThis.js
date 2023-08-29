// Acknowledgments:
// I thank yvonne-liu for the idea and for the example tests :)

// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.

// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

let encryptThis = function(text) {
    return text
      .split(' ')
      .map(element => {
        if (element.length === 1) return element.charCodeAt(0);
        if (element.length === 2) return `${element[0].charCodeAt(0)}${element[1]}`;
        if (element.length === 3) return `${element[0].charCodeAt(0)}${element.slice(-1)}${element[1]}`;
        if (element.length > 3) return `${element[0].charCodeAt(0)}${element.slice(-1)}${element.slice(2, -1)}${element[1]}`;
      })
      .join(' ');
}

// Best Practice
// const encryptThis = text => text
//   .split(' ')
//   .map(word => word
//   .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
//   .replace(/^\w/, word.charCodeAt(0)))
//   .join(' ');