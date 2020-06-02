/** Custom implementation for Array.prototype.map() */
Array.prototype.myMap = function (callback) {
    if (this == null) {
        throw new TypeError('Array is not defined.')
    }

    if (typeof callback !== 'function') {
        throw new TypeError(`${callback} is not a function.`)
    }

    let bufferArray = this.slice()

    bufferArray.forEach(function (element, index) {
        bufferArray.splice(index, 1, callback(element))
    })

    return bufferArray
}

module.exports = Array.prototype.myMap
