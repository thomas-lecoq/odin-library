import { Book } from "./book.js"

function Library(maxSize){
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    if (maxSize <= 0) {
        throw Error("A Library must have a non negative size");
    }
    this.bookList = [];
    this.maxSize = maxSize;
}

function addBookToLibrary(book) {
    if (!(book instanceof Book)) {
        throw Error("The element passed for 'book' must be a Book");
    }
    if (this.bookList.length >= library.maxSize) {
        throw Error("The selected Library is full and cannot receive any new Book");
    }    
    this.bookList.push(book);
}

Library.prototype.addBookToLibrary = addBookToLibrary;

export { Library };