const fearNotLetter = require('../MissingLetters')
const compareTwoArrays = require('../../common/ArrayEquality')

let testStrings = ['abce', 'ae', 'abcdefghjklmno', 'abcdefghijklmnopqrstuvwxyz']

let expectedOutput = ['d', 'bcd', 'i', undefined]

describe('Missing Letters test suite', () => {
    test('fearNotLetter returns a string for valid input', () => {
        expect(typeof fearNotLetter('abce')).toBe('string')
    })

    test('fearNotLetter returns undefined for invalid input', () => {
        expect(typeof fearNotLetter(123)).toBe('undefined')
    })

    test('fearNotLetter returns expected output', () => {
        let output = testStrings.map(function (str) {
            return fearNotLetter(str)
        })
        let isWorking = compareTwoArrays(output, expectedOutput)

        expect(isWorking).toBeTruthy()
    })

    test('fearNotLetter returns undefined for string without any missing letters', () => {
        expect(fearNotLetter('abcdefghijklmnopqrstuvwxyz')).toBeUndefined()
    })
})
