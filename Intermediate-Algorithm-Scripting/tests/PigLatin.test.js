const translatePigLatin = require('../PigLatin')
const compareTwoArrays = require('../../common/ArrayEquality')

let testStrings = [
    'consonant',
    'paragraphs',
    'glove',
    'eight',
    'algorithm',
    'rhythm',
    'schwartz',
]

let expectedOutput = [
    'onsonantcay',
    'aragraphspay',
    'oveglay',
    'eightway',
    'algorithmway',
    'rhythmay',
    'artzschway',
]

describe('Pig Latin test suite', () => {
    test('translatePigLatin() returns string on valid input', () => {
        expect(typeof translatePigLatin('glove')).toBe('string')
    })

    test('translatePigLatin() returns undefined on invalid input', () => {
        expect(typeof translatePigLatin(123)).toBe('undefined')
    })

    test('translatePigLatin() returns expected output on valid input', () => {
        let output = testStrings.map((str) => {
            return translatePigLatin(str)
        })

        let isWorking = compareTwoArrays(output, expectedOutput)

        expect(isWorking).toBeTruthy()
    })
})
