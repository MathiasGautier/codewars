const array = ['John', 'Paul', 'George', 'Ringo', 'John'];

// The indexOf method returns the first index it finds of the provided element from our array.
console.log(array.filter((item, index) => array.indexOf(item) === index))

//set is a data object that stores only unique values
//[...] spread the values in a new array
console.log([...new Set(array)])


//create a dictionnary to store the items and check if it already exist and print the keys
let removeDups = ((array) => {
    let unique = {};
    array.forEach(item => (!unique[item]) && (unique[item] = 1))
    return Object.keys(unique)
})
console.log(removeDups(array))