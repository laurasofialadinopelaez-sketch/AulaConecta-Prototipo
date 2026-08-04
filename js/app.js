
// Login validación de datos
document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('loginForm')

    if (formulario) {
        formulario.addEventListener('submit', (event) => {
            event.preventDefault();

            const email = document.getElementById('email')?.value.trim();
            const password = document.getElementById('contrasena')?.value.trim();

            let errores = [];

            if (!email) {
                errores.push('El correo electrónico es obligatorio.');
            } else if (!validarEmail(email)) {
                errores.push('Ingresa un correo electrónico válido.');
            }

            if (!password) {
                errores.push('La contraseña es obligatoria.');
            } else if (password.length < 6) {
                errores.push('La contraseña debe tener al menos 6 caracteres.');
            }

            if (errores.length > 0) {
                alert(errores.join('\n'));
            } else {
                console.log('Formulario válido. Procesando inicio de sesión...');
                formulario.submit(); 
            }
        });
    }
});

function validarEmail(email) {
    const dominioInstitucional = '@soy.sena.edu.co';
    return email.toLowerCase().endsWith(dominioInstitucional);
}

// Cambios en navegación