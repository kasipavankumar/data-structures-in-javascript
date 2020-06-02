const { add, remove, bookList } = require('../refactorGlobalVariables')
const compareTwoArrays = require('../../common/ArrayEquality')

describe('Refactor global variables out of functions test suites', () => {
    const testBooks = [
        'A Brief History of Time',
        'On The Electrodynamics of Moving Bodies',
    ]

    const expectedNewBookList = [
        'The Hound of the Baskervilles',
        'On The Electrodynamics of Moving Bodies',
        'Philosophiæ Naturalis Principia Mathematica',
        'Disquisitiones Arithmeticae',
        'A Brief History of Time',
    ]

    const expectedNewerBookList = [
        'The Hound of the Baskervilles',
        'Philosophiæ Naturalis Principia Mathematica',
        'Disquisitiones Arithmeticae',
    ]

    const expectedNewestBookList = [
        'The Hound of the Baskervilles',
        'Philosophiæ Naturalis Principia Mathematica',
        'Disquisitiones Arithmeticae',
        'A Brief History of Time',
    ]

    test(`add(bookList, "${testBooks[0]}") should return a new array (bookList) with new book added.`, () => {
        const newBookList = add(bookList, testBooks[0])

        expect(Array.isArray(newBookList)).toBeTruthy()
        expect(newBookList.includes(testBooks[0])).toBeTruthy()
        expect(compareTwoArrays(newBookList, expectedNewBookList)).toBeTruthy()
    })

    test(`remove(bookList, "${testBooks[1]}") should return a new array (bookList) with "${bookList[1]}" removed.`, () => {
        const newerBookList = remove(bookList, testBooks[1])

        expect(Array.isArray(newerBookList)).toBeTruthy()
        expect(newerBookList.includes(testBooks[1])).toBeFalsy()
        expect(
            compareTwoArrays(newerBookList, expectedNewerBookList)
        ).toBeTruthy()
    })

    test(`remove(add(bookList, "${testBooks[0]}"), "${testBooks[1]}") should return a new array.`, () => {
        const newestBookList = remove(add(bookList, testBooks[0]), testBooks[1])

        expect(Array.isArray(newestBookList)).toBeTruthy()
        expect(newestBookList.includes(testBooks[1])).toBeFalsy()
        expect(
            compareTwoArrays(newestBookList, expectedNewestBookList)
        ).toBeTruthy()
    })
})
