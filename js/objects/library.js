import { Book } from "./book.js"

function Library(maxSize){
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    if (maxSize <= 0) {
        throw Error("A Library must have a non negative size");
    }
    this.collection = [];
    this.maxSize = maxSize;
}

function addBookToLibrary(book) {
    if (!(book instanceof Book)) {
        throw Error("The element passed for 'book' must be a Book");
    }
    if (this.collection.length >= this.maxSize) {
        throw Error("The selected Library is full and cannot receive any new Book");
    }    
    this.collection.push(book);
}
Library.prototype.addBookToLibrary = addBookToLibrary;

function getLibraryData() {
    const libraryData = {};
    this.collection.forEach((element, index) => {
        libraryData[index] = element.getBookData()
    });
    return libraryData
}
Library.prototype.getLibraryData = getLibraryData;
export { Library };