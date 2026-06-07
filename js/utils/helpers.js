// Utils functions

/**
 * Create an element with a class and append it to a parent node.
 *
 * @param {string} tagName - name of the HTML tag (ex: 'div')
 * @param {string} className - CSS class to apply
 * @param {HTMLElement} parent - parent element to append to
 * @param {string} [textContent=""] - optional text content for the new element
 * @param {"appendChild"|"prepend"} [mode="appendChild"] - insertion mode
 * @returns {HTMLElement} the newly created element
 */
export function appendNewElement(tagName, className, parent, textContent="", mode="appendChild") {
    if (mode !== "appendChild" && mode !== "prepend") {
        throw new Error(`Invalid mode: "${mode}". Expected "appendChild" or "prepend".`);
    }
    const element = document.createElement(tagName);
    element.classList.add(className);
    element.textContent = textContent;

    if (mode === "prepend") {
        parent.prepend(element);
    } else {
        parent.appendChild(element);
    }
    return element;
}