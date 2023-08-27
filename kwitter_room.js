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

    user_name=localStorage.getItem("user_name")

    document.getElementById("user_name").innerHTML="Welcome " + user_name

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>"
      //End code
      });});}
getData();

function addRoom() {

     room_name = document.getElementById("room_name").value;

     firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
     });
 
       localStorage.setItem("room_name", room_name);

       window.location = "kwitter_page.html";

}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
           window.location = "index.html";
}