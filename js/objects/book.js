export function Book(title, author, pages, haveRead) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor")
    }
    this.bookId = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}

function getInfo() {
    const sepStr = ", ";
    const qualifiedTitleStr = `${this.title} by ${this.author}`; 
    const pagesStr = `${this.pages} pages`;
    const haveReadStr = (
        this.haveRead === true ? "already read" : "not read yet"
    );
    return (
        qualifiedTitleStr
        .concat(sepStr, pagesStr)
        .concat(sepStr, haveReadStr)
    )
}
Book.prototype.getInfo = getInfo;

function getBookData() {
    const bookProps = Object.fromEntries(
    Object.entries(this).filter(([, value]) => typeof value !== ("function"))
    );
    return bookProps
}
Book.prototype.getBookData = getBookData;