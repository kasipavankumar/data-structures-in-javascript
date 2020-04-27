// Convert HTML Entities

function toEntities(tag) {
    if (typeof tag === 'string') {
        let equivalentEntities = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&apos;',
        }

        return equivalentEntities[tag]
    }

    return undefined
}

function convertHTML(str) {
    if (typeof str === 'string') {
        let splitString = str.split('')
        let expectedTags = ['&', '<', '>', "'", '"']

        let result = splitString.map(function (char) {
            if (expectedTags.includes(char)) {
                char = toEntities(char)
            }

            return char
        })

        return result.join('')
    }

    return undefined
}

/* console.log(convertHTML('Dolce & Gabbana'))
console.log(convertHTML('Hamburgers < Pizza < Tacos'))
console.log(convertHTML('Sixty > twelve'))
console.log(convertHTML('Stuff in "quotation marks"'))
console.log(convertHTML("Schindler's List"))
console.log(convertHTML('<>'))
console.log(convertHTML('abc')) */

module.exports = convertHTML
