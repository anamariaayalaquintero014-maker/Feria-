function mostrarCultivo(id) {
  document.querySelectorAll('.cultivo').forEach(c => c.classList.add('oculto'));
  document.getElementById(id).classList.remove('oculto');
}
