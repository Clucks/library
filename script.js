let myLibrary = [];
let a = new Book("Things We Never Got Over", "Lucy Score", 102, true)
let b = new Book("The Power of Now: A Guide to Spiritual Enlightenment", "Eckhart Tolle", 236, false);
let c = new Book("Power vs. Force", "David R. Hawkins", 341, false);
addBookToLibrary(a);
addBookToLibrary(b);
addBookToLibrary(c);
displayLibrary();

let button = document.querySelector("#add");
button.addEventListener("click", function () {
    let form = document.querySelector(".form")
    form.classList.toggle("hidden");
})


let form = document.querySelector("#form-div");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const pages = document.getElementById("pages");
    const read = document.getElementById("read")
    let book = new Book(title.value, author.value, pages.value, read.checked);
    addBookToLibrary(book);
    displayLibrary();
    form.reset();
    let divform = document.querySelector(".form");
    divform.classList.toggle("hidden");
})

function Book(title, author, pages, read) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function clearLibrary() {
    let bookDiv = document.querySelector(".library");
    while (bookDiv.hasChildNodes()) {
        bookDiv.removeChild(bookDiv.firstChild);
    }
}

function displayLibrary() {
    clearLibrary();
    let bookDiv = document.querySelector(".library");
    myLibrary.forEach(book => {
        let newBook = document.createElement("div");
        newBook.textContent = `Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}, Read: ${book.read}`;


        let deletebutton = document.createElement("button");
        deletebutton.innerText = "Delete Entry";
        deletebutton.classList.add("delete");

        let readbutton = document.createElement("button");
        readbutton.innerText = "read";
        bookDiv.appendChild(newBook);
        bookDiv.appendChild(deletebutton);
        bookDiv.appendChild(readbutton);
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