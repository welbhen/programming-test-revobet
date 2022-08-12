/*  Programming Test:
    Given an array of integers, find all
    the pairs of numbers that if subtracted will
    result in a specific given number.
***************************************************/

let A = [4, 5, 10, 11, 6];
let B = [3, 8, 1, -4, 6, 11];
let M = -1;
let N = 2;

const checkPairs = (array, num) => {
    let size = array.length;
    let pairs = [];
    for (let i = 0; i < size; i++) {
        for (let j = (i + 1); j < size; j++) {
            if ((array[i] - array[j]) === num) pairs.push([i, j]);
        }
    }
    return pairs;
};

console.log("Test 1: ", checkPairs(A, M));
console.log("Test 2: ", checkPairs(B, N));