var Person = function (firstAndLast) {
    var firstName, lastName

    function update(fullName) {
        var splitName = fullName.split(' ')
        firstName = splitName[0]
        lastName = splitName[1]
    }

    update(firstAndLast)

    // Get

    this.getFirstName = function () {
        return firstName
    }

    this.getLastName = function () {
        return lastName
    }

    this.getFullName = function () {
        return `${firstName} ${lastName}`
    }

    // Set

    this.setFirstName = function (first) {
        firstName = first
        update(`${firstName} ${lastName}`)
    }

    this.setlastName = function (last) {
        lastName = last
        update(`${firstName} ${lastName}`)
    }

    this.setFullName = function (name) {
        update(name)
    }
}

var bob = new Person('Bob Ross')

/* console.log(Object.keys(bob).length)
console.log(bob instanceof Person)
console.log(bob.firstName)
console.log(bob.lastname)
console.log(bob.getFirstName())
console.log(bob.getFullName())
bob.setFirstName('Haskell')
console.log(bob.getFullName())
bob.setlastName('Curry')
console.log(bob.getFullName())
bob.setFullName('Haskell Curry')
console.log(bob.getFirstName())
console.log(bob.getLastName()) */

module.exports = Person
