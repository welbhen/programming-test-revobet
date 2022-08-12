# Programming Test

"Write a program in your preferred language that given an array of integers A will
find all the pairs of numbers that if subtracted will result in a specific given number M. For
example for the array A={4,5,10,11,6} and the number M=-1 will return the following pairs:
0-1, 2-3, 1-4. This means that A[0]-A[1]=4-5=-1 A[2]-A[3]=10-11=-1 and A[1]-A[4]=5-
6=-1. Please explain the space/time performance and other trade-offs."

## Running the program

- clone the repo `git clone https://github.com/welbhen/programming-test-revobet.git`
- navigate to your dir using the terminal
- run `node test` ([node.js](https://nodejs.org/en/) required for this)
- you can run new tests by adding new arrays and numbers, and then, calling the function at the end of the program as such `checkPairs(yourNewArray, yournewNumber)`
