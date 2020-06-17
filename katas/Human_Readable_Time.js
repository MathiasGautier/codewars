// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

let humanReadable=seconds=>{
let formatter=num=>num<10?"0"+num : num; //format the value so it adds a 0 ate the begining if it has only one number
let SS= seconds%60; // return only values inferior to 60
let MM= Math.floor((seconds/60)%60); //return value divided by 60 and inferior to 60
let HH= Math.floor(seconds/3600);
console.log(MM)
return(formatter(HH)+":"+formatter(MM)+":"+formatter(SS))
}

console.log(humanReadable(111111))