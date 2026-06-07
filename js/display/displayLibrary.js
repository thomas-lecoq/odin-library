// Screen update and content display (from Library).

import { MAIN_ELT, DELETE_SYMBOL, TOGGLE_READ_SYMBOL, CLASS_MAPPING } from "../configs/config.js";
import { appendNewElement } from "../utils/helpers.js";
import { Book } from "../objects/book.js";
import { Library } from "../objects/library.js";

export function displayBook(bookDataObj, parent) {
    // add book card
    const newBookElt = appendNewElement("div", "card", parent, "", "prepend");
    for (const [key, value] of Object.entries(bookDataObj)) {
        if (key === "id") {
            newBookElt.setAttribute("data-book-id", value)
        } else {
            appendNewElement("p", CLASS_MAPPING[key], newBookElt, value)
        }
    }
    // add the toggle read and delete buttons
    appendNewElement(TOGGLE_READ_SYMBOL.tag, TOGGLE_READ_SYMBOL.class, newBookElt, TOGGLE_READ_SYMBOL.value)
    appendNewElement(DELETE_SYMBOL.tag, DELETE_SYMBOL.class, newBookElt, DELETE_SYMBOL.value)
}

export function displayLibrary(library) {
    const libraryDataObj = library.getLibraryData()
    for (const bookData of Object.values(libraryDataObj)) {
        displayBook(bookData, MAIN_ELT);
    }
}

export function setupLibraryListeners(library) {
    MAIN_ELT.addEventListener("click", (event) => {
        const card = event.target.closest(".card");
        if (!card) return;
        const id = card.dataset.bookId;

        if (event.target.matches(`.${DELETE_SYMBOL.class}`)) {
            library.removeBook(id);
            card.remove()
        } else if (event.target.matches(`.${TOGGLE_READ_SYMBOL.class}`)) {
            const book = library.getBook(id);
            book.toggleRead();
            card.querySelector(`.${CLASS_MAPPING.haveRead}`).textContent = book.getBookData().haveRead;
        }
    });
}

