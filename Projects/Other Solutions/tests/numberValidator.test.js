const telephoneCheck = require('../numberValidator')

let testStringsAssertTrue = [
    '555-555-5555',
    '1 555-555-5555',
    '1 (555) 555-5555',
    '5555555555',
    '555-555-5555',
    '(555)555-5555',
    '1 (555)555-555',
    '1 555 555 5555',
    '1 456 789 4444',
]

let testStringsAssertFalse = [
    '555-5555',
    '5555555',
    '1 555)555-5555',
    '123**&!!asdf#',
    '55555555',
    '(6054756961)',
    '2 (757) 622-7382',
    '-1 (757) 622-7382',
    '2 757 622-7382',
    '10 (757) 622-7382',
    '27576227382',
    '(275)76227382',
    '2 (757)622-7382',
    '555)-555-5555',
    '(555-555-5555',
    '(555)5(55?)-5555',
]

describe('Phone Number Validator test suite', () => {
    test('telephoneCheck() returns a boolean value on valid input', () => {
        expect(typeof telephoneCheck('555-555-5555')).toBe('boolean')
    })

    test('telephoneCheck() returns undefined for invalid input', () => {
        expect(typeof telephoneCheck([1, 2, 3])).toBe('undefined')
    })

    test('telephoneCheck() returns true for all valid phone numbers', () => {
        let output = testStringsAssertTrue.map((num) => {
            return telephoneCheck(num)
        })

        let isWorking = output.every((val) => {
            return typeof val === 'boolean' && val === true
        })

        expect(isWorking).toBeTruthy()
    })

    test('telephoneCheck() returns false for all invalid phone numbers', () => {
        let output = testStringsAssertFalse.map((num) => {
            return telephoneCheck(num)
        })

        let isWorking = output.every((val) => {
            return typeof val === 'boolean' && val === false
        })

        expect(isWorking).toBeTruthy()
    })
})