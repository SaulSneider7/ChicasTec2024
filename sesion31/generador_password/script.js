function generatePassword() {
    let longitud = document.getElementById('length').value;
    let letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";

    for (let i = 0; i < longitud; i++) {
        let randomIndex = Math.floor(Math.random() * letras.length);
        password += letras[randomIndex];
    }

    document.getElementById('passwordOutput').textContent = password;
}