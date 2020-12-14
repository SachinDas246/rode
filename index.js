document.getElementById("odr").hidden = true;

brand_Name = ["Kalk Cake", "Kalk Cake", "Gogoro", "VESPA"];
product_Name = ["Race OR", "INK Race", "Eeyo", "ELETTRICA"];

passage = [
  `Engineered to promote performance, trail/enduro and free riding in the back country, leaving nothing to chance.`,
  `Engineered for racing in kinship with the core aspects of the kalk platform: light, quiet & clean. The combination of 280Nm on the rear wheel and being super light creates a unique power to weight formula with superior nimbleness and speed in technical, compact formats.`,
  `The Eeyo Smartwheel senses your effort and delivers the exact power you need. Over the air update brings new features and improve the riding experience every quarter.`,
  `Introducing the Vespa Elettrica project, the new mobility solution according to the most elegant and beloved two-wheeled brand in the world that takes a step into the future in complete consistency with the values that have accompanied its history.`,
];
function order(id) {
  if (!islogged) {
    window.open("./login.html#" + id.toString(), "_self");
    return;
  }

  document.getElementById("bdnm").innerHTML = brand_Name[id];
  document.getElementById("itmnm").innerHTML = product_Name[id];
  document.getElementById("pas").innerHTML = passage[id];
  document.getElementById("im").src =
    "./Assets/" + "h" + (id + 1).toString() + ".jpg";
  document.getElementById("odr").hidden = false;
}

var islogged = false;
var loadenabled = false;
var email = "";
var uid = "";

firebase.auth().onAuthStateChanged((firebaseUser) => {
  if (firebaseUser) {
    islogged = true;
    var text = window.location.hash.substring(1);
    if (text) {
      order(Number(text));
    }
    document.getElementById("f3").value = firebaseUser.email;
    email = firebaseUser.email;
    uid = firebaseUser.uid;
  } else {
    islogged = false;
    if (loadenabled) {
      loadenabled = false;
      var text = window.location.hash.substring(1);
      if (text) {
        window.open("./login.html#" + text, "_self");
      } else {
        window.open("./login.html", "_self");
      }
    }
  }
});

function signout() {
  loadenabled = true;
  firebase.auth().signOut();
}

function confirmorder() {
  var F1 = document.getElementById("f1").value;
  var F2 = document.getElementById("f2").value;
  var F3 = email;
  var F4 = document.getElementById("f4").value;
  var F5 = document.getElementById("f5").value;
  var F6 = document.getElementById("itmnm").innerHTML;
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  if (F1 == "") {
    return;
  }
  if (F2 == "") {
    return;
  }
  if (F4 == "") {
    return;
  }
  if (F5 == "") {
    return;
  }

  var data = {
    zip: F1,
    name: F2,
    email: F3,
    phone: F4,
    Address: F5,
    datetime: date,
    item: F6,
  };

  firebase
    .database()
    .ref("/orders/" + uid)
    .push(data);
  setTimeout(move, 2500);

  function move() {
    window.open("./ConfirmOrder.html", "_self");
  }
}

function openpage(lik) {
  window.open(lik, "_self");
}

var dwidth = window.innerWidth > 0 ? window.innerWidth : screen.width;

if (dwidth < 700) {
  st = document.getElementById("nv");
  st.classList.remove("fixed-top");
  st = document.getElementById("i1");
  st.innerHTML = `<img  id="im"  src="./Assets/1.jpg"  class="img-fluid"   />`;
  st = document.getElementById("i2");
  st.innerHTML = `<img  id="im"  src="./Assets/2.jpg"  class="img-fluid"  />`;
  st = document.getElementById("i3");
  st.innerHTML = `<img  id="im"  src="./Assets/3.jpg"  class="img-fluid"   />`;
  st = document.getElementById("i4");
  st.innerHTML = `<img  id="im"  src="./Assets/4.jpg"  class="img-fluid"   />`;
  document.getElementById("s1").hidden = true;
  document.getElementById("s2").hidden = true;
  document.getElementById("s3").hidden = true;
  document.getElementById("s4").hidden = true;

  document.getElementById("v1").classList.remove("sect");
  document.getElementById("v1").classList.add("sectd");

  document.getElementById("v2").classList.remove("sect");
  document.getElementById("v2").classList.add("sectd");

  document.getElementById("v3").classList.remove("sect");
  document.getElementById("v3").classList.add("sectd");

  document.getElementById("v4").classList.remove("sect");
  document.getElementById("v4").classList.add("sectd");
  //st.classList.add("cakesubmob");
}
