// The main idea is to count all the occurring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

// What if the string is empty ? Then the result should be empty object literal { }

let str = "oollaala";

function res(string) {
    let char = string.split('');
    let count = {}
    for (let i = 0; i < char.length; i++)
        !count[char[i]] ? count[char[i]] = 1 :
        count[char[i]] += 1
    return count
}

// char.forEach((letter)=>{  <-------------same result as the for loop
//     !count[letter] ? count[letter] = 1 :
//     count[letter] += 1



console.log(res(str))