export class Book {
    #id;

    constructor(title, author, pages, haveRead) {
        this.#id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.haveRead = haveRead;
    }

    get id() { return this.#id; }


    getBookData() {
        return {
            id: this.id,
            description: `${this.title} by ${this.author}, ${this.pages} pages`,
            haveRead: this.haveRead ? "Read": "Not read yet",
        };
    }

    toggleRead() {
        this.haveRead = !this.haveRead;
    }
}