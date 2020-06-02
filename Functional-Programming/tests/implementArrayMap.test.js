var myMap = require('../implementArrayMap')

describe('Implement map in a prototype test suite.', () => {
    test('Array.prototype.myMap returns an array.', () => {
        const double = [1, 2, 3].myMap((item) => item * 2)
        expect(Array.isArray(double)).toBeTruthy()
    })

    test('Array.prototype.myMap applies the callback correctly.', () => {
        const halfMap = [2, 3, 4, 5, 6, 7, 8].map((item) => item / 2)
        const halfMyMap = [2, 3, 4, 5, 6, 7, 8].myMap((item) => item / 2)

        expect(halfMyMap).toEqual(halfMap)
    })

    test('Array.prototype.myMap throws TypeError for invalid callback.', () => {
        const callMyMap = () => {
            return [1, 2, 3].myMap('callback')
        }

        expect(callMyMap).toThrowError(/not a function/)
    })
})
