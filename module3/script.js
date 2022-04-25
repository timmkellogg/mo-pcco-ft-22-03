const people = [
    {
        firstName: "Tim",
        favColor: 'green',
        likesPineapple: true
    },
    {
        firstName: 'Melissa',
        favColor: 'purple',
        likesPineapple: false
    },
    {
        firstName: 'Win',
        favColor: 'black',
        likesPineapple: false
    },
    {
        firstName: 'David',
        favColor: 'red',
        likesPineapple: false
    },
    {
        firstName: 'Patrick',
        favColor: 'blue',
        likesPineapple: true
    }
];

console.log(people);

const newPeople = people.slice();

newPeople.push({
    firstName: 'Rupert',
    favColor: 'red',
    likesPineapple: true
})

console.log(people);
console.log(newPeople);

people.sort((a, b) => {
    if(a.firstName < b.firstName) {
        return -1;
    } else if (a.firstName > b.firstName) {
        return 1;
    }

    return 0;
})

// const months = ['afafaf', 'aaaaaaaaaaaaaaaaaaaaa', 'ccc', 'a'];
// months.sort((a, b) => {
//     if( a.length < b.length ) {
//         return -1;
//     } else {
//         return 1;
//     }
// }).reverse();
// console.log(months);


const likesList = document.querySelector('#likes-pineapple')
const dislikesList = document.querySelector('#dislikes-pineapple')

for (let i = 0; i < people.length; i++) {
    const newElement = document.createElement('li');
    newElement.style.backgroundColor = people[i].favColor;
    newElement.style.color = 'white';
    newElement.textContent = people[i].firstName;

    if (people[i].likesPineapple) {
        likesList.append(newElement);
    } else {
        dislikesList.append(newElement);
    }

}


