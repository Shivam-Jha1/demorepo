const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
// import {getDatabase,set,ref,update} from "http://www.gstatic.com/firebasejs/9.8.4/firebase-database.js";
// import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword ,onAuthStateChanged } from "http://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js";


//   // https://firebase.google.com/docs/web/setup#available-libraries
//   // Your web app's Firebase configuration
//   const firebaseConfig = {
//     apiKey: "AIzaSyB2MJBJuXV_Q3yJf57OitOjeomwfdIE_ns",
//     authDomain: "ez-material.firebaseapp.com",
//     databaseURL: "https://ez-material-default-rtdb.firebaseio.com",
//     projectId: "ez-material",
//     storageBucket: "ez-material.appspot.com",
//     messagingSenderId: "143162245485",
//     appId: "1:143162245485:web:6b0849505b0ca1ede11a64"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const database = getDatabase(app);
//   const auth = getAuth();

//   sign.addEventListener('click',(e) => {

//     var email = document.getElementById('email').value;
//     var password = document.getElementById('password').value;
//     var userName = document.getElementById('userName').value;

//     createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     set(ref(database,'users/' + user.uid), { 
//         userName: userName,
//         email:email
//     })
//     alert('user created now sign in');
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;

//     alert('Account already exists or password length less than 6');
//     // ..
//   });
//   });

//   login.addEventListener('click',(e)=>{
//     var email = document.getElementById('Email').value;
//     var password = document.getElementById('Password').value;
 
//        signInWithEmailAndPassword(auth, email, password)
//        .then((userCredential) => {
//          // Signed in 
//          const user = userCredential.user;
 
//          const dt = new Date();
//           update(ref(database, 'users/' + user.uid),{
//            last_login: dt,
//          })
 
//         //   alert('User loged in!');
//           window.location.href="welcome.html";
//          // ...
//        })
//        .catch((error) => {
//          const errorCode = error.code;
//          const errorMessage = error.message;
 
//          alert(errorMessage);
//    });
 
//   });
 
//  const user = auth.currentUser;
//  onAuthStateChanged(auth, (user) => {
//    if (user) {
//      // User is signed in, see docs for a list of available properties
//      // https://firebase.google.com/docs/reference/js/firebase.User
//      const uid = user.uid;
    
//      // ...
//    } else {
//      // User is signed out
//    }
//  });

//  logout.addEventListener('click',(e)=>{

//     signOut(auth).then(() => {
//       // Sign-out successful.
//       alert('user loged out');
//     }).catch((error) => {
//       // An error happened.
//       const errorCode = error.code;
//       const errorMessage = error.message;
 
//          alert(errorMessage);
//     });
 
//  });
 



  
