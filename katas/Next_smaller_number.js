// const nextSmallerNumber = ((num => {
//     let arr = num.toString().split('');
//     let arrTwo = [];
//     for (i = 0; i <= num; i++) {
//         arrTwo.push(i)
//     }
//     let arrTwoSplit = arrTwo.map(x => (x.toString()))
//     let arrThree = [];
//     arrTwoSplit.forEach((i) => {
//         (i.split('')).length === arr.length &&
//             arrThree.push(i.split('').filter(e => arr.includes(e)))
//     })
//     let sameLength = arrThree.filter(x => x.length === arr.length)
//     let test=[];
//    sameLength.forEach(x=>{
//     if(([...x].sort().join(''))===([...arr].sort().join(''))){
//         test.push(x)
//     }
// })
//    lastArr= test.map(x=>x.join('')).filter(x=>(x!==arr.join(''))).map(x=>parseInt(x))
//    return Math.max(...lastArr)=== -Infinity ? -1 : Math.max(...lastArr)
// }))

// const nextSmallerNumber = ((num => {
//     let arrNum = num.toString()
//     let arrSameLength = [];
//     for (i = 1; i <= num - 1; i++) {
//         (i.toString().length === arrNum.length) && arrSameLength.push(i)
//     }
//     let possibleRes= arrSameLength.filter(x => [...x.toString().split('')].sort().join('') === [...arrNum.split('')].sort().join(''))
//     // return Math.max(...possibleRes)=== -Infinity ? -1 : Math.max(...possibleRes)
//     return possibleRes.length===0?-1:possibleRes.reduce((a,b)=>b>a?b:a)

// }))

//try the same thing, but with a decreasing loop

const nextSmallerNumber = ((num => {
    let arrNum = num.toString()
    let arrLength = num.toString().length;
  
    let arrSameLength = [];

    for (i = num-1; i >= 0; i--) {
        if(i.toString().length!==arrLength) break
        (i.toString().length===arrLength) && arrSameLength.push(i)
    }
    let possibleRes= arrSameLength.filter(x => [...x.toString().split('')].sort().join('') === [...arrNum.split('')].sort().join(''))
    return Math.max(...possibleRes)=== -Infinity ? -1 : Math.max(...possibleRes)
    // return possibleRes.length===0?-1:possibleRes.reduce((a,b)=>b>a?b:a)
  

}))

console.log(nextSmallerNumber(970))