//template literals
// const firstName = 'Tim';
// const lastName = 'Kellogg';
// console.log('Hello, ' + firstName + ' ' + lastName +  '!')
// console.log(`Hello, ${firstName} ${lastName}, but with template literals!`);

//spread operator
// const array = [4, 8, 15, 16, 23];
// //const arrayCopy = array;
// const arrayCopy = [...array];

// arrayCopy.push(42);

// console.log(array);
// console.log(arrayCopy);


//rest operator
// const numsToSum = [4, 8, 15, 16, 23, 42];

// function add(...nums) {
//     let total = 0;

//     nums.forEach((num) => {
//         console.log(num);
//         total += num;
//     });

//     return total;
// }

// console.log(add(...numsToSum, 1, 2, 3, 4));

//destructuring
const obj = {
    firstName: 'Tim',
    lastName: 'Kellogg',
    age: 27,
    job: 'software dev',
    likesPineapple: true
};

const  person = {...obj};

person.job = 'rodeo clown'

console.log(obj);
console.log(person);
