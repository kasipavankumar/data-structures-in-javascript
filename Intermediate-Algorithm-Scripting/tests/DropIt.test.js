const dropElements = require('../DropIt')

describe('Drop It test suite', () => {
    test('dropElements([1, 2, 3, 4], (n) => n >= 3) returns [3, 4]', () => {
        expect(dropElements([1, 2, 3, 4], (n) => n >= 3)).toEqual(
            expect.arrayContaining([3, 4])
        )
    })

    test('dropElements([0, 1, 0, 1], (n) => n > 0) returns [1, 0, 1]', () => {
        expect(dropElements([0, 1, 0, 1], (n) => n === 1)).toEqual(
            expect.arrayContaining([1, 0, 1])
        )
    })

    test('dropElements([1, 2, 3], (n) => n > 0) returns [1, 2, 3]', () => {
        expect(dropElements([1, 2, 3], (n) => n > 0)).toEqual(
            expect.arrayContaining([1, 2, 3])
        )
    })

    test('dropElements([1, 2, 3, 4], (n) => n > 5) returns []', () => {
        expect(dropElements([1, 2, 3, 4], (n) => n > 5)).toEqual(
            expect.arrayContaining([])
        )
    })

    test('dropElements([1, 2, 3, 7, 4], (n) => n > 3) returns [7, 4]', () => {
        expect(dropElements([1, 2, 3, 7, 4], (n) => n > 3)).toEqual(
            expect.arrayContaining([7, 4])
        )
    })

    test('dropElements([1, 2, 3, 9, 2], (n) => n > 2) returns [3, 9, 2]', () => {
        expect(dropElements([1, 2, 3, 9, 2], (n) => n > 2)).toEqual(
            expect.arrayContaining([3, 9, 2])
        )
    })
})
