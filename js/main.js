// main function
import { Book } from "./objects/book.js"
import { Library } from "./objects/library.js"
import { BOOKS } from "./configs/config.js"

function init() {
    let library = new Library(10);

    BOOKS.forEach((args) => library.addBookToLibrary(new Book(...args)));
    console.log(library.getLibraryData());
}

init();