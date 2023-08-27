const firebaseConfig = {
      apiKey: "AIzaSyAxb4YvDuC_Ozm4jnEriWuMaPQaradPGwU",
      authDomain: "iphonese-6c3ed.firebaseapp.com",
      databaseURL: "https://iphonese-6c3ed-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "iphonese-6c3ed",
      storageBucket: "iphonese-6c3ed.appspot.com",
      messagingSenderId: "603950528780",
      appId: "1:603950528780:web:47dd069960840f2498b129"
    };

    firebase.initializeApp(firebaseConfig)

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;



      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

            document.getElementById("msg").value = "";

}
