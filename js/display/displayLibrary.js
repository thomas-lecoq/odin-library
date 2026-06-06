// Screen update and content display (from Library).

import { CLASS_MAPPING } from "../configs/config.js";
import { appendNewElement } from "../utils/helpers.js";
import { Book } from "../objects/book.js";
import { Library } from "../objects/library.js";

function displayBook(bookDataObj) {
    // select `main` element
    const mainElt = document.querySelector("main");

    // add `div` with css class `card` to `main` element in DOM
    const newBookElt = appendNewElement("div", "card", mainElt);

    // add `p` with css class defined by CLASS_MAPPING to previously created `div` in DOM
    for (const [key, value] of Object.entries(bookDataObj)) {
        appendNewElement("p", CLASS_MAPPING[key], newBookElt, `${value}`)
    }
}

export function displayLibrary(library) {
    const libraryDataObj = library.getLibraryData()
    for (const [key] of Object.entries(libraryDataObj)) {
        displayBook(libraryDataObj[key]);
    }
}