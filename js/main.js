// main function
import { BOOKS } from "./configs/config.js"
import { Book } from "./objects/book.js"
import { Library } from "./objects/library.js"
import { displayLibrary } from "./display/displayLibrary.js";
import { setupDialogListeners } from "./display/dialog.js"

function init() {
    let library = new Library(10);
    BOOKS.forEach((args) => library.addBookToLibrary(new Book(...args)));
    displayLibrary(library);
    setupDialogListeners();
}

init();