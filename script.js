let myLibrary = [];
let a = new Book("penis", "penis", 2, true)
let b = new Book("cock", "cock", 1, false);
myLibrary.push(a);
myLibrary.push(b);
addBookToLibrary(a);
addBookToLibrary("cock", "cock", 1, false);


function Book(title, author, pages, read) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function displayLibrary() {
    let bookDiv = document.querySelector(".library");
    console.log(bookDiv);
    myLibrary.forEach(book => {
        let newBook = document.createElement("div");
        newBook.textContent = `Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}, Read: ${book.read}`;
        console.log(newBook.textContent);
        bookDiv.appendChild(newBook);
    });
}

function addBookToLibrary(titleOrBook, author, pages, read) {
    if (typeof titleOrBook === 'object') {
        myLibrary.push(titleOrBook);
    } else {
        let book = new Book(titleOrBook, author, pages, read);
        myLibrary.push(book);
    }
}