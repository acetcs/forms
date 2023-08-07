const form = document.getElementById('contactForm');
const alert = document.querySelector(".alert");

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

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  
  const database = firebase.database()

  const ref = database.ref("messages")


form.addEventListener("submit",(e)=>{
    
    e.preventDefault();
    
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const department = document.getElementById('department').value;
    const phone = document.getElementById('phone').value;
    const git = document.getElementById('git').value;
    
    ref.push({
        firstname:firstname,
        lastname:lastname,
        department:department,
        phone:phone,
        git:git
    })

    alert.style.display="block"

    setTimeout(()=>{
        alert.style.display="none"
    },10000)

    form.reset()

})