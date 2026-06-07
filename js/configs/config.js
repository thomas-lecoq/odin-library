// SCREAMING_CASE consts and all related configuration elements.

export const MAIN_ELT = document.querySelector("main");

export const DELETE_SYMBOL = {
    "tag": "button",
    "class": "delete-book-btn",
    "value": "Remove this book",
}; 

export const TOGGLE_READ_SYMBOL = {
    "tag": "button",
    "class": "toggle-read-btn",
    "value": "Toggle read status",
};

export const BOOKS = [
    ["The Hobbit", "J.R.R. Tolkien", 310, true],
    ["Dune", "Frank Herbert", 412, false],
    ["Sapiens", "Yuval Noah Harari", 443, true],
];

export const CLASS_MAPPING = {
    "id": "book-id",
    "description": "book-desc",
    "haveRead": "book-read",
}