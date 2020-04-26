const smallestCommons = require('../SmallestCommonMultiple')
const compareTwoArrays = require('../../common/ArrayEquality')

let testArrays = [
	[1, 5],
	[5, 1],
	[2, 10],
	[1, 13],
]

let expectedOutput = [60, 60, 2520, 360360]

describe('Smallest Common Multiples test suite', () => {
	test('smallestCommons() returns a number for valid input', () => {
		expect(typeof smallestCommons([1, 3])).toBe('number')
	})

	test('smallestCommons() returns a undefined for invalid input', () => {
		expect(typeof smallestCommons('[1, 3]')).toBe('undefined')
	})

	test('smallestCommonns() returns expected output', () => {
		let output = testArrays.map((arr) => {
			return smallestCommons(arr)
		})

		let isWorking = compareTwoArrays(output, expectedOutput)

		expect(isWorking).toBeTruthy()
	})
})
