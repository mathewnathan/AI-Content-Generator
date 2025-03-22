// Firebase Config
const firebaseConfig = {
    apiKey: "your-firebase-api-key",
    authDomain: "your-firebase-project.firebaseapp.com",
    projectId: "your-firebase-project",
    storageBucket: "your-firebase-project.appspot.com",
    messagingSenderId: "your-messaging-id",
    appId: "your-app-id"
};

firebase.initializeApp(firebaseConfig);

function signUp() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(userCredential => alert("Sign Up Successful!"))
        .catch(error => alert(error.message));
}

function signIn() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(userCredential => alert("Login Successful!"))
        .catch(error => alert(error.message));
}

async function generateContent() {
    let input = document.getElementById("userInput").value;
    let response = await fetch("https://your-replit-backend.repl.co/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input })
    });

    let data = await response.json();
    document.getElementById("output").innerText = data.response;
}
