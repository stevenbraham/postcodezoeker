import { searchPostcode } from "./postalcodeList";

// set year
const yearField = document.getElementById("year");
if (yearField !== null) {
    yearField.innerText = new Date().getFullYear().toString();
}
const inputForm = document.getElementById("postal-form");
const inputField = document.getElementById("search");
const resultElement = document.getElementById("searchResult");

function handleSearchInput() {
    if (
        inputField instanceof HTMLInputElement &&
        resultElement instanceof HTMLElement
    ) {
        searchPostcode(inputField.value)
            .then((searchResult) => {
                if (searchResult !== null) {
                    resultElement.innerText = searchResult;
                } else {
                    resultElement.innerText = "Geen resultaten";
                }
            })
            .catch(() => {
                resultElement.innerText = "Fout bij zoeken";
            });
    }
}

if (inputForm !== null) {
    inputForm.style.opacity = "1";
    inputForm.style.transform = "scale(1)";
    inputForm.style.transition = ".5s";
    inputForm.onsubmit = (e) => {
        e.preventDefault();
        handleSearchInput();
    };

    inputForm.oninput = handleSearchInput;
}
