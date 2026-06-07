// Screen update and content display (from Library).

import { CLASS_MAPPING } from "../configs/config.js";
import { appendNewElement } from "../utils/helpers.js";
import { Book } from "../objects/book.js";
import { Library } from "../objects/library.js";

export function displayBook(bookDataObj, parent) {
    const newBookElt = appendNewElement("div", "card", parent, "", "prepend");
    for (const [key, value] of Object.entries(bookDataObj)) {
        if (key === "id") {
            newBookElt.setAttribute("data-book-id", value)
        } else {
            appendNewElement("p", CLASS_MAPPING[key], newBookElt, value)
        }
    }
}

export function displayLibrary(library) {
    const mainElt = document.querySelector("main");
    const libraryDataObj = library.getLibraryData()
    for (const bookData of Object.values(libraryDataObj)) {
        displayBook(bookData, mainElt);
    }
}