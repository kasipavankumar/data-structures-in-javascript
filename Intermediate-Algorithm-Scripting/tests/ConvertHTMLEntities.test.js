const convertHTML = require('../ConvertHTMLEntities')
const compareTwoArrays = require('../../common/ArrayEquality')

let testStrings = [
    'Dolce & Gabbana',
    'Hamburgers < Pizza < Tacos',
    'Sixty > twelve',
    'Stuff in "quotation marks"',
    "Schindler's List",
    '<>',
    'abc',
]

let expectedOutput = [
    'Dolce &amp; Gabbana',
    'Hamburgers &lt; Pizza &lt; Tacos',
    'Sixty &gt; twelve',
    'Stuff in &quot;quotation marks&quot;',
    'Schindler&apos;s List',
    '&lt;&gt;',
    'abc',
]

describe('Convert to HTML Entities test suite', () => {
    test('convertHTML returns string', () => {
        expect(typeof convertHTML('<>')).toBe('string')
    })

    test('convertHTML returns undefined to invalid input', () => {
        expect(typeof convertHTML(123)).toBe('undefined')
    })

    test('convertHTML returns expected output', () => {
        let output = testStrings.map(function (str) {
            return convertHTML(str)
        })

        let isWorking = compareTwoArrays(output, expectedOutput)

        expect(isWorking).toBeTruthy()
    })
})
