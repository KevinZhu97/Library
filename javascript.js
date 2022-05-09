
//Open pop up to add books
var popup = document.querySelector(".pop-up")

function addBook() {
    popup.classList.add("open-pop-up")
}

//Close pop up and create eventlistener for document
var button = document.querySelector(".btn-add");
document.body.addEventListener('click', function(e) {
    if (!e.target.classList.contains('btn-add') && !e.target.classList.contains('pop-up') && !e.target.classList.contains('active')) {
        popup.classList.remove("open-pop-up")
    }
});


//Add book pop-up function


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

// Add book to myLibrary when click submit
function addBookToLibrary() {

}

//Store books in an array
let myLibrary = [];

//Display on the page for each book
for (const book in myLibrary) {

}