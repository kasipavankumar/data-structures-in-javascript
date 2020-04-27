// Sum all primes

// Generate prime numbers in given range
// using Sieve of Eratosthenes
function generatePrimeNumbers(limit) {
    let prime = []
    let primesInGivenRange = []

    for (let i = 0; i <= limit; ++i) {
        prime[i] = true
    }

    for (let p = 2; p * p <= limit; ++p) {
        if (prime[p]) {
            for (let i = p * p; i <= limit; i += p) {
                prime[i] = false
            }
        }
    }

    for (let i = 2; i <= limit; ++i) {
        if (prime[i]) {
            primesInGivenRange.push(i)
        }
    }

    return primesInGivenRange
}

function sumPrimes(num) {
    return generatePrimeNumbers(num).reduce(function (
        accumulator,
        currentValue
    ) {
        return accumulator + currentValue
    })
}

console.log(sumPrimes(10))
console.log(sumPrimes(977))
