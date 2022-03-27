
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

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
function check(form) {
  if (form.userid.value == "clinic" && form.pwd.value == "upadhyay2204") {
    return true;
    window.location = "login.html";
  } else {
    alert("Error Password or Username");
    return false;
  }
}

function load() {
  Name = document.getElementById("name").value;
  number = document.getElementById("number").value;
  email = document.getElementById("email").value;
  date = document.getElementById("date").value;
  time = document.getElementById("time").value;
  ail = document.getElementById("ail").value;

  localStorage.setItem("Name", Name);
  localStorage.setItem("number", number);
  localStorage.setItem("email", email);
  localStorage.setItem("date", date);
  localStorage.setItem("time", time);
  localStorage.setItem("ail", ail);

  firebase.database().ref("/").child(Name).update({
    purpose: "test",
  });

  firebase.database().ref(Name).push({
    number: number,
    email: email,
    date: date,
    time: time,
    ail: ail,
  });

  document.getElementById("name").value = "";
  document.getElementById("number").value = "";
  document.getElementById("email").value = "";
  document.getElementById("date").value = "";
  document.getElementById("time").value = "";
  document.getElementById("ail").value = "";
}


