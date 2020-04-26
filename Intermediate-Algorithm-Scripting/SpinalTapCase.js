// Spinal Tap Case

function spinalCase(str) {
	if (typeof str === 'string') {
		let trimmedStr = str
			.replace(/([A-Z])/g, ' $1')
			.trim()
			.toLowerCase()
			.split(/[^A-Za-z0-9-]+/gim)

		let spinalCased = trimmedStr.filter(function (word) {
			return word.length !== 0
		})

		return spinalCased.join('-')
	}

	return undefined
}

module.exports = spinalCase
