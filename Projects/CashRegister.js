const MESSAGES = {
	1: 'INSUFFICIENT_FUNDS',
	2: 'OPEN',
	3: 'CLOSED',
}

let denom = [
	{ name: 'ONE HUNDRED', val: 100.0 },
	{ name: 'TWENTY', val: 20.0 },
	{ name: 'TEN', val: 10.0 },
	{ name: 'FIVE', val: 5.0 },
	{ name: 'ONE', val: 1.0 },
	{ name: 'QUARTER', val: 0.25 },
	{ name: 'DIME', val: 0.1 },
	{ name: 'NICKEL', val: 0.05 },
	{ name: 'PENNY', val: 0.01 },
]

/**
 * @description Computes whether the drawer has sufficient cash.
 * @param {any[]} cid - Cash in drawer.
 * @param {number} change - Change to be returned.
 * @returns {string} string stating availability of the cash.
 */
function cashInDrawerSufficient(cid, change) {
	if (Array.isArray(cid) && typeof change === 'number') {
		let totalCash = cid.reduce((accumulator, currentValue) => {
			return accumulator + currentValue[1]
		}, 0)

		if (totalCash === change) {
			return MESSAGES[3]
		} else if (totalCash > change) {
			return MESSAGES[2]
		} else if (totalCash < change) {
			return MESSAGES[1]
		}
	}
}

/**
 * @param {any[]} cid - Cash in drawer
 * @param {number} change - Change to be returned
 * @returns {any[]|string} The change to be handed over to customer
 */
function processChange(cid, change) {
	if (Array.isArray(cid) && typeof change === 'number') {
		let cidObject = cid.reduce(
			(result, [key, value]) => Object.assign(result, { [key]: value }),
			{}
		)
		let _change = change

		let returnChange = denom.reduce((accumulator, current) => {
			let value = 0

			while (cidObject[current.name] > 0 && _change >= current.val) {
				_change -= current.val
				cidObject[current.name] -= current.val
				value += current.val
				_change = Math.round(_change * 100) / 100
			}

			if (value > 0) {
				accumulator.push([current.name, value])
			}

			return accumulator
		}, [])

		if (returnChange.length < 1 || _change > 0) {
			return MESSAGES[1]
		}

		return returnChange
	}
}

/**
 * @param {number} price - Price of the product
 * @param {number} cash - Cash paid by the customer
 * @param {any[]} cid - Cash in drawer
 */
function checkCashRegister(price, cash, cid) {
	if (
		typeof price === 'number' &&
		typeof cash === 'number' &&
		Array.isArray(cid)
	) {
		let change = cash - price
		let cashInDrawer = cashInDrawerSufficient(cid, change)
		let returnChange = processChange(cid, change)
		let output = { status: '', change: [] }

		if (returnChange === MESSAGES[1]) {
			cashInDrawer = MESSAGES[1]
		}

		switch (cashInDrawer) {
			case MESSAGES[3]:
				output.status = MESSAGES[3]
				output.change = cid
				return output

			case MESSAGES[2]:
				output.status = MESSAGES[2]
				output.change = returnChange
				return output

			case MESSAGES[1]:
				output.status = MESSAGES[1]
				return output
		}
	}
}

module.exports = checkCashRegister
