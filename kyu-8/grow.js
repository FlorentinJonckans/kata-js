// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

let grow = x => {
    let temp = 1;
    for (let i = 0; i < x.length; i++) {
      temp *= x[i];
    }
    return temp;
};

// const grow=x=> x.reduce((a,b) => a*b);