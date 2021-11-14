import postalCodes from "./postalcodeList";
// set year
const yearField = document.getElementById("year");
if (yearField !== null) {
    yearField.innerText = new Date().getFullYear().toString();
}
const inputForm = document.getElementById("postal-form");
const inputField = document.getElementById("search");
const resultElement = document.getElementById("searchResult");
const c = true;
function searchPostcode() {
    if (
        inputField instanceof HTMLInputElement &&
        resultElement instanceof HTMLElement
    ) {
        const searchTerm = inputField.value;
        if (searchTerm in postalCodes) {
            resultElement.innerText = (postalCodes as any)[searchTerm];
        } else {
            resultElement.innerText = "Geen resultaten";
        }
    }
}

if (inputForm !== null) {
    inputForm.style.opacity = "1";
    inputForm.style.transform = "scale(1)";
    inputForm.style.transition = ".5s";
    inputForm.onsubmit = (e) => {
        e.preventDefault();
        searchPostcode();
    };

    inputForm.oninput = searchPostcode;
}
