// Compares two arrays for equality

function compareTwoArrays(firstArray, secondArray) {
	if (Array.isArray(firstArray) && Array.isArray(secondArray)) {
		return (
			firstArray.length === secondArray.length &&
			firstArray.every((element, index) => {
				return element === secondArray[index]
			})
		)
	}
}

module.exports = compareTwoArrays
