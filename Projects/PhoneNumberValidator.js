// US Phone Number Validator

function hasValidBrackets(str) {
	let splitStr = str.split('')

	// @TODO: Only match brackers if opening bracket is found
	let bracketsCounter = 0

	if (splitStr[0] === '(' && splitStr[splitStr.length - 1] === ')') {
		return false
	}

	splitStr.forEach((char) => {
		if (char === '(' || char === '{' || char === '[') {
			bracketsCounter += 1
		} else if (char === ')' || char === '}' || char === ']') {
			bracketsCounter -= 1
		}
	})

	return bracketsCounter === 0 ? true : false
}

function hasValidCountryCode(str) {
	if (typeof str === 'string') {
		function isCountryCodeValid(countryCode, matcher) {
			return countryCode === matcher ? true : false
		}

		// Has country code.
		if (str.length === 11) {
			let countryCodePattern = /^(-?\d{1,2}?)/g
			let countryCode = str.match(countryCodePattern)
			//let countryCode = str[0]

			return isCountryCodeValid(countryCode[0], '1')
		} else {
			return false
		}
	}
}

function hasSpecialCharacters(str) {
	if (typeof str === 'string') {
		let pattern = /[`!@#$%^&*_+\=\[\]{};':"\\|,.<>\/?~]/gi
		return pattern.test(str)
	}
}

function telephoneCheck(str) {
	if (typeof str === 'string') {
		if (hasValidBrackets(str) && !hasSpecialCharacters(str)) {
			if (str[0] === '-') {
				return false
			} else {
				let cleanStr = str.replace(/[\W]/g, '')

				if (hasValidCountryCode(cleanStr)) {
					return cleanStr.length === 11 ? true : false
				} else {
					return cleanStr.length === 10 ? true : false
				}
			}
		} else {
			return false
		}
	}
}

module.exports = telephoneCheck
