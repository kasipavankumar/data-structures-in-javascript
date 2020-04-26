const orbitalPeriod = require('../MapTheDebris')

describe('Map the Debris test suite', () => {
	test('orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}]', () => {
		expect(
			orbitalPeriod([
				{
					name: 'sputnik',
					avgAlt: 35873.5553,
				},
			])
		).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					name: 'sputnik',
					orbitalPeriod: 86400,
				}),
			])
		)
	})

	test('orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])', () => {
		expect(
			orbitalPeriod([
				{ name: 'iss', avgAlt: 413.6 },
				{ name: 'hubble', avgAlt: 556.7 },
				{ name: 'moon', avgAlt: 378632.553 },
			])
		).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					name: 'iss',
					orbitalPeriod: 5557,
				}),
				expect.objectContaining({
					name: 'hubble',
					orbitalPeriod: 5734,
				}),
				expect.objectContaining({
					name: 'moon',
					orbitalPeriod: 2377399,
				}),
			])
		)
	})
})
