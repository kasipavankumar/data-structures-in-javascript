// Roman Numeral Converter

function convertToRoman(num) {
	if (isNaN(num)) {
		return NaN
	}

	// Divide the number based on place value
	function splitNumber(n) {
		let wholePart = Math.floor(n)
		let decimalPart = n - wholePart
		let parts = []
		let multiplier = 1

		while (wholePart > 0) {
			let result = wholePart % 10

			if (result > 0) {
				parts.unshift(result * multiplier)
			}

			wholePart = Math.floor(wholePart / 10)
			multiplier *= 10
		}

		if (decimalPart) {
			parts.push(decimalPart)
		}

		return parts
	}

	let symbols = {
		1: 'I',
		2: 'II',
		3: 'III',
		4: 'IV',
		5: 'V',
		6: 'VI',
		7: 'VII',
		8: 'VIII',
		9: 'IX',
		10: 'X',
		20: 'XX',
		30: 'XXX',
		40: 'XL',
		50: 'L',
		60: 'LX',
		70: 'LXX',
		80: 'LXXX',
		90: 'XC',
		100: 'C',
		200: 'CC',
		300: 'CCC',
		400: 'CD',
		500: 'D',
		600: 'DC',
		700: 'DCC',
		800: 'DCCC',
		900: 'CM',
		1000: 'M',
		2000: 'MM',
		3000: 'MMM',
		4000: 'MMMM',
	}

	let split = splitNumber(num)
	let res = []

	split.forEach(function (num) {
		res.push(symbols[num])
	})

	return res.join('')
}

/* let { log } = console

log(convertToRoman(7))
log(convertToRoman(36))
log(convertToRoman(29))
log(convertToRoman(45))
log(convertToRoman(298))
log(convertToRoman(1984))
log(convertToRoman(2014))
log(convertToRoman(3999)) */

module.exports = convertToRoman
