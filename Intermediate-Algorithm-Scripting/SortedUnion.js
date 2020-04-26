// Sorted Union

function uniteUnique(arr) {
	let args = Array.prototype.slice.call(arguments)

	let allArgumentsAreArray = args.every((arr) => {
		return Array.isArray(arr)
	})

	if (allArgumentsAreArray) {
		let result = []

		args.forEach(function (array) {
			result.push(...array)
		})

		return [...new Set(result)]
	}
}

module.exports = uniteUnique
