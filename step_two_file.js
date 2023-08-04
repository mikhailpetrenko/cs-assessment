const perf = require('execution-time')();


// 1) Sum Zero
//Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

addToZero = arr => {
    let tempArr = []
    for (i of arr) {
        if (tempArr.includes(-i)) {
            return true
        }
        else {
            tempArr.push(i)
        }
    }
    return false
}
console.log(addToZero([1,2,3, -3]))


// We created temprorary array to avoid nested loop which would almost kill our time complexity numbers.

// Our array is even less than tiny in our last task, but here are two of them, so execution time might be about ~70μs

// Space complexity is O(n), where the n is an amount of elements in given array, because we need to iterate them to find numbers we're looking for.


// 2) Unique Characters
// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

hasUniqueChars = str => {
    let tempStr = []
    for (i of str) {
        if (tempStr.includes(i)) {
            return false
        }
        else {
            tempStr.push(i)
        }
    }
    return true
}

console.log(hasUniqueChars("Moonday"))


// As you can see I like the meme "perfection doesn't need changes" (https://cs10.pikabu.ru/images/big_size_comm/2019-03_5/1553359425149578019.jpg) :D:D:D. So, the code is almost the same, so all outcomes for previous task are applicable for this one as well. 

// This time we operate with string, which is quite similar, so the reulst must be something like previous one: about 60μs

//Space complexity: considering the code is almost the same, the space complexity would be the same as well: O(n)


// 3) Pangram Sentence
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

isPangram = str => {
    let abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    return abc.filter(letter => !str.toLowerCase().split('').includes(letter)).length === 0
}
console.log(isPangram("I like cats, but not mice"))



// I was trying to avoid any loop for better time complexity, so used filter function, where includes all required filters. Now we have O(n). Maybe the code may look confusing because of a ton of methods, but I like it :D:D:D.

//Considering this time I moved to filter method, I guess now our time will be tiny. I would bet on something like 20 miliseconds. 

//Regarding the fixed size of abc array and our strict condition of filter, the space complexity will be O(1)


// 4) Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

findLongestWord = words => {
    return words.sort((a,b) => b.length-a.length)[0].length
}

console.log(findLongestWord(["hi", "sadpijpfisjdiafjdipasjpijop", "hello", "sdfjkgl;jsfdkl;"]))
// -> 5


//Our functoin is literally one line of code, which consist just one method, so the time must be the smallest in our assessment. Let's say: 10 milisecs.

// Space complexity would be O(n), because using of our sort method we actually iterate each element by compaing it with next one. 