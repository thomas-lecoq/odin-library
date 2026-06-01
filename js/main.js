// main function
import { Book } from "./objects/book.js"
import { Library } from "./objects/library.js"

function init() {
    let library = new Library(10);

    const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 310, true);
    const dune = new Book("Dune", "Frank Herbert", 412, false);
    const sapiens = new Book("Sapiens", "Yuval Noah Harari", 443, true);

    library.addBookToLibrary(theHobbit);
    library.addBookToLibrary(dune);
    library.addBookToLibrary(sapiens);

}

init();