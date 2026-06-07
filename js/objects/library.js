import { Book } from "./book.js"

function Library(size){
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    if (size <= 0) {
        throw Error("A Library must have a non negative size");
    }
    this.collection = [];
    this.size = size;
}

function addBook(book) {
    if (!(book instanceof Book)) {
        throw Error("The element passed for 'book' must be a Book");
    }
    if (this.collection.length >= this.size) {
        throw Error("The selected Library is full and cannot receive any new Book");
    }    
    this.collection.push(book);
}
Library.prototype.addBook = addBook;

function getLibraryData() {
    const libraryData = {};
    this.collection.forEach((element, index) => {
        libraryData[index] = element.getBookData()
    });
    return libraryData
}
Library.prototype.getLibraryData = getLibraryData;
export { Library };