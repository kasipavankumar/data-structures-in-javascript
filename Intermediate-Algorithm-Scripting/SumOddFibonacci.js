// Sum all odd Fibonacci Numbers

function generateFibonacciSeries(limit) {
	let sequence = [0, 1]
	let i = 0,
		j = 1,
		f = 1

	for (let k = 2; i + j <= limit; k++) {
		sequence[k] = i + j
		f = i + j
		i = j
		j = f
	}

	return sequence
}

function sumFibs(num) {
	function reducer(accumulator, currentValue) {
		return accumulator + currentValue
	}

	let sequence = generateFibonacciSeries(num).filter(function (number) {
		return number % 2 !== 0
	})

	return sequence.reduce(reducer, 0)
}

console.log(sumFibs(4))
console.log(sumFibs(1000))
console.log(sumFibs(4000000))
