// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

// ##Examples :

// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

const test = "2 4 7 8 10";
const test2 = "1 2 1 1";
const test3 ="16 14 19 6"

function iqTest(numbers) {
  let count = {};
  let arr = numbers.split(' ')
  arr.forEach(numb=>
    numb%2===0 ? count[numb] = "even" :
    count[numb] = "odd" 
  )
  let evenNumb = arr.filter(numb=>
    count[numb]==='even' && numb
  )
  let oddNumb = arr.filter(numb=>
    count[numb]==='odd' && numb
  )
 return oddNumb.length===1? arr.indexOf(oddNumb.toString())+1 :
 arr.indexOf(evenNumb.toString())+1
}

console.log(iqTest(test2))