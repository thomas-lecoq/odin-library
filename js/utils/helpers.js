// Utils functions

/**
 * Create an element with a class and append it to a parent node.
 *
 * @param {string} tagName - name of the HTML tag (ex: 'div')
 * @param {string} className - CSS class to apply
 * @param {HTMLElement} parent - parent element to append to
 * @param {string} [textContent=""] - optional text content for the new element
 * @returns {HTMLElement} the newly created element
 */
export function appendNewElement(tagName, className, parent, textContent = "") {

    const element = document.createElement(tagName);
    element.classList.add(className);
    element.textContent = textContent;
    parent.appendChild(element);
    return element;
}