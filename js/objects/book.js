export function Book(title, author, pages, haveRead) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor")
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}

function getBookData() {
    const { id, title, author, pages, haveRead } = this;
    return {
        id,
        description: `${title} by ${author}, ${pages} pages`,
        haveRead: (haveRead === true) ? "Read": "Not read yet",
    };
}
Book.prototype.getBookData = getBookData;

function toggleRead() {
    this.haveRead = !this.haveRead;
}
Book.prototype.toggleRead = toggleRead;