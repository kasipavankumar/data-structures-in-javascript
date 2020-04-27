var contacts = [
    {
        firstName: 'Akira',
        lastName: 'Laine',
        number: '0543236543',
        likes: ['Pizza', 'Coding', 'Brownie Points'],
    },
    {
        firstName: 'Harry',
        lastName: 'Potter',
        number: '0994372684',
        likes: ['Hogwarts', 'Magic', 'Hagrid'],
    },
    {
        firstName: 'Sherlock',
        lastName: 'Holmes',
        number: '0487345643',
        likes: ['Intriguing Cases', 'Violin'],
    },
    {
        firstName: 'Kristian',
        lastName: 'Vos',
        number: 'unknown',
        likes: ['JavaScript', 'Gaming', 'Foxes'],
    },
]

function lookUpProfile(name, prop) {
    let foundContact = false

    for (let i = 0; i < contacts.length; i++) {
        let target = contacts[i]

        if (target.firstName === name) {
            if (target.hasOwnProperty(prop)) {
                foundContact = true
                return target[prop]
            } else {
                return 'No such property'
            }
        } else {
            foundContact = false
        }
    }

    if (foundContact == false) {
        return 'No such contact'
    }
}

console.log(lookUpProfile('Akira', 'likes'))
console.log(lookUpProfile('Kristian', 'lastName'))
console.log(lookUpProfile('Sherlock', 'likes'))
console.log(lookUpProfile('Harry', 'likes'))
console.log(lookUpProfile('Bob', 'number'))
console.log(lookUpProfile('Akira', 'address'))
