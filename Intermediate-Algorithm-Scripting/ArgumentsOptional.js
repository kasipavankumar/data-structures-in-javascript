// Arguments Optional

function curriedSum(a, func) {
	return function (b) {
		return func(a, b)
	}
}

function sum(a, b) {
	return typeof a === 'number' && typeof b === 'number' ? a + b : undefined
}

function addTogether() {
	let args = Array.prototype.slice.call(arguments)
	if (args.every((num) => typeof num === 'number')) {
		switch (args.length) {
			case 1:
				return curriedSum(args[0], sum)
			case 2:
				return args[0] + args[1]
			default:
				''
		}
	} else {
		return undefined
	}
}

module.exports = addTogether
