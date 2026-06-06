// Dialog boxes logic and all related elements.

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#add-book-btn");
const closeButton = document.querySelector("#dialog-close-btn");

export function setupDialogListeners() {
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
}