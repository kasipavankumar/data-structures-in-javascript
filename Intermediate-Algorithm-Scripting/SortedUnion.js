// Sorted Union

function uniteUnique(arr) {
	let args = Array.prototype.slice.call(arguments)

	let allArgumentsAreArray = args.every((arr) => {
		return Array.isArray(arr)
	})

	if (allArgumentsAreArray) {
		let flattenArgs = args.flat()
		return [...new Set(flattenArgs)]
	}

	return undefined
}

module.exports = uniteUnique
