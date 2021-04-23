//What is an algorithm
//A process or set of steps to accomplish a certain task.

//Problem Solving Strategies
//Understand the problem (See George Polya - How to Solve It)
//Restate problem in own words
//What are the inputs that go in to it
//What are the outputs that should be returned
//Can outputs be determined from inputs? Do I have enough information to solve this problem? (might need to wait a bit)
//How should I lavel the important pieces of data that are a part of the problem

//Ex Write a function which takes two numbers and returns their sum
//1. Write a function that adds 2 numbers
//2. Integers?  Floating points?  How large are these numbers? Always just 2 inputs?
//3. Integer?  Float? String?
//4. Can the outputs be determined from the inputs?
//5. 
function add() {
    n1 + n2
}

//Explore Concrete Examples
//User Stories
//Unit Tests

//1.Start with Simple Examples
//2.Progress to More Complex Examples
//3.Explore Examples with Empty Inputs
//4.Explore Examples with Invalid Inputs

//ex. Write a function which takes in a string and returns counts of each character in the string.

// Simple inputs
charCount("aaaa") //{a:4}

// Complex inputs
"my number is 182763"
"Hello hi"
// Edge cases
charCount("")//what happens

//Break it down
//explicity write out steps ou need to take

//ex. Write a function which takes in a string and returns counts of each character in the string.

function charCount(str) {
    //do something
    //return an object with keys that are lowercase alphanumeric characers in the strong; values should be
}

function charCount(str) {
    //make object to return at end

    //loop over string, for each character
    //if the char is a number/letter AND key in object, add 1 to count
    //if char a number/letter AND not in object, add it to the object and set value to 1
    //otherwise if character is seomething else (space, period, etc) don't do anything

    //return object at end
}

//solve/simplify (solve the problem or solve a simpler problem!)
// - Find core difficulty, ignore it temporarily, then incorporate it back in
function charCount(str) {
    //make object to return at end
    var result = {};
    //loop over string, for each character
    for (var i = 0; i < str.length; i++) {
        var char = str[i].LowerCase;
        //if the char is a number/letter AND key in object, add 1 to count
        if (result[char] > 0) {
            result[char]++;
            //if the car is a number/letter AND not in object, add it to object and set value to 1
        } else {
            result[char]
        }
    };
    //if character is something else (space, period, etc) don't do anything
    //return object at end
    return result;
}
//if the char is a number/letter AND key in object, add 1 to count
//if char a number/letter AND not in object, add it to the object and set value to 1
//otherwise if character is seomething else (space, period, etc) don't do anything

//return object at end




//Look back and refactor
//1. Can you check the result?
//2. Can you derive the result differently?
//3. Can you understand it at a glance?
//4. Can you use the result or mothod for some other problem?
//5. Can you improve the performance of your solution?
//6. Can you think of other ways to refactor?
//7. How have other people solved this problem?

//Go through this process with this solution:
function charCount(str) {
    var obj = {};
    for (var i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase;
        if (/[a-z0-9]/.test(char)) {
            if (obj[char] > 0) {
                obj[char]++;
            } else {
                obj[char]
            }
        }
    }
}

//Change for loop to for of
function charCount(str) {
    var obj = {};
    for (var char of str) {
        var char = str[i].toLowerCase;
        if (/[a-z0-9]/.test(char)) {
            if (obj[char] > 0) {
                obj[char]++;
            } else {
                obj[char]
            }
        }
    }
}

// change if else to if truthy/falsey
function charCount(str) {
    var obj = {};
    for (var char of str) {
        var char = str[i].toLowerCase;
        if (/[a-z0-9]/.test(char)) {
            obj[char] = ++obj[char] || 1
        }
    }
}

// Change Regex  to charCodeAt b/c potential issues
function charCount(str) {
    var obj = {};
    for (var char of str) {
        char = char.toLowerCase();
        if (isAlphaNumeric(char)) {
            obj[char] = ++obj[char] || 1
        }
    }
}


function isAlphaNumeric(char) {
    var code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && //numeric (0-9)
        !(code > 64 && code < 91) && //upper alpha (A-Z)
        !(code > 96 && code < 123)) {//lower alpha (a-z)
        return false;
    }
    return true;
}

charCodeAt(0)