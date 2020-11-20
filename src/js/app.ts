import postalCodes from "./postalcodeList"

//set year
document.getElementById("year")!.innerText = new Date().getFullYear().toString();

let inputForm = document.getElementById("postal-form");
let inputField = document.getElementById("search");
let resultElement = document.getElementById('searchResult');

function searchPostcode() {
    if (inputField instanceof HTMLInputElement && resultElement instanceof HTMLElement) {
        let searchTerm = inputField.value;
        if (searchTerm in postalCodes) {
            //@ts-ignore()
            resultElement.innerText = postalCodes[searchTerm];
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