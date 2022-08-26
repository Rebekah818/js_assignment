// 1. Write a JavaScript function that reverse a number
// example x = 32243;
// expected output = 34223;
// const numbers = [1,2,3,4,5];
// numbers.reverse();



// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
// madam or nurses run.

//  const str = "Radar";
// const isPalindrome = (str) => {

//    str = str.toLowerCase();
//     for (let i=0; i<str.length; i+=1) {
//         if(str[i] !== str[str.length -1 -i]) {
//             return false;

//         }
//     }
//     return true;
// }

// console.log(isPalindrome(str));


// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string: 'dog' 
// Expected Output: d, do, dog, o, og, g 

// const possibleCombos = (str) => {
//     let combos = [];
//     for(let i = 0; i < str.length; i++) {
//         for (let j = i + 1; j < str.length + 1; j++){
//             combos.push(str.slice(i, j));
//         }
//     }
//     return combos;
// }
// console.log(possibleCombos("cat"));



// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string: 'webmaster' 
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

// function abcOrder(str) {
//     return str.split('').sort().join('');

// }
// console.log(abcOrder('webmaster'));


// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of
// each word of the string in upper case. 
// Example string: 'the quick brown fox' 
// Expected Output: 'The Quick Brown Fox '

function capitalize(str) {
    var splitStr = str.toLowerCase().split();

    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() +
            splitStr[i].substring(1);
    }
    return splitStr.join(' ');
}
console.log(capitalize("the quick brown fox"));


// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word
// within the string. 
// Example string: 'Web Development Tutorial' 
// Expected Output: 'Development'


function longestWord(str) {
    var array1 = str.match(/\w[a-z]{0,}/gi);
    var result = array1[0];

    for (var x = 1; x < array1.length; x++) {
        if (result.length < array1[x].length) {
            result = array1[x];
        }
    }
    return result;
}
console.log(longestWord('Web Development Tutorial'));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of
// vowels within the string. 
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as
// vowel here. 
// Example string: 'The quick brown fox' 
//Expected Output: 5
const vowels = ['a', 'e', 'i', 'o', 'u'];

function vowelCount(str) {
    let count = 0;
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count;
}
const string = prompt("the quick brown fox");
const result = vowelCount(string);

console.log(result);



// 8. Write a JavaScript function that accepts a number as a parameter and check the number is
// prime or not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
// divisors other than 1 and itself.
function primeNum(num) {
    if (num === 2) {
        return true;
    } else if (num > 1) {
        for (var i = 2; i < num; i++) {
            if (num % i !== 0) {
                return true
            } else if (num === i * i) {
                return false
            } else {
                return false;
            }
        }
    } else {
        return false;

    }
}
console.log(primeNum(84));


// 9. Write a JavaScript function which accepts an argument and returns the type.
// Note: There are six possible values that typeof returns: object, boolean, function, number, string,
// and undefined.

function dataType(value) {
    let types = [object, boolean, function number, string, undefined], i, len;

    if (typeof value === "object" || typeof value === "number") {
        for (i = 0, len = types.length; i < len; i++) {
            if (value instanceof types[i]) {
                return types[i];
            }
        }
    }
    return typeof value;
}
console.log(dataType(10));
console.log(dataType("cat"));
console.log(dataType(true));

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix

function idMatrix(n) {
    let i;
    let x;
    for (i = 0; i < n; i++) {
        if (i === x) {
            console.log('1');
        } else {
            console.log('0');
        }
        console.log('-------');
    }
}

idMatrix(6);

// 11. Write a JavaScript function which will take an array of numbers stored and find the second
// lowest and second greatest numbers, respectively. 
// Expected Output: 2,4 
const array = [1, 2, 3, 4, 5];

let arrayOutput = [];

function sortArr() {
    var sortedArr = array.sort();
    arrayOutput.push(sortedArr[1], array[array.length - 2]);
    return arrayOutput;
}
sortArr();



// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to
// the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the
// number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is
// half the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1
// + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 +
// 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the
// perfect numbers 496 and 8128.

function perfectNum(number) {
    let sum = 0;

    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    } if (sum === number) {
        return true;
    }
    return false;
}
perfectNum();

console.log("56 is", perfectNum(56) ? 'a perfect number' : ' not a perfect number');

console.log('6 is', perfectNum(6) ? 'a perfect number' : ' not a perfect number');




// 13. Write a JavaScript function to compute the factors of a positive integer. 

function positiveFactor(n) {
    let output = [];
    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            output.push(i)
        }
    } return output
}
console.log(positiveFactor(12));


// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output: 25, 10, 10, 1




// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the
// bases. Accept b and n from the user and display the result. 



// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"



// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.




// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds
// the desired value.



// 19. Write a JavaScript function that returns array elements larger than a number. 



// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample   character   list:
// "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"



// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)
// combinations in an array. 
// Sample array: [1, 2, 3] and subset length is 2 
// Expected output: [[2, 1], [3, 1], [3, 2]]



// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function
// will count the number of occurrences of the specified letter within the string. 
// Sample arguments: 'microsoft.com', 'o' 
// _________________________________________________________________________________________
// Antra Inc. 21355 Ridgetop Circle Suite 300 Dulles VA 20166
// Phone: 703.994.4545 Fax: 703.373.2975 e-mail:hr@antra.net website: www.antra.net
// Expected output: 3 



// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments: 'abacddbec' 
// Expected output: 'e' 



// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
// Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple
// sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing
// each pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]




// 25. Write a JavaScript function that accept a list of country names as input and returns the
// longest country name as output. 
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"



// 26. Write a JavaScript function to find longest substring in a given a string without repeating
// characters. 



// 27. Write a JavaScript function that returns the longest palindrome in a given string. 
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest
// symmetric factor problem is the problem of finding a maximum-length contiguous substring of a
// given string that is also a palindrome. For example, the longest palindromic substring of
// "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for
// example, in the string "abracadabra", there is no palindromic substring with length greater than
// three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all
// substrings that are themselves palindromes and cannot be extended to larger palindromic
// substrings) rather than returning only one substring or returning the maximum length of a
// palindromic substring.




// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 



// 29. Write a JavaScript function to get the function name. 
_________________________________________________________________________________________
