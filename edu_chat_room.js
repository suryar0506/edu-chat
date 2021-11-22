
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDcIBwxUYmU1MqGSuqFvwvYlz_nUser1bg",
      authDomain: "elearning-chat.firebaseapp.com",
      databaseURL: "https://elearning-chat-default-rtdb.firebaseio.com",
      projectId: "elearning-chat",
      storageBucket: "elearning-chat.appspot.com",
      messagingSenderId: "219060079482",
      appId: "1:219060079482:web:e571027a27d2d87eeba4c3"
    };
    firebase.initializeApp(firebaseConfig);

var users_name = localStorage.getItem("User's Name : ");

document.getElementById("user_name").innerHTML = "Welcome, " + users_name + "!";


function addRoom(){
      var room_name = document.getElementById("create_room").value;
      localStorage.setItem("Room Name : ",room_name);
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      window.location = "edu_chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Names - " + Room_names);
row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div></hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
localStorage.setItem("Room Name : ",name);
window.location = "edu_chat_page.html";
}
function logOut(){
      localStorage.removeItem("User's Name : ");
      localStorage.removeItem("Room Name : ");
      window.location = "index.html";
 }