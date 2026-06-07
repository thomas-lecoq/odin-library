import { Book } from "./book.js"

function Library(size){
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    if (size <= 0) {
        throw Error("A Library must have a non negative size");
    }
    this.collection = new Map();
    this.size = size;
}

function addBook(book) {
    if (!(book instanceof Book)) {
        throw Error("The element passed for 'book' must be a Book");
    }
    if (this.collection.size >= this.size) {
        throw Error("The selected Library is full and cannot receive any new Book");
    }    
    this.collection.set(book.id, book);
}
Library.prototype.addBook = addBook;

function removeBook(id) {
    return this.collection.delete(id);
}
Library.prototype.removeBook = removeBook;

function getLibraryData() {
    const libraryData = {};
    for (const [id, book] of this.collection) {
        libraryData[id] = book.getBookData()
    }
    return libraryData
}
Library.prototype.getLibraryData = getLibraryData;
export { Library };