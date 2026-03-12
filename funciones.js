// --- Mostrar/ocultar secciones principales ---
function mostrarSeccion(id) {
  const secciones = document.querySelectorAll('main section');
  secciones.forEach(sec => sec.classList.add('oculto'));

  const seleccionada = document.getElementById(id);
  if (seleccionada) {
    seleccionada.classList.remove('oculto');
  }
}

// --- Mostrar/ocultar cultivos con toggle ---
function mostrarCultivo(id) {
  const cultivoSeleccionado = document.getElementById(id);

  if (!cultivoSeleccionado.classList.contains('oculto')) {
    cultivoSeleccionado.classList.add('oculto');
    return;
  }

  const cultivos = document.querySelectorAll('.cultivo');
  cultivos.forEach(c => c.classList.add('oculto'));

  cultivoSeleccionado.classList.remove('oculto');
}

// --- Validación del formulario de contacto ---
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formContacto');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const celular = document.getElementById('celular').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    let errores = [];

    if (nombre === "") {
      errores.push("El nombre es obligatorio.");
    }

    if (!/^\d{10}$/.test(celular)) {
      errores.push("El celular debe tener exactamente 10 dígitos.");
    }

    if (mensaje.length < 10) {
      errores.push("El mensaje debe tener al menos 10 caracteres.");
    }

    if (errores.length > 0) {
      alert("Errores:\n- " + errores.join("\n- "));
    } else {
      alert("¡Formulario enviado correctamente! Gracias por contactarnos.");
      form.reset();
    }
  });
});
