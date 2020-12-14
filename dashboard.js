firebase.auth().onAuthStateChanged((firebaseUser) => {
  if (firebaseUser) {
    console.log(firebaseUser);
    if (firebaseUser.email != "sachindas246@gmail.com") {
      firebase.auth().signOut();
    } else {
      startin();
    }
  } else {
    const promise = firebase
      .auth()
      .signInWithEmailAndPassword("sachindas246@gmail.com", "SachinDas");
  }
});

function startin() {
  var starCountRef = firebase.database().ref("/orders");
  starCountRef.on("value", function (snapshot) {
    onloaddata(snapshot.val());
  });
}

function onloaddata(ind) {
  if (ind == null) {
    return;
  }

  dd = ``;
  t = Object.keys(ind);
  for (j = t.length - 1; j >= 0; j--) {
    dt = ind[t[j]];

    k = Object.keys(dt);

    Data = Object.values(dt);

    l = Data.length;
    var ob = document.getElementById("str");
    for (i = l - 1; i >= 0; i--) {
      dd =
        dd +
        dat1 +
        Data[i].name +
        dat2 +
        Data[i].zip +
        dat3 +
        Data[i].email +
        dat4 +
        Data[i].phone +
        dat5 +
        Data[i].Address +
        dat6 +
        Data[i].datetime +
        dat7 +
        Data[i].item +
        dat8 +
        t[j] +
        "/" +
        k[i] +
        dat9;
    }
  }

  ob.innerHTML = dd;
}

function done(sting) {
  console.log(`/orders/` + sting);
  firebase
    .database()
    .ref(`/orders/` + sting)
    .remove();

  setTimeout(move, 2000);

  function move() {
    location.reload();
  }
}

var dat1 = `<div class="col-sm-3">
<div
  class="shadow"
  id="cnt"
  style="width: auto; height: 40%; padding: 30px"
>
  <div>Name : `;
var dat2 = ` </div>
  <div>Zip Code :`;
var dat3 = ` </div>
  <div>Email : `;
var dat4 = `</div>
  <div>Phone No :`;
var dat5 = `</div>
  <div>Address :`;
var dat6 = `</div>
  <div>Order Time : `;
var dat7 = `</div>
  <div>Product :`;
var dat8 = `</div>
  <button
    style="margin-top: 10px"
    type="button"
    class="btn btn-primary"
    onclick="done('`;
var dat9 = `')"
  >
    Confirmed
  </button>
</div>
</div>`;
