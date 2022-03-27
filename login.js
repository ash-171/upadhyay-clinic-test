const firebaseConfig = {
  apiKey: "AIzaSyCxKJ8VuV9I4LlenRgSDJr1DbqDQjL_Pw4",
  authDomain: "upadhyay-e5760.firebaseapp.com",
  databaseURL: "https://upadhyay-e5760-default-rtdb.firebaseio.com",
  projectId: "upadhyay-e5760",
  storageBucket: "upadhyay-e5760.appspot.com",
  messagingSenderId: "154557872926",
  appId: "1:154557872926:web:cae4d3cfe1bef62c25670f",
};

firebase.initializeApp(firebaseConfig);

var pname = localStorage.getItem("Name");

function getData() {
  firebase
    .database()
    .ref("/")
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        patient_names = childKey;
        console.log("patient Name - " + patient_names);
        row =
          "<li class='list-group-item-light'><div class='patient_name' id=" +
          patient_names +
          " onclick='redirectToPatientName(this.id)'>" +
          patient_names +
          "</div><hr></li>";
        document.getElementById("output").innerHTML += row;
      });
    });
}

getData();

function redirectToPatientName(name) {
  console.log(name);
  localStorage.setItem("patient_name", name);
  window.location = "patient.html";
}
function logout(){
  localStorage.removeItem("Name");
  window.location.replace("index.html");
}