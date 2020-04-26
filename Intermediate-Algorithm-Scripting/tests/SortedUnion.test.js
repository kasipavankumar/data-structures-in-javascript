const uniteUnique = require('../SortedUnion')
const compareTwoArrays = require('../../common/ArrayEquality')

let testArrays = [
	[
		[1, 3, 2],
		[5, 2, 1, 4],
		[2, 1],
	],
	[
		[1, 2, 3],
		[5, 2, 1],
	],
	[
		[1, 2, 3],
		[5, 2, 1, 4],
		[2, 1],
		[6, 7, 8],
	],
]

let expectedOutput = [
	[1, 3, 2, 5, 4],
	[1, 2, 3, 5],
	[1, 2, 3, 5, 4, 6, 7, 8],
]

describe('Sorted Union test suite', () => {
	test('uniteUnique() returns an array on valid input', () => {
		expect(Array.isArray(uniteUnique([1, 3, 2], [2, 1]))).toBeTruthy()
	})

	test('uniteUnique() returns undefined for invalid input', () => {
		expect(typeof uniteUnique('abcd')).toBe('undefined')
	})

	test('uniteUnique() returns expected output', () => {
		let output = testArrays.map((arrays) => {
			return uniteUnique(...arrays)
		})

		output.forEach((arr, index) => {
			expect(arr).toEqual(expect.arrayContaining(expectedOutput[index]))
		})
	})
})
