const palindrome = require('../PalindromeChecker')

describe('Palindrome Checker test suite', () => {
	let palindromes = [
		'racecar',
		'RaceCar',
		'race CAR',
		'2A3*3a2',
		'2A3 3a2',
		'2_A3*3#A2',
		'eye',
		'_eye',
		'A man, a plan, a canal. Panama',
		'never odd or even',
		'My age is 0, 0 si ega ym',
		'0_0 (: /- :) 0-0',
	]
	let notPalindromes = [
		'not a palindrome',
		'nope',
		'almostomla',
		'1 eye for of 1 eye.',
		'five|_/|four',
	]

	test('Returns true for all the palindromes', () => {
		let hasToBeTrue = false

		hasToBeTrue = palindromes.every(function (str) {
			return palindrome(str)
		})

		expect(hasToBeTrue).toBeTruthy()
	})

	test('Returns false for all the non palindromes', () => {
		let hasToBeFalse = true

		hasToBeFalse = notPalindromes.every(function (str) {
			return palindrome(str)
		})

		expect(hasToBeFalse).toBeFalsy()
	})
})
