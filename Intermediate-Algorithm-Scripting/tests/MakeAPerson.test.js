const Person = require('../MakeAPerson')

describe('Make a person test suite', () => {
    let bob = new Person('Bob Ross')

    test('Object.keys(bob).length should return 6.', () => {
        expect(Object.keys(bob).length).toBe(6)
    })

    test('bob instanceof Person', () => {
        expect(bob).toBeInstanceOf(Person)
    })

    test('bob.firstName should return undefined', () => {
        expect(bob.firstName).toBeUndefined()
    })

    test('bob.lastName should return undefined', () => {
        expect(bob.lastName).toBeUndefined()
    })

    test('bob.getFirstName() should return "Bob"', () => {
        expect(bob.getFirstName()).toContain('Bob')
    })

    test('bob.getLastName() should return "Ross"', () => {
        expect(bob.getLastName()).toContain('Ross')
    })
})

describe('Haskell Curry', () => {
    let _bob = new Person('Bob Ross')

    test(`bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell")`, () => {
        _bob.setFirstName('Haskell')
        expect(_bob.getFullName()).toContain('Haskell Ross')
    })

    test(`bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry")`, () => {
        _bob.setlastName('Curry')
        expect(_bob.getFullName()).toContain('Haskell Curry')
    })
})

describe('Haskell Curry', () => {
    let _bob = new Person('Bob Ross')

    test(`bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry")`, () => {
        _bob.setFullName('Haskell Curry')
        expect(_bob.getFullName()).toContain('Haskell Curry')
    })

    test(`bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry")`, () => {
        expect(_bob.getFullName()).toContain('Haskell')
    })

    test(`bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry")`, () => {
        expect(_bob.getLastName()).toContain('Curry')
    })
})
