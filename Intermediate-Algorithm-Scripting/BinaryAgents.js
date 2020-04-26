let binaryAgent = function (str) {
	let splitted = str.split(' ')
	let result = []

	splitted.forEach(function (binaryNumber) {
		result.push(String.fromCharCode(Number.parseInt(binaryNumber, 2)))
	})

	return result.join('')
}

module.exports = binaryAgent
