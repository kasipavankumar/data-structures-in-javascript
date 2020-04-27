const spinalCase = require('../SpinalTapCase')
const compareTwoArrays = require('../../common/ArrayEquality')

let testStrings = [
    'This Is Spinal Tap',
    'thisIsSpinalTap',
    'The_Andy_Griffith_Show',
    'Teletubbies say Eh-oh',
    'AllThe-small Things',
]

let expectedOutput = [
    'this-is-spinal-tap',
    'this-is-spinal-tap',
    'the-andy-griffith-show',
    'teletubbies-say-eh-oh',
    'all-the-small-things',
]

describe('Spinal Tap Case test suite', () => {
    test('spinalCase() returns a string on valid input', () => {
        expect(typeof spinalCase('thisis')).toBe('string')
    })

    test('spinalCase() returns undefined on invalid input', () => {
        expect(typeof spinalCase([5, 5, 5])).toBe('undefined')
    })

    test('spinalCase() returns expected output', () => {
        let output = testStrings.map((str) => {
            return spinalCase(str)
        })

        let isWorking = compareTwoArrays(output, expectedOutput)

        expect(isWorking).toBeTruthy()
    })
})
