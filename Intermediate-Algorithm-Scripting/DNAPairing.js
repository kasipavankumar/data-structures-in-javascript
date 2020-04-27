// DNA Pairing

function pairElement(str) {
    let basePairs = {
        A: 'T',
        T: 'A',
        C: 'G',
        G: 'C',
    }
    let split = str.split('')
    let result = []

    result = split.map(function (each) {
        return [each, basePairs[each]]
    })

    return result
}

/* let { log } = console

log(pairElement('GCG'))
log(pairElement('ATCGA'))
log(pairElement('TTGAG'))
log(pairElement('CTCTA')) */

module.exports = pairElement
