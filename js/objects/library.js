import { Book } from "./book.js"

export class Library {
    #size;
    #collection = new Map();

    constructor(size) {
        this.#size = this.#validateSize(size);
    }

    #validateSize(value) {
        if (value <= 0) {
            throw Error("A Library must have a positive size");
        }
        return value;
    }
    get size() { return this.#size; }

    addBook(book) {
        if (!(book instanceof Book)) {
            throw Error("The element passed for 'book' must be a Book");
        }
        if (this.#collection.size >= this.size) {
            throw Error("The selected Library is full and cannot receive any new Book");
        }
        this.#collection.set(book.id, book);
    }

    getBook(id) {
        this.#collection.get(id);
    }

    removeBook(id) {
        this.#collection.delete(id);
    }

    getLibraryData() {
        const libraryData = {};
        for (const [id, book] of this.#collection) {
            libraryData[id] = book.getBookData()
        }
        return libraryData;
    }
}