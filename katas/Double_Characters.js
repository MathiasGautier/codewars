// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// doubleChar("String") ==> "SSttrriinngg"

// doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

// doubleChar("1234!_ ") ==> "11223344!!__  "


function doubleChar(str) {
    let splitStr=str.split('');
    let newString="";
    for(let i=0; i<splitStr.length; i++){
    newString+=(splitStr[i].repeat(2));}
    return newString;
  } 