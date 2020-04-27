// Steamroller

function steamrollArray(arr) {
    function getDepth(arr) {
        return Array.isArray(arr) ? 1 + Math.max(...arr.map(getDepth)) : 0
    }

    function result(arr, depth) {
        return depth > 0
            ? arr.reduce(
                  (acc, val) =>
                      acc.concat(
                          Array.isArray(val) ? result(val, depth - 1) : val
                      ),
                  []
              )
            : arr.slice()
    }

    let depth = getDepth(arr)

    return result(arr, depth)
}

function test(expectedValue, actualValue) {
    if (Array.isArray(actualValue) && Array.isArray(expectedValue)) {
        let { log } = console
        let isSame =
            actualValue.length == expectedValue.length &&
            expectedValue.every(function (item, index) {
                return item === actualValue[index]
            })

        isSame
            ? log(
                  `${JSON.stringify(expectedValue)} = ${JSON.stringify(
                      actualValue
                  )}: Passed ✔️`
              )
            : log(
                  `${JSON.stringify(expectedValue)} ≠ ${JSON.stringify(
                      actualValue
                  )}: Failed ❌`
              )
    }
}

// Tests
test(steamrollArray([[['a']], [['b']]]), ['a', 'b'])
test(steamrollArray([1, [2], [3, [[4]]]]), [1, 2, 3, 4])
test(steamrollArray([1, [], [3, [[4]]]]), [1, 3, 4])
test(steamrollArray([1, {}, [3, [[4]]]]), [1, {}, 3, 4])
