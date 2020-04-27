var bookList = [
    'The Hound of the Baskervilles',
    'On The Electrodynamics of Moving Bodies',
    'Philosophiæ Naturalis Principia Mathematica',
    'Disquisitiones Arithmeticae',
]

// Add book
function add(bookList, bookName) {
    let newBookList = bookList.slice(0)

    newBookList.push(bookName)

    return newBookList
}

// Remove book
function remove(bookList, bookName) {
    let updatedBookList = bookList.slice(0)
    var book_index = updatedBookList.indexOf(bookName)

    if (book_index >= 0) {
        updatedBookList.splice(book_index, 1)
        return updatedBookList
    }
}

var newBookList = add(bookList, 'A Brief History of Time')
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies')
var newestBookList = remove(
    add(bookList, 'A Brief History of Time'),
    'On The Electrodynamics of Moving Bodies'
)

console.log(bookList)
