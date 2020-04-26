// Ceaser Cipher

function rot13(str) {
	if (typeof str === 'string') {
		let split = str.split('')
		let specialCharacters = /\W/gi
		let res = []

		split.forEach(function (char) {
			if (specialCharacters.test(char)) {
				res.push(char)
			} else {
				if (char.charCodeAt() <= 77 && !specialCharacters.test(char)) {
					res.push(String.fromCharCode(char.charCodeAt() + 13))
				} else if (char.charCodeAt() >= 77 && !specialCharacters.test(char)) {
					res.push(String.fromCharCode(char.charCodeAt() - 13))
				}
			}
		})

		return res.join('')
	}

	return undefined
}

/* let { log } = console

log(rot13('SERR PBQR PNZC'))
log(rot13('SERR CVMMN!'))
log(rot13('SERR YBIR?'))
log(rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.')) */

module.exports = rot13
