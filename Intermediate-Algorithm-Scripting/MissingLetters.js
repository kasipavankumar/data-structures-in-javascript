// Missing Letters

function fearNotLetter(str) {
	if (typeof str === 'string') {
		let missingAlphabetRange = str.split('')
		let asciiStart = missingAlphabetRange[0].charCodeAt()
		let asciiEnd = missingAlphabetRange[
			missingAlphabetRange.length - 1
		].charCodeAt()
		let fullAlphabets = ''

		for (let i = asciiStart; i <= asciiEnd; ++i) {
			fullAlphabets += String.fromCharCode(i)
		}

		let result = fullAlphabets.split('').filter(function (char) {
			return !missingAlphabetRange.includes(char)
		})

		return result.length > 0 ? result.join('') : undefined
	}

	return undefined
}

// Tests
/* console.log(fearNotLetter('abce'))
console.log(fearNotLetter('ae'))
console.log(fearNotLetter('abcdefghjklmno'))
console.log(fearNotLetter('abcdefghijklmnopqrstuvwxyz')) */

module.exports = fearNotLetter
