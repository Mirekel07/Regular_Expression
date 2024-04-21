function validateInput(inputField, regexPattern, errorMessageElement, errorMessage) {
    const pattern = new RegExp(regexPattern);

    inputField.addEventListener("input", () => {
        const inputValue = inputField.value;
        if (pattern.test(inputValue)) {
            console.info(`${inputField.name} valid`);
            errorMessageElement.textContent = ''; // Mengosongkan pesan kesalahan jika valid
        } else {
            console.error(`${inputField.name} invalid`);
            errorMessageElement.textContent = errorMessage; // Mengatur pesan kesalahan sesuai dengan input
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    // Password
    const passwordField = document.querySelector("[name=password]");
    const passwordMessage = document.getElementById("invalid-password");
    validateInput(passwordField, "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+~`|}{\\]\\[:;'<>,.?/])(?=.*[a-zA-Z]).{8,}", passwordMessage, "Panjang password  minimal 8 karakter dan harus mengandung huruf kapital, angka, dan simbol");

    // Email
    const emailField = document.querySelector("[name=email]");
    const emailMessage = document.getElementById("invalid-email");
    validateInput(emailField, "^[a-zA-Z0-9._%+-]+@(?:gmail\\.com|.+\\.id)$", emailMessage, "Email harus disertai @gmail atau sejenisnya dengan .com atau .id");

    // NIM
    const nimField = document.querySelector("[name=nim]");
    const nimMessage = document.getElementById("invalid-nim");
    validateInput(nimField, "^\\d{9}$", nimMessage, "Panjang nim 9 karakter dan harus angka");

    // COM
    const comField = document.querySelector("[name=com]");
    const comMessage = document.getElementById("invalid-com");
    validateInput(comField, "^[ABC]$", comMessage, "COM hanya A,B,dan C UperCase");

    // Nama
    const namaField = document.querySelector("[name=nama]");
    const namaMessage = document.getElementById("invalid-nama");
    validateInput(namaField, "^[A-Z][a-z]*(?:\\s[A-Z][a-z]*)*$", namaMessage, "Nama terdiri dari huruf dengan huruf kapital pada awal kata");

    // Tanggal
    const tanggalField = document.querySelector("[name=tanggal]");
    const tanggalMessage = document.getElementById("invalid-tanggal");
    validateInput(tanggalField, "^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(19\\d{2}|20\\d{2}|2100)$", tanggalMessage, "Contoh : 31-04-2024");

    // Nomor
    const nomorField = document.querySelector("[name=nomor]");
    const nomorMessage = document.getElementById("invalid-nomor");
    validateInput(nomorField, "^(?:08)\\d{10,11}$", nomorMessage, "Contoh 085262806830 ,hanya dimulai '08' dan hanya 12-13 digit");

    // Link
    const linkField = document.querySelector("[name=link]");
    const linkMessage = document.getElementById("invalid-link");
    validateInput(linkField, "^(https?:\\/\\/[a-zA-Z0-9]+(\\.[a-zA-Z0-9]+)+([/?].*)?)?$", linkMessage, "Invalid URL format. Contoh http://www.example.com.");
});
