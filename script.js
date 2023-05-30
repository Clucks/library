let myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function(){
    return ("\" " + title + "\"" + author + ", " + pages);
  }
}
function displayLibrary(){
    array.forEach(book => {
        console.log(book.info);
    });
}

function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push(book);
}