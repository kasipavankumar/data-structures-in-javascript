const convertToRoman = require('../RomanNumbers')

const numbersToTest = [
    2,
    3,
    4,
    5,
    9,
    12,
    16,
    29,
    44,
    45,
    68,
    83,
    97,
    99,
    400,
    500,
    501,
    649,
    798,
    891,
    1000,
    1004,
    1006,
    1023,
    2014,
    3999,
]
const expectedOutput = [
    'II',
    'III',
    'IV',
    'V',
    'IX',
    'XII',
    'XVI',
    'XXIX',
    'XLIV',
    'XLV',
    'LXVIII',
    'LXXXIII',
    'XCVII',
    'XCIX',
    'CD',
    'D',
    'DI',
    'DCXLIX',
    'DCCXCVIII',
    'DCCCXCI',
    'M',
    'MIV',
    'MVI',
    'MXXIII',
    'MMXIV',
    'MMMCMXCIX',
]

let output = numbersToTest.map(function (num) {
    return convertToRoman(num)
})

describe('Roman numeral converter test suite', () => {
    test('convertToRoman returns a string', () => {
        expect(typeof convertToRoman(2)).toBe('string')
    })

    test('convertToRoman returns NaN when invalid number is passed', () => {
        expect(convertToRoman('invalid')).toBeNaN()
    })

    test('convertToRoman returns expected output', () => {
        let hasToBeTrue =
            output.length === expectedOutput.length &&
            output.every(function (res, index) {
                return res === expectedOutput[index]
            })

        expect(hasToBeTrue).toBeTruthy()
    })
})
