
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyANQj_nbqY6HufoQw6Bq_X5P_tt9izl9eQ",
    authDomain: "kwitter-36c9f.firebaseapp.com",
    databaseURL: "https://kwitter-36c9f.firebaseio.com",
    projectId: "kwitter-36c9f",
    storageBucket: "kwitter-36c9f.appspot.com",
    messagingSenderId: "776617283780",
    appId: "1:776617283780:web:d9ba5f1fe7ef614330b991"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function adduser(){
      username = document.getElementById("username").value;
      firebase.database().ref("/").child(username).update({
          purpose: "adding user"
      });
  }