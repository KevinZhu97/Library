



// Book constructor
function Book(title, author, pages, read) {
    this.title = title
    this.author = author 
    this.pages = pages 
    this.haveRead = read
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.haveRead}`
    }
}

// Add book to myLibrary
function addBookToLibrary() {
    
}

//Store books in an array
let myLibrary = [];

//Display on the page for each book
for (const book in myLibrary) {

}