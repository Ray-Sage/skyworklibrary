const form = document.getElementById("form");
const error = document.getElementById("error");
let results = "";
error.textContent = results;
const loader = document.querySelector(".loader");
const createAccount = document.getElementById("createAccount");
const continueWithGoogle = document.querySelector(".continueWithGoogle");




createAccount.addEventListener('click', function(){
    
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const name = document.getElementById("name").value;
const confirm = document.getElementById("confirm").value;

    
    
    if (name.length < 5){
        error.textContent = "Name cannot be less than 5 characters. Kindly enter your full name";
        return;
    }
    if (!email.includes("@") || !email.includes(".")){
        error.textContent = "Invalid email. Kindly check your email and try again. (Hint: email must contain both @ and . symbols)";
        return;
    }
    
    if (password.length === 0){
        error.textContent = "Ooopsss! Looks like you forgot to create a password. Create a password first";
        return;
    }
    
    if (password.length < 6){
        error.textContent = "For security and safety reasons, we kindly request you to create a password with atleast 6 characters";
        return;
    }
    if (!/\d/.test(password)){
        error.textContent = "Your password is too weak. Try adding a number to make it stronger";
        return;
    }
    
    if (password !== confirm){
        error.textContent = "Ohh, you missed something. Your passwords mismatch. Kindly check your passwords and try again";
        
    }
    error.textContent = "We are cooking up your account now. Please wait...";
    
    loader.style.display = "block";
    createAccount.style.display = "none";
    continueWithGoogle.style.display = "none";
    
   makeAccount();
})


// Firebase signup

import { initializeApp } from
"https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from
"https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";


const firebaseConfig = {
 
  apiKey: "AIzaSyDNquP5homZ8FVC1FeREZJhrrCS_ifx7Ag",
  authDomain: "skywork-library.firebaseapp.com",
  projectId: "skywork-library",
  storageBucket: "skywork-library.firebasestorage.app",
  messagingSenderId: "867559082713",
  appId: "1:867559082713:web:7e628d977cc064f3130cc8",
  measurementId: "G-6F2Q451YP0"
    
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const signupBtn = document.getElementById("signupBtn");

async function makeAccount(){
 const email = document.getElementById("email").value.trim();
 const password = document.getElementById("password").value.trim();

    try {

        const userCredential =
            await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

        const userId = userCredential.user;

        
        console.log(userId);
        
        localStorage.setItem("userId", userId.uid)
        localStorage.setItem("name", name);
        console.log("Account created successfully!");
        error.textContent = "Yeepy! Your account is made successfuly. Wait while we redirect you...";
        window.location.href="getstarted.html";

        

    } catch (error) {

        console.log(error.code);
        console.log(error.message);
        
        error.textContent = error.message;
        
    }
};


//Login


const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", async () => {
    loader.style.display = "block";
    loginBtn.style.display = "none";
    
    error.textContent = "We've got your details, wait while we log you in...";

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    if (email === "") {
        error.textContent = "Please enter your email.";
        return;
    }

    if (password === "") {
        error.textContent = "Please enter your password.";
        return;
    }

    try {

        const userCredential =
            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

        const userId = userCredential.user;

        console.log("Logged in:", userId);
        
        localStorage.setItem("userId", userId.uid)
        error.textContent = "Yebo! Login successful! Wait while we redirect you.";
        window.location.href = "dashboard.html";

    } catch (error) {

        console.log(error.code);

        if (error.code === "auth/invalid-credential") {
            error.textContent = "Incorrect email or password.";
        }
        else if (error.code === "auth/invalid-email") {
            error.textContent = "Please enter a valid email.";
        }
        else {
           error.textContent = "Login failed: " + error.message;
        }
    }
});
