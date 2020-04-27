// Intermediate Algorithm Scripting
// Wherefore art thou

function whatIsInAName(collection, source) {
    let keys = Object.keys(source)

    return collection.filter(function (element) {
        if (element.hasOwnProperty(...keys)) {
            let truth = true

            keys.forEach(function (key) {
                if (element[key] !== source[key]) {
                    truth = false
                }
            })

            return truth
        }
    })
}

// Tests
console.log(
    whatIsInAName(
        [
            { first: 'Romeo', last: 'Montague' },
            { first: 'Mercutio', last: null },
            { first: 'Tybalt', last: 'Capulet' },
        ],
        { last: 'Capulet' }
    )
)

console.log(whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 }))

console.log(
    whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {
        apple: 1,
    })
)

console.log(
    whatIsInAName(
        [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],

        { apple: 1, bat: 2 }
    )
)

console.log(
    whatIsInAName(
        [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
        { apple: 1, cookie: 2 }
    )
)

console.log(
    whatIsInAName(
        [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
        { apple: 1, cookie: 2 }
    )
)
