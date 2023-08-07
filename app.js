import { initializeApp } from "firebase/app";



// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBQyE5A32XOQBT_rf3Q2OOnjvChvP5H2jY",
    authDomain: "project-terminal-a4511.firebaseapp.com",
    databaseURL: "https://project-terminal-a4511-default-rtdb.firebaseio.com",
    projectId: "project-terminal-a4511",
    storageBucket: "project-terminal-a4511.appspot.com",
    messagingSenderId: "121180104722",
    appId: "1:121180104722:web:1cb43dc4faf90dde77d0cb",
    measurementId: "G-YYFY6S288R"
};
const form = document.getElementById('contactForm');


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  
  const database = firebase.database();

  const ref = database.ref("Users")


form.addEventListener("submit",(e)=>{
    
    e.preventDefault();
    
    const name = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const phone = document.getElementById('phone').value;
    const department = document.getElementById('department').value;
    const git = document.getElementById('git').value;

    
    ref.push({
        name:name,
        lastname:lastname,
        phone:phone,
        department:department,
        git:git
    })

    

    form.reset()

})