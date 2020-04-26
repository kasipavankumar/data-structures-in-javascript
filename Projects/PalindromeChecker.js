// Palindrome Checker

function palindrome(str) {
	if (typeof str === 'string') {
		let cleanedString = str.toLowerCase().split(/\W|_/gm).join('')
		let originalString = cleanedString.split('').join('')
		let reversedString = cleanedString.split('').reverse().join('')

		return originalString === reversedString
	}
}

/* let { log } = console

log(palindrome('eye'))
log(palindrome('_eye'))
log(palindrome('race car'))
log(palindrome('not a palindrome'))
log(palindrome('A man, a plan, a canal. Panama'))
log(palindrome('0_0 (: /-\ :) 0-0')) */

module.exports = palindrome
