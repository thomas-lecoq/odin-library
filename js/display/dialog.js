// Dialog boxes logic and all related elements.

import { Book } from "../objects/book.js";
import { displayBook } from "../display/displayLibrary.js"
import { MAIN_ELT } from "../configs/config.js"

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#add-book-btn");
const closeButton = document.querySelector("#dialog-close-btn");
const dialogForm = document.querySelector("#add-book-form");

export function setupDialogListeners(library) {
    showButton.addEventListener("click", () => {
        dialog.showModal();
    });

    // Close the dialog only when the click lands on the backdrop area.
    dialog.addEventListener("click", (event) => {
        const rect = dialog.getBoundingClientRect();
        const clickedOnBackdrop = (
            event.clientX < rect.left || 
            event.clientX > rect.right ||
            event.clientY < rect.top || 
            event.clientY > rect.bottom
        );
        if (clickedOnBackdrop) {
            dialog.close();
        }
    });

    closeButton.addEventListener("click", () => {
        dialog.close();
    });

    dialogForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const data = new FormData(event.target);
        const newBook = new Book(
            data.get('title'),
            data.get('author'),
            Number(data.get('pages')),
            data.get('have-read') === "on" ? true : false,
        );
        library.addBook(newBook);
        displayBook(newBook.getBookData(), MAIN_ELT);
        dialog.close();
        event.target.reset();
        });
}