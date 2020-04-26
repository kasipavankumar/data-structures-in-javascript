// Map the Debris

function orbitalPeriod(arr) {
	var GM = 398600.4418
	var earthRadius = 6367.4447

	function calculateOrbitalPeriod(avgAlt) {
		return Math.round(
			2 * Math.PI * Math.sqrt(Math.pow(avgAlt + earthRadius, 3) / GM)
		)
	}

	var result = arr.map(function (each, index) {
		let orbitalPeriod = calculateOrbitalPeriod(each['avgAlt'])
		return {
			name: each['name'],
			orbitalPeriod: orbitalPeriod,
		}
	})

	return result
}

// Tests
// Uncomment these to test in your environment

/* console.log(
	orbitalPeriod([
		{
			name: 'sputnik',
			avgAlt: 35873.5553,
		},
	])
)

console.log(
	orbitalPeriod([
		{ name: 'iss', avgAlt: 413.6 },
		{ name: 'hubble', avgAlt: 556.7 },
		{ name: 'moon', avgAlt: 378632.553 },
	])
) */

module.exports = orbitalPeriod
