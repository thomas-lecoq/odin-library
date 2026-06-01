import { Book } from "./book.js"

function Library(maxSize){
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor")
    }

    if (maxSize <= 0) {
        throw Error("A Library must have a non negative size")
    }
    this.bookList = [];
    this.maxSize = maxSize;
}