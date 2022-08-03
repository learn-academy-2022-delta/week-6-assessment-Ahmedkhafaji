// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

const { number, array } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

describe('capLetter', () => {
  it ("name capitalize", () => {
     const people = ([
      "Ford Prefect is a hitchhiker.",
      "Zaphod Beeblebrox is president of the galaxy.",
      "Arthur Dent is a radio employee."
    ]);
  })
   })
  
   //ReferenceError: capLetter is not defined

// b) Create the function that makes the test pass.

// pseudo code;
//create a function that takes in name and occupation 
// use .map to interate through name 
// use .split to break name into two own words to be able to interate through each one seperatly
//create var for first name called firstNam and use .charAt to be able to captilize first letter
//create var for last name called lastNam and use .charAt to be able to captilize first letter
// return new string 

// this is my first try I wasnt sure how to appraoch but I wanted to feel out how i would route my way.
// i realized if the problem had just one array with a sentence then  this approach would make sense, but this problem needs more than that. 
// const capLetter = (str) => {
// var people = str.split(" ");
// return people.map(people => people[0].toUpperCase() + people.slice(1))
// }

// this is a better and more oriented appraoch which makes sense since the problem has more into it. 

const capLetter = () => {
  return people.map(letter => {
    let name = letter.name.split(" ")
    let firstName = name[0].charAt(0).toUpperCase() + name[0].slice(1);
    var lastName = name[1].charAt(0).toUpperCase() + name[1].slice(1);
    return `${firstName} ${lastName} is ${letter.occupation}`;
  }
  )
}

// output 
//  PASS  ./code-challenges.test.js
// capLetter
// ✓ name capitalize







// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
 const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]


describe("remains", () => {
  it ("returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]
    expect(remains(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(remains(hodgepodge2)).toEqual([ 2, 1, -1 ])
})
})
    //output
   // ReferenceError: remains is not defined







// b) Create the function that makes the test pass.


//pseudo code
// create a function called remains
// remains takes an array and filters only numbers(use .filter)
// then whe there is only numbers in remains 
// iterate again and return the sum of all the numbers cubed. (use .map) also (use % 3)
// produce new arr

// first try
// it was getting confusing trying to put it all togther but with some more google research on how to  right syntax for both methods i was able to put it togther on the second try. but i wouldnt be able go that far on my second try if i didnt look things up.

// const remains = (arr) => {
//   let arr = arr.filter(value => {typeof value === 'number'})
//    (arr.map(value => value % 3))
//   }

// second try 

const remains = (array) =>  
array.filter(value => typeof value === 'number').map(value => value % 3)
  
  
//output
//PASS  ./code-challenges.test.js
// remains
// ✓ returns an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)




// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe("cubedNums", () => {
  it("returns the sum of all the numbers cubed", () => {
    expect(cubedNums(cubeAndSum1)).toEqual(99);
    expect(cubedNums(cubeAndSum2)).toEqual(1125);
  })
})

//output 
//ReferenceError: cubedNums is not defined


// b) Create the function that makes the test pass.


// first try always helps but I spend too much time trying to fixing it so i gave up here. but it helps me see the methods i use so when i go on my second try i already have my methods i just need to take a different appoach. if 
// const cubedNums = [array] => {
//  let sum = 0;
//  for (let i = 0; i < cubedNums.length; i++) 
//   sum += numbers[i]  
//   return sum **3
 
// }



//second try 
// const cubedNums = (n) => {
//   let sumn = 0;

//   for (let i = 1; i < n.length; i++) {
//     sumn += i **3;
//   }
//   return sumn;
// }

// ok i get how this works but i really cant get it to work i am doig a lot fo reaseach regarding this but i just want to do it on my own i cant, thing is there is too many way to get to a problem that is why i get mixed up

//third try
// function cubedNums (n)  {
//   let sumn = 0;

//   for (let i = 0; i < n.length; i++) {
//     let addedSum = n[i];
//     sumn += addedSum;
//   }
//   return sumn;
// }



// am try the approach that is the same as problem 2 for this problm 
//pseudo code
//Create a function named cubedNums
// takes in an array
// use .map to iterate
// cube all vales in array using var number 
//.redue method to add up the numbers

const cubedNums = (array) => {
  return array.map(number => number ** 3)
  .reduce((a, b) => a + b);
}

// i was able to get thru half way of the problem but the reduce part i had to look up find and plug but what scares me is if im in an interview i will end up freezing at that point. 


















