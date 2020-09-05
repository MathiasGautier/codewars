// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"
// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

function findMissingLetter(array) {
  let str2arr = array.join("");
  for (let i = 0; i < str2arr.length; i++) {
    if (str2arr.charCodeAt(i + 1) - str2arr.charCodeAt(i) != 1) {
      return String.fromCharCode(str2arr.charCodeAt(i) + 1);
    }
  }
}


const newfunction = ((array) => {
  let alph = "abcdefghijklmnopqrstuvwxyz".split('');
  //check if the array is in upper or lower case and transform the alphabet if needed
  if (array.toString() === array.toString().toUpperCase()) {
    alph = alph.toString().toUpperCase().split(',')
  }
  //find starting and ending points to build a new array
  let start = alph.indexOf(alph.filter((x, i) => x === array[0]).join(''));
  let end = alph.indexOf(alph.filter((x, i) => x === array[array.length - 1]).join(''));

  let newAlphArr = [];
  for (i = start; i < end + 1; i++) {
    newAlphArr.push(alph[i])
  }
  //compare the two arrays to fin the missing letter
  return newAlphArr.filter((letter) => !array.includes(letter)).toString();

})

console.log(newfunction(["A", "C", "D", "E"]))