function validateInput(inputField, regexPattern, errorMessageId) {
    const pattern = new RegExp(regexPattern);
    inputField.addEventListener("keyup", () => {
        const inputValue = inputField.value;
        const errorMessageElement = document.getElementById(errorMessageId);
        if (pattern.test(inputValue)) {
            console.info(`${inputField.name} valid`);
            errorMessageElement.style.display = "none";
        } else {
            console.error(`${inputField.name} invalid`);
            errorMessageElement.style.display = "block";
        }
    });
}

// Password
const passwordField = document.querySelector("[name=password]");
validateInput(passwordField, "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+~`|}{\\]\\[:;'<>,.?/])(?=.*[a-zA-Z]).{8,}", "invalid-password");

// Email
const emailField = document.querySelector("[name=email]");
validateInput(emailField, "^[a-zA-Z0-9._%+-]+@|@gmail\\.com|.id|.in$", "invalid-email");

// NIM
const nimField = document.querySelector("[name=nim]");
validateInput(nimField, "^\\d{9}$", "invalid-nim");

// Com
const comField = document.querySelector("[name=com]");
validateInput(comField, "^[ABC]$", "invalid-com");

// Nama
const namaField = document.querySelector("[name=nama]");
validateInput(namaField, "^[A-Z][a-z]*(?:\\s[A-Z][a-z]*)*$", "invalid-nama");

// Tanggal
const tanggalField = document.querySelector("[name=tanggal]");
validateInput(tanggalField, "^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(19\\d{2}|20\\d{2}|2100)$", "invalid-tanggal");

// Nomor
const nomorField = document.querySelector("[name=nomor]");
validateInput(nomorField, "^(?:08)\\d{10,11}$", "invalid-nomor");

const linkField = document.querySelector("[name=link]");
validateInput(linkField, "^(https?|http):\/\/[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+([/?].*)?$", "invalid-link");

            