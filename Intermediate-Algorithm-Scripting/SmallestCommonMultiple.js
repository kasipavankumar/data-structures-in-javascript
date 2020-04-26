// Smallest Common Multiple

function fillArray(low, high) {
	if (low < high) {
		let filledArray = []

		for (let i = low; i <= high; ++i) {
			filledArray.push(i)
		}

		return filledArray
	}
}

function gcd(a, b) {
	return !b ? a : gcd(b, a % b)
}

function lcm(a, b) {
	return (a * b) / gcd(a, b)
}

function smallestCommons(arr) {
	if (Array.isArray(arr)) {
		let tempArray = arr.slice()
		tempArray = tempArray.sort(function (a, b) {
			return a - b
		})

		let arrayOfGivenRange = fillArray(tempArray[0], tempArray[1])
		let commonMultiple = tempArray[0]

		arrayOfGivenRange.forEach(function (number) {
			commonMultiple = lcm(commonMultiple, number)
		})

		return commonMultiple
	}

	return undefined
}

module.exports = smallestCommons
