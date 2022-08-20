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
const vowels = ['a','e','i','o','u'];

function vowelCount (str) {
    let count = 0;
    for (let letter of str.toLowerCase()){
        if (vowels.includes(letter)){
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
function primeNum (num) {
    if (num === 2) {
        return true;
    } else if (num > 1) {
        for (var i = 2; i < num; i++) {
            if (num % i !== 0) {
                return true
            } else if (num === i * i ) {
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

function dataType (value) {
    let types = [object, boolean, function number, string, undefined] ,i, len;
    
    if (typeof value === "object" || typeof value === "number"){
        for (i = 0, len = types.length; i < len; i++)
        {
            if (value instanceof types[i])
         {
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

