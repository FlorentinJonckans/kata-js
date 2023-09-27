// For a given string s find the character c (or C) with longest consecutive repetition and return:

// [c, l]
// where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

// For empty string return:

// ["", 0]
// Happy coding! :)

function longestRepetition(s) {
    let max = 0;
    let char = '';
    let lgth = s.length;
    let tmp = 1;
    
    for(let i = 1; i <= lgth; i++){
      if(s[i] === s[i-1]){
        tmp++;
      } else {
        if(tmp > max){
          max = tmp;
          char = s[i-1];
        }
        tmp = 1;
      }
    }
    return [char,max];
}