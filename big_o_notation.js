//Example 1
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

//Example 2
function addUpTo(n) {
    return n * (n + 1) / 2;
}
// 6* (6+1)/2
console.log(addUpTo(6));

//Which is better? Faster? Less memory-intensive? Readable? Brevity?
//Faster and less-memory for the moment, better.

//Use Timers
var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds.`)

//Diff machines record diff times & same machine will record different times

//Count number of simple operations instead of time!!!
//Example 1
function addUpTo(n) {
    return n * (n + 1) / 2;
}
//3 operations: *, +, /

//Example 2
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
    //Many many more operations - n*however many times an operation runs... if it runs 20 times then n to the 20 for each operation.
    //Focus on the big picture, not the exact amount of operations
    //Big O..
        //Formalizes fuzzy counting
        //Allows us to talk formally about how runtime of an algorithm grows as the inputs grow
        //Only care about trends

        //An algorithm is 0(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases.

//Rules
    //Constants don't matter
        //Not O(2n), but O(n)
        //Not O(500), but O(1)
        //O(13nsquared), O(nsquared)
    //Smaller Terms Don't Matter
        //Not O(n + 10), but O(n)
        //Not O(1000n + 50), but O(n)
        //Not O(nsquared + 5n + 8), but O(nsquared)
    //Big O Shorthands
        //Arithmetic operations are constant
        //Variable assignment is constant
        //Accessing elements in an array (by index) or object(by key) is constant
        //In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop

