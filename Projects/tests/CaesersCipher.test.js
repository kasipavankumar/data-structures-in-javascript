const rot13 = require('../CeasersCipher')

const testStrings = [
    'SERR PBQR PNZC',
    'SERR CVMMN!',
    'SERR YBIR?',
    'GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.',
]

const expectedOutput = [
    'FREE CODE CAMP',
    'FREE PIZZA!',
    'FREE LOVE?',
    'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.',
]

describe('Caesers Cipher test suite', () => {
    test('rot13 returns a string', () => {
        expect(typeof rot13('SERR')).toBe('string')
    })

    test('rot13 returns undefined for invalid input', () => {
        expect(typeof rot13(123)).toBe('undefined')
    })

    test('rot13 returns expected output', () => {
        let output = testStrings.map(function (str) {
            return rot13(str)
        })

        let isWorking =
            testStrings.length === expectedOutput.length &&
            output.every(function (str, index) {
                return str === expectedOutput[index]
            })

        expect(isWorking).toBeTruthy()
    })
})
