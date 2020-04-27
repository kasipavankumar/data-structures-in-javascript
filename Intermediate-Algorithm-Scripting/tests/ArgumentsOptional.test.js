const addTogether = require('../ArgumentsOptional')

describe('Arguments optional test suite', () => {
    test('addTogether(2, 3) should return 5.', () => {
        expect(addTogether(2, 3)).toBe(5)
    })

    test('addTogether(2)(3) should return 5.', () => {
        expect(addTogether(2)(3)).toBe(5)
    })

    test("addTogether('http://bit.ly/IqT6zt') should return undefined.", () => {
        expect(addTogether('http://bit.ly/IqT6zt')).toBeUndefined()
    })

    test('addTogether(2, "3") should return undefined.', () => {
        expect(addTogether(2, '3')).toBeUndefined()
    })

    test('addTogether(2)([3]) should return undefined.', () => {
        expect(addTogether(2)([3])).toBeUndefined()
    })
})
