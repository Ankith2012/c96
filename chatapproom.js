const firebaseConfig = {
    apiKey: "AIzaSyDdSnOhFz7ToXnvolG9ARLrHUF45ojrdDY",
    authDomain: "chat-app-e509d.firebaseapp.com",
    databaseURL: "https://chat-app-e509d-default-rtdb.firebaseio.com",
    projectId: "chat-app-e509d",
    storageBucket: "chat-app-e509d.appspot.com",
    messagingSenderId: "942429506146",
    appId: "1:942429506146:web:3c998eefb9027729615f3b"
  };
  
  // Initialize Firebase
  firebase = initializeApp(firebaseConfig);
username = localStorage.getItem('username')
document.getElementById('welcome').innerHTML= 'Welcome'+ username

function addRoom(){
    roomname= document.getElementById('addroom').value
    localStorage.setItem('roomname', roomname)
    firebase.database().ref('/').child(roomname).update({ purpose:'adding rooms'})
    window.location='chatapp_page.html'
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("trendingrooms").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log('Roomname:' + Room_names)
row = '<div class= "room_name" id=" '+ Room_names+ '" onclick="redirect(this.id)">#' + Room_names + '</div><hr>'
document.getElementById('trendingrooms').innerHTML+=row 
    //End code/
    });});}
getData();

function redirect(name) {
    console.log('roomnames ='+ name)
    localStorage.setItem('roomname', name)
    window.location='chatapp_page.html'
}

function logout()
{
    localStorage.removeItem('username')
    localStorage.removeItem('trendingrooms')
    window.location='index.html'
}

