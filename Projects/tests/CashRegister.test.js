const checkCashRegister = require('../CashRegister')
const { testData, expectedResults } = require('./data/CashRegister.data')

describe('Cash Register test suite', () => {
	test('checkCashRegister() returns an object on valid input', () => {
		const actual = checkCashRegister(...testData[0])

		expect(typeof actual).toBe('object')
	})

	test('checkCashRegister() returns undefined on invalid input', () => {
		expect(typeof checkCashRegister('Hi', 'Hello', 'Wrong')).toBe('undefined')
	})

	test('checkCashRegister() returns expected output', () => {
		let output = testData.map((arr) => {
			return checkCashRegister(...arr)
		})

		if (output.length === expectedResults.length) {
			output.forEach((out, index) => {
				expect(out).toMatchObject(expectedResults[index])
			})
		}
	})
})
