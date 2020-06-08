// Build Tower
// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

// for example, a tower of 3 floors looks like below

// [
//   '  *  ', 
//   ' *** ', 
//   '*****'
// ]
// and a tower of 6 floors looks like below

// [
//   '     *     ', 
//   '    ***    ', 
//   '   *****   ', 
//   '  *******  ', 
//   ' ********* ', 
//   '***********'
// ]


// function towerBuilder(nFloors) {
// let tower=[];
// for(let i=0; i<nFloors;i++){
// tower.push(
//     " ".repeat(nFloors-i-1)
//     +"*".repeat((i*2)+1)
//     +" ".repeat(nFloors-i-1))
// }
// return tower;
// }

let towerBuilder=nFloors=>{
    return [...Array(nFloors)].map((x,i)=>" ".repeat(nFloors-1-i)+"*".repeat(i*2+1)+" ".repeat(nFloors-1-i))
}




console.log(towerBuilder(6))