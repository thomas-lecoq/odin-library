// Screen update and content display (from Library).

import { Book } from "../objects/book.js";
import { Library } from "../objects/library.js";
import { appendNewElement } from "../utils/helpers.js";

function displayBook(bookDataObject) {
    const mainElt = document.querySelector("main");
    const newEltArr = ["div", "card", mainElt];
    const newBookElt = appendNewElement(...newEltArr);

    const newBookArr = ["p", "book-info", newBookElt];
    for (const [key, value] of Object.entries(bookDataObject)) {
        const newContent = appendNewElement(...newBookArr, `${value}`);
    }
}

export function displayLibrary(library) {
    const libraryData = library.getLibraryData()
    for (const [key, value] of Object.entries(libraryData)) {
        displayBook(libraryData[key]);
    }
}