// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// function disemvowel(str) {
//     str=str.split('');
//     return (str.filter(function(letters) {
//    if((letters !=="a")&&(letters!=="e")&&(letters!=="i")&&(letters!=="o")&&(letters!=="u")
//      &&(letters !=="A")&&(letters!=="E")&&(letters!=="I")&&(letters!=="O")&&(letters!=="U")){
//      return letters;}
//   })).join('');
//   }

const disemvowel = (str => str.split('').filter(letter => "aeiou".includes(letter.toLowerCase()) ? '' : letter).join(''));

console.log(disemvowel("My nAme iS MathiAs"))