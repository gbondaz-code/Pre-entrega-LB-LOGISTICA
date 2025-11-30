
function validarForm() {

    const emailValido = "admin@admin.com";
    const pswValido = "admin123";

    const usrEmail = document.getElementById('id_mail').value;
    const usrPsw = document.getElementById('id_psw').value;

    let esValido = true;

    if (usrEmail.length < 1) {
        mostrarError('empty_email', 'El campo email no puede estar vacío');
        esValido = false;
    } else {
        ocultarError('empty_email');
    }

    if (usrPsw.length < 1) {
        mostrarError('empty_psw', 'El campo password no puede estar vacío');
        esValido = false;
    } else {
        ocultarError('empty_psw');
    }

    if (usrEmail !== emailValido || usrPsw !== pswValido) {
        mostrarError('login_error', 'Las credenciales no son válidas');
        esValido = false;
    } else {
        ocultarError('login_error');
    }

    return esValido;
}


function mostrarError(fieldId, message) {
    const errorElement = document.getElementById(fieldId + '_error');
    errorElement.textContent = "❌ " + message;
    errorElement.style.display = 'block';
}

function ocultarError(fieldId) {
    const errorElement = document.getElementById(fieldId + '_error');
    errorElement.style.display = 'none';
}

document.getElementById('btn_login').addEventListener('click', function(event) {
    event.preventDefault();   // ← CORRECTO
    if (validarForm()) {
        window.location.href = "pages/bienvenida.html";
    }
});
