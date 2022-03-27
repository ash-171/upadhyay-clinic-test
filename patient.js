
const firebaseConfig = {
  apiKey: "AIzaSyCxKJ8VuV9I4LlenRgSDJr1DbqDQjL_Pw4",
  authDomain: "upadhyay-e5760.firebaseapp.com",
  databaseURL: "https://upadhyay-e5760-default-rtdb.firebaseio.com",
  projectId: "upadhyay-e5760",
  storageBucket: "upadhyay-e5760.appspot.com",
  messagingSenderId: "154557872926",
  appId: "1:154557872926:web:cae4d3cfe1bef62c25670f"
};

firebase.initializeApp(firebaseConfig);

pname = localStorage.getItem("patient_name");

function getData() {
  firebase
    .database()
    .ref("/" + pname)
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        childData = childSnapshot.val();
        if (childKey != "purpose") {
          firebase_message_id = childKey;
          message_data = childData;

          console.log(message_data);
          pnum = message_data["number"];
          pmail = message_data["email"];
          pdate = message_data["date"];
          ptime = message_data["time"];
          ail = message_data["ail"];

          number_with_tag = "<h4> Phone :  " + pnum + "</h4><br>";
          mail_with_tag = "<h4> Email : " + pmail + "</h4><br>";
          date_with_tag = "<h4> Date of visit : " + pdate + "</h4><br>";
          time_with_tag = "<h4> Time of visit : " + ptime + "</h4><br>";
          ail_with_tag = "<h4> Update : " + ail + "</h4><br><hr>";

          row =
            "<li class='list-group-item list-group-item-info'>" +
            number_with_tag +
            mail_with_tag +
            date_with_tag +
            time_with_tag +
            ail_with_tag +
            "</li>";
          document.getElementById("output").innerHTML += row;
        }
      });
    });
}

getData();

function logout() {
  localStorage.removeItem("patient_name");
  localStorage.removeItem("number");
  localStorage.removeItem("email");
  localStorage.removeItem("date");
  localStorage.removeItem("time");
  localStorage.removeItem("ail");
  window.location.replace("index.html");
}
