// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
    //...
      let alphabet = ("abcdefghijklmnopqrstuvwxyz").split('');
    return alphabet.every(x=> string.toLowerCase().includes(x))
  }

const isPangramTwo=(str)=>{
    const alph="abcdefghijklmnopqrstuvwxyz".split('');
    const arrStr=str.toLowerCase().split('').filter(x=>x!==" " && x!==".");

   //check  if there are more than one letter from the alphabet missing
  return alph.filter(e=>!arrStr.includes(e)).length===0?true:false
}