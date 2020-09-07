// const titleCase = (title, minorWords) => {
//     let arrStrTwo;
//     let arrStrOne
//     title===""?  arrStrOne='' : arrStrOne = title.toLowerCase().split(" ");
//     !minorWords? arrStrTwo='' : arrStrTwo = minorWords.toLowerCase().split(" ");

//     let resOne = [];
//     for (i = 0; i < arrStrOne.length; i++) {
//       resOne = arrStrOne.map((x) => x.split("")[0].toUpperCase() + x.slice(1));
//     }

//     return resOne
//       .map((x, i) => {
//         if (arrStrTwo.includes(x.toLowerCase())) {
//           if (i !== 0) {
//             x = x.toLowerCase();
//           }
//         }
//         return x;
//       })
//       .join(" ");

// };

const titleCase = (title, minorWords) => {
  let strTwo;
minorWords===undefined ? strTwo="" : strTwo=minorWords
 return title === ""
    ? title
    : title
        .toLowerCase()
        .split(" ")
        .map((letter) => letter[0].toUpperCase() + letter.slice(1))
        .map((word, index) =>
          strTwo.toLowerCase().split(" ").includes(word.toLowerCase())
            ? index === 0
              ? word
              : word.toLowerCase()
            : word
        )
        .join(" ");
};

console.log(titleCase("the king", "is and he"));
