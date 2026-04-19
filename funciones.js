// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClOYcAKB9dOMEfhiWWGATqLBIP979BRbg",
  authDomain: "feria-digital-e21f3.firebaseapp.com",
  projectId: "feria-digital-e21f3",
  storageBucket: "feria-digital-e21f3.firebasestorage.app",
  messagingSenderId: "76279465088",
  appId: "1:76279465088:web:4dfbb1e4af6c5e2a4e1265",
  measurementId: "G-NKFCJ72GEJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


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