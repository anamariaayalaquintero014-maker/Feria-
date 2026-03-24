// 🔥 IMPORTAR FIREBASE
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// 🔑 CONFIGURACIÓN (REEMPLAZA CON LA TUYA)
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
};

// 🚀 INICIALIZAR
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


// --- Mostrar/ocultar secciones principales ---
function mostrarSeccion(id) {
  const secciones = document.querySelectorAll('main section');
  secciones.forEach(sec => sec.classList.add('oculto'));

  const seleccionada = document.getElementById(id);
  if (seleccionada) {
    seleccionada.classList.remove('oculto');
  }
}


// --- LOGIN ---
document.getElementById("btnIngresar").addEventListener("click", async () => {
  const email = document.getElementById("correo").value.trim();
  const password = document.getElementById("contrasena").value.trim();

  if (!email.includes("@")) {
    alert("Correo inválido");
    return;
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Inicio de sesión exitoso");
  } catch (error) {
    alert(error.message);
  }
});


// --- REGISTRO ---
document.getElementById("btnRegistrar").addEventListener("click", async () => {
  const email = document.getElementById("correo").value.trim();
  const password = document.getElementById("contrasena").value.trim();

  if (password.length < 6) {
    alert("La contraseña debe tener al menos 6 caracteres");
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    // ✉️ ENVIAR VERIFICACIÓN
    await sendEmailVerification(userCredential.user);

    alert("Usuario registrado. Revisa tu correo para verificar tu cuenta.");
  } catch (error) {
    alert(error.message);
  }
});


// --- RECUPERAR CONTRASEÑA ---
document.getElementById("btnReset").addEventListener("click", async () => {
  const email = document.getElementById("correo").value.trim();

  try {
    await sendPasswordResetEmail(auth, email);
    alert("Correo de recuperación enviado");
  } catch (error) {
    alert(error.message);
  }
});