import { Book } from "./book.js"

function Library(maxSize){
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor")
    }
    if (maxSize <= 0) {
        throw Error("A Library must have a non negative size")
    }
    this.bookList = [];
    this.maxSize = maxSize;
}

function addBookToLibrary(book, library) {
    if (!book instanceof Book) {
        throw Error("The element passed for 'book' must be a Book");
    }
    if (!library instanceof Library) {
        throw Error("The element passed for 'library' must be a Library");
    }
    if (library.bookList.length >= library.maxSize) {
        throw Error("The selected Library is full and cannot receive any new Book");
    }    
    library.bookList.push(book);
}

export { Library };