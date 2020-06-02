const { ratings } = require('../useMapToExtractData')
const compareArrays = require('../../common/ArrayEquality')

describe('Use map to extract data from arrays test suite.', () => {
    test('ratings is an array.', () => {
        expect(Array.isArray(ratings)).toBeTruthy()
    })

    test('ratings is same as the expected result.', () => {
        const expectedResult = [
            { title: 'Inception', rating: '8.8' },
            { title: 'Interstellar', rating: '8.6' },
            { title: 'The Dark Knight', rating: '9.0' },
            { title: 'Batman Begins', rating: '8.3' },
            { title: 'Avatar', rating: '7.9' },
        ]

        expect(ratings).toEqual(expectedResult)
    })
})
