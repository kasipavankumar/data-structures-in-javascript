function rangeOfNumbers(start, end) {
    if (start > end) {
        return []
    } else {
        const array = rangeOfNumbers(start + 1, end)
        array.unshift(start)
        return array
    }
}

console.log(rangeOfNumbers(6, 9))
