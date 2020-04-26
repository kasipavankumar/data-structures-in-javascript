// Pig Latin

function translatePigLatin(str) {
	if (typeof str === 'string') {
		// Pattern to match consonants & vowels from string
		let consonantsPattern = /^\s*[^aieou]+(?=\w)/gi
		let vowelPattern = /[aeiou]/gi

		// Split string into an array
		let targetString = str.toLowerCase()

		// If string starts with an consonant
		if (
			targetString.search(consonantsPattern) !== -1 &&
			targetString.search(vowelPattern) !== -1
		) {
			// Consonants extracted from string
			let consonantsInString = targetString.match(consonantsPattern)
			let stringToAppend = 'ay'

			// Append "ay" to the consonant
			consonantsInString.push(stringToAppend)
			consonantsInString = consonantsInString.join('')

			let translatedString = targetString
				.split(consonantsPattern)
				.filter(function (word) {
					return word.length !== 0
				})

			translatedString.push(consonantsInString)

			return translatedString.join('')
		} else if (targetString.search(/[aeiou]/gi) === -1) {
			let splitString = targetString.split('')
			splitString.push(...'ay'.split(''))

			return splitString.join('')
		} else {
			let stringToAppend = 'way'.split('')
			let translatedString = targetString.split('')

			// Append "way" to string
			translatedString.push(...stringToAppend)

			return translatedString.join('')
		}
	}

	return undefined
}

// Tests
/* console.log(translatePigLatin('consonant'))
console.log(translatePigLatin('paragraphs'))
console.log(translatePigLatin('glove'))
console.log(translatePigLatin('eight'))
console.log(translatePigLatin('algorithm'))
console.log(translatePigLatin('rhythm'))
console.log(translatePigLatin('schwartz')) */

module.exports = translatePigLatin
