// main function
import { Book } from "./objects/book.js"
import { Library } from "./objects/library.js"

function init() {
    let library = new Library(10);

    const books = [
        ["The Hobbit", "J.R.R. Tolkien", 310, true],
        ["Dune", "Frank Herbert", 412, false],
        ["Sapiens", "Yuval Noah Harari", 443, true],
    ];

    books.forEach((args) => library.addBookToLibrary(new Book(...args)));
    console.log(library.getLibraryData());
}

init();