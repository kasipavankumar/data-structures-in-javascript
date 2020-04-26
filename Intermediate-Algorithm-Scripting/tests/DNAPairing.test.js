const pairElement = require('../DNAPairing')

test('pairElements returns an array of arrays', () => {
	let output = pairElement('GCG')
	let outputContainsArrays = true

	if (Array.isArray(output) && output.length > 0) {
		output.every(function (each) {
			return Array.isArray(each)
		})
	}

	expect(outputContainsArrays).toBeTruthy()
})

describe('DNA Pairing test suite', () => {
	test(`pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]`, () => {
		let expectedArray = [
			['A', 'T'],
			['T', 'A'],
			['C', 'G'],
			['G', 'C'],
			['A', 'T'],
		]
		expect(pairElement('ATCGA').map((each) => each)).toEqual(
			expectedArray.map((each) => each)
		)
	})

	test(`pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]`, () => {
		let expectedArray = [
			['T', 'A'],
			['T', 'A'],
			['G', 'C'],
			['A', 'T'],
			['G', 'C'],
		]
		expect(pairElement('TTGAG').map((each) => each)).toEqual(
			expectedArray.map((each) => each)
		)
	})

	test(`pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]`, () => {
		let expectedArray = [
			['C', 'G'],
			['T', 'A'],
			['C', 'G'],
			['T', 'A'],
			['A', 'T'],
		]
		expect(pairElement('CTCTA').map((each) => each)).toEqual(
			expectedArray.map((each) => each)
		)
	})
})
