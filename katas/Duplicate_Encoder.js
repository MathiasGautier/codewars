// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

const test = "(( @";


function duplicateEncode(word) {
    let count = {};
    let char = word.toLowerCase().split('');
    char.forEach(letter => //start by counting the number of iterations of a char
        !count[letter] ? count[letter] = 1 : //If this is a new char, set count to 1
        count[letter] += 1 //else if the char is not new, increment
    )
    return char.map(letter =>
        count[letter] === 1 ? "(" : ")" //if the count is 1, the char becomes '(', else it becomes ')'
    ).join('');
}



console.log(duplicateEncode(test))