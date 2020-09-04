let x=["a", "b", "c", "d"];
let y=["a", "c", "d"];

let diff=(x,y)=> x.filter((e) => !y.includes(e));

console.log(diff(x,y))