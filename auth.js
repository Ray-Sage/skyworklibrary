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
    createUserWithEmailAndPassword
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

        const user = userCredential.user;

        
        console.log(user);
        console.log("Account created successfully!");
        error.textContent = "Yeepy! Your account is made successfuly. Wait while we redirect you...";

        

    } catch (error) {

        console.log(error.code);
        console.log(error.message);
        
        error.textContent = error.message;
        
    }
};