bookGrid = document.querySelector('.books-grid')

// Book constructor
function Book(title, author, pages, read) {
    this.title = title
    this.author = author 
    this.pages = pages 
    this.isRead = read    
}

//Store books in an array
let myLibrary = []

//Open pop up to add books
var popup = document.querySelector(".pop-up")

function addBook() {
    popup.classList.add("open-pop-up")
}

//Close popup function and clear inputs
var inputs = document.querySelectorAll('.active')
var checkbox = document.getElementById('isRead')

function closePopup() {
    popup.classList.remove("open-pop-up");
    checkbox.checked = false;
    inputs.forEach(input => {
        input.value = '';
    });
};

//Close pop up and create eventlistener for document
var button = document.querySelector(".btn-add");
document.body.addEventListener('click', function(e) {
    if (!e.target.classList.contains('btn-add') && !e.target.classList.contains('pop-up') && !e.target.classList.contains('active')) {
        closePopup();
    }
});

//Create a function that retrieves data when click submit
function retrieveData() {
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var pages = document.getElementById('pages').value;
    var isRead = document.getElementById('isRead').checked;
    if (title == '' || author == '' || pages == '') {
        alert('Do not leave fields empty')
    } else {
    const newBook = new Book(title, author, pages, isRead)
    myLibrary.push(newBook)
    for (var i = 0; i <= myLibrary.length; i++) {
        console.log(myLibrary[i])
    }
    closePopup()
    };
    resetBookGrid();
    myLibrary.forEach(createBookElement)
};

var gridContainer = document.querySelector('.books-grid');

//Create a callbackfunction that creates "book" element for myLibrary to loop
function createBookElement(item) {
    const newBookElement = document.createElement('div');
    newBookElement.classList.add('stored-book')
    const titlePara = document.createElement('p')
    titlePara.innerText = `"${item.title}"`
    newBookElement.appendChild(titlePara)
    const authorPara = document.createElement('p')
    authorPara.innerText = `${item.author}`
    newBookElement.appendChild(authorPara)
    const pagesPara = document.createElement('p')
    pagesPara.innerText = `${item.pages}`
    newBookElement.appendChild(pagesPara)    
    gridContainer.appendChild(newBookElement);
    const buttonGroup = document.createElement('div')
    buttonGroup.classList.add('button-group')
    const didRead = document.createElement('button')
    if (item.isRead == true) {
        didRead.innerText = "Read"
        didRead.classList.add('btn-did-read')
    } else {
        didRead.innerText = "Not Read"
        didRead.classList.add('btn-did-not-read')
    }
    didRead.addEventListener('click', () => {
        if (didRead.innerText === "Read") {
            didRead.innerText = "Not Read"
            didRead.classList.remove('btn-did-read')
            didRead.classList.add('btn-did-not-read')
        } else {
            didRead.innerText = "Read";
            didRead.classList.remove('btn-did-not-read')
            didRead.classList.add('btn-did-read')
        }
    })
    const removeButton = document.createElement('button')
    removeButton.addEventListener('click', () => {
        bookGrid.removeChild(newBookElement);
        myLibrary.splice(newBookElement, 1);
    });
    removeButton.innerText = "Remove";
    removeButton.classList.add('remove-button');
    buttonGroup.appendChild(didRead)
    buttonGroup.appendChild(removeButton)
    newBookElement.appendChild(buttonGroup);
    
}

//Reset book grid for new update
function resetBookGrid() {
    gridContainer.innerHTML = '';
}
