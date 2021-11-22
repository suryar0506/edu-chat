
function addUser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("User's Name : ",user_name);
    window.location = "edu_chat_room.html";
}