// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!

function expandedForm(num) {
    let newString = num.toString();
    const newArray = [];
    let tmp = 1;
    
    for(let i = 1; i <= newString.length ; i++){
      const digit = newString[newString.length - i];
      //digit > 0 condition match the case when we got number units equal 0
      digit > 0 && newArray.unshift(digit*tmp);
      tmp *= 10;
    }
    return newArray.join(' + ');
}

// Best Practice
// const expandedForm = n => n.toString()
//                             .split("")
//                             .reverse()
//                             .map( (a, i) => a * Math.pow(10, i))
//                             .filter(a => a > 0)
//                             .reverse()
//                             .join(" + ");