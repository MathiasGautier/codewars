const reverse=str=>
    str.trim().split(' ')
    .map((x,i)=>
    i%2===0
    ?x
    :x.split('').reverse().join(''))
    .join(' ');



console.log(reverse(" Reverse this string, please!"))
