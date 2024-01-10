const firebaseConfig = {
    apiKey: "AIzaSyBb7i0pAskv-dYlHNbbHAlp5meQPGKwWd0",
    authDomain: "kwitter-29046.firebaseapp.com",
    databaseURL: "https://kwitter-29046-default-rtdb.firebaseio.com",
    projectId: "kwitter-29046",
    storageBucket: "kwitter-29046.appspot.com",
    messagingSenderId: "604684850823",
    appId: "1:604684850823:web:b802e21c28ada9340b4a22"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem('username')
roomname = localStorage.getItem('roomname')

function send(){
    msg= document.getElementById('message').value
    firebase.database().ref(roomname).push({
          name:user_name,
          message:msg,
          like:0

    })
    document.getElementById('message').value=""
}

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("msg").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id)
console.log(message_data)
message = message_data['message']
username= message_data['name']
like= message_data['like']
username_tag = '<h4>' +username+ '<img class="user_tick" src="tick.png"></h4>'
message_tag= '<h4 class="messsage_h4">'+message+'<h4>'
like_tag= '<button class="btn btn-info" onclick="updateLike(this.id)" id="' + firebase_message_id + '" value="'+ like+ '">'
span_tag= '<span class="glyphicon glyphicon-thumbs-up"> Like:' +like+'</span></button><hr>'
row= username_tag + message_tag + like_tag + span_tag
document.getElementById('msg').innerHTML +=row
//End code
    } });  }); }
getData();

function updateLike(button_id){
    console.log(button_id)
    likes= document.getElementById(button_id).value
    update_likes = Number(likes)+1
    console.log(update_likes)
    firebase.database().ref(roomname).child(button_id).update({
          like:update_likes
    })

}

function logout()
{
    localStorage.removeItem('username')
    localStorage.removeItem('trendingrooms')
    window.location='index.html'
}