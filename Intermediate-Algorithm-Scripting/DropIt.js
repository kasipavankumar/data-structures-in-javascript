// Drop it

function test(actualValue, expectedValue) {
    if (Array.isArray(actualValue) && Array.isArray(expectedValue)) {
        let { log } = console
        let isSame =
            actualValue.length == expectedValue.length &&
            expectedValue.every(function (item, index) {
                return item === actualValue[index]
            })

        isSame
            ? log(expectedValue, '===', actualValue, '-', '✔️')
            : log(expectedValue, '!==', actualValue, '-', '❌')
    }
}

function dropElements(arr, func) {
    let index = arr.indexOf(arr.find(func))
    return index !== -1 ? arr.slice(index) : []
}

// Tests
/* test(
	dropElements([1, 2, 3, 4], function (n) {
		return n >= 3
	}),
	[3, 4]
)

test(
	dropElements([0, 1, 0, 1], function (n) {
		return n === 1
	}),
	[1, 0, 1]
)
test(
	dropElements([1, 2, 3], function (n) {
		return n > 0
	}),
	[1, 2, 3]
)
test(
	dropElements([1, 2, 3, 4], function (n) {
		return n > 5
	}),
	[]
)
test(
	dropElements([1, 2, 3, 7, 4], function (n) {
		return n > 3
	}),
	[7, 4]
)
test(
	dropElements([1, 2, 3, 9, 2], function (n) {
		return n > 2
	}),
	[3, 9, 2]
) */

module.exports = dropElements
