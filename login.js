let regExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

var tet = window.location.hash.substring(1);
if (!tet) {
  tet = "";
}

function checkvalid() {
  val = document.getElementById("email").value;
  if (val.match(regExp)) {
    document.getElementById("frm").innerHTML = pass1 + val + pass2;
  } else {
    console.log("false");
    document.getElementById("error").innerHTML =
      "Please enter valid Email id !";
  }
}

// Starting
document.getElementById(
  "frm"
).innerHTML = `<h4 style=";text-align: center;margin-top: 30%;font-family: 'Lato', sans-serif;" class="subtitle is-4">Verifying your login. Please wait..</h4>`;

firebase.auth().onAuthStateChanged((firebaseUser) => {
  if (firebaseUser) {
    window.open("./index.html#" + tet, "_self");
  } else {
    document.getElementById("frm").innerHTML = emal;
  }
});

function backtoemail() {
  setTimeout(doSomething, 300);
  document.getElementById(
    "frm"
  ).innerHTML = `<h4 style=";text-align: center;margin-top: 30%;font-family: 'Lato', sans-serif;" class="subtitle is-4">Loading..</h4>`;
  function doSomething() {
    document.getElementById("frm").innerHTML = emal;
  }
}

function cancelsignin() {
  window.open("./index.html", "_self");
}

function signin() {
  em = document.getElementById("email").value;
  pa = document.getElementById("pass").value;

  document.getElementById("error").innerHTML =
    "working on your data..Please wait..";

  const promise = firebase.auth().signInWithEmailAndPassword(em, pa);
  promise.catch((e) => outer(e.message));

  function outer(val) {
    document.getElementById("error").innerHTML = val;
  }
}

function createaccount() {
  em = document.getElementById("email").value;
  document.getElementById("error").innerHTML =
    "working on your data..Please wait..";

  if (em.match(regExp)) {
    ps = document.getElementById("ps").value;
    pc = document.getElementById("pc").value;

    if (ps != pc) {
      document.getElementById("error").innerHTML =
        "Password and Confirm must be same!";
      return 0;
    }

    const promise = firebase.auth().createUserWithEmailAndPassword(em, ps);
    promise.catch((e) => outer(e.message));

    function outer(val) {
      document.getElementById("error").innerHTML = val;
    }
  } else {
    document.getElementById("error").innerHTML =
      "Please enter valid Email id !";
    return 0;
  }
}

function gottocreate() {
  setTimeout(doSomething, 800);
  document.getElementById(
    "frm"
  ).innerHTML = `<h4 style=";text-align: center;margin-top: 30%;font-family: 'Lato', sans-serif;" class="subtitle is-4">Loading..</h4>`;

  function doSomething() {
    document.getElementById("frm").innerHTML = cret;
  }
}

function resetpass() {
  em = document.getElementById("email").value;

  if (em.match(regExp)) {
    document.getElementById("error").innerHTML =
      "working on your data..Please wait..";
    document.getElementById("conb1").disabled = true;
    document.getElementById("conb2").disabled = true;

    const promise = firebase
      .auth()
      .sendPasswordResetEmail(em)
      .then(function () {
        document.getElementById("frm").innerHTML =
          `<h5 style=";text-align: center;margin-top: 30%;font-family: 'Lato', sans-serif;" class="subtitle is-4">Password Reset link has been mailed to your address ` +
          em +
          ` .Visit the link to reset you password. </h5>`;
        document.getElementById("frm").innerHTML =
          document.getElementById("frm").innerHTML +
          `<button class="cstmbtn2" style="margin-top: 5%;width: 100%;border-radius: 0%;border-width: 1px; font-family: 'Lato', sans-serif;" onclick = "backtoemail()" >Back to Signin</button>`;
      });
    promise.catch((e) => outer(e.message));

    function outer(val) {
      document.getElementById("error").innerHTML = val;
      document.getElementById("conb1").disabled = false;
      document.getElementById("conb2").disabled = false;
    }
  } else {
    document.getElementById("error").innerHTML =
      "Please enter valid Email id !";
    return 0;
  }
}

function gotoReset() {
  setTimeout(doSomething, 300);
  document.getElementById(
    "frm"
  ).innerHTML = `<h4 style=";text-align: center;margin-top: 30%;font-family: 'Lato', sans-serif;" class="subtitle is-4">Loading..</h4>`;

  function doSomething() {
    document.getElementById("frm").innerHTML = rst;
  }
}

var rst = `
<h4 style="text-align: center;margin-top: 5%;font-family: 'Lato', sans-serif;" class="subtitle is-4" >RESET PASSWORD</h4>
            
<p style="text-align: center;color: #3a3a3a;" >Please fill your email id </p>
<input id ="email"style="font-size: 18px;margin-top: 2%;padding-left: 20px;width: 100%;height: 50px;border-color: rgb(46, 46, 46);" type="email" placeholder="Email">
<p style="text-align: center;color: tomato;" id="error"></p>
<button id = "conb1"class="cstmbtn" style="margin-top: 5%;width: 100%;border-radius: 0%;border-width: 1px; font-family: 'Lato', sans-serif;" onclick="resetpass()">RESET PASSWORD</button>
<button id = "conb2" class="" style="background-color: #f5f5f5;margin: 4px 2px;padding: 16px 32px;width: 100%;border-radius: 0%;border-width: 0px; font-family: 'Lato', sans-serif;font-size: 15px;" onclick="backtoemail()">CANCEL</button>
      
`;

var cret = `
            
<h4 style="text-align: center;margin-top: 5%;font-family: 'Lato', sans-serif;" class="subtitle is-4">CREATE YOUR ACCOUNT</h4>
<input id ="email"style="font-size: 18px;margin-top: 5%;padding-left: 20px;width: 100%;height: 50px;border-color: rgb(46, 46, 46);" type="email" placeholder="Email">

<input id ="ps"style="font-size: 18px;margin-top: 5%;padding-left: 20px;width: 100%;height: 50px;border-color: rgb(46, 46, 46);" type="password" placeholder="Password">
<input id ="pc"style="font-size: 18px;margin-top: 5%;padding-left: 20px;width: 100%;height: 50px;border-color: rgb(46, 46, 46);" type="password" placeholder="Confirm Password">

<p style="text-align: center;color: tomato;" id="error"></p>


<button class="cstmbtn" style="margin-top: 5%;width: 100%;border-radius: 0%;border-width: 1px; font-family: 'Lato', sans-serif;" onclick="createaccount()">CREATE ACCOUNT</button>
<button class="" style="background-color: #f5f5f5;margin: 4px 2px;padding: 16px 32px;width: 100%;border-radius: 0%;border-width: 0px; font-family: 'Lato', sans-serif;font-size: 15px;" onclick="backtoemail()">CANCEL</button>

`;

var emal = `
            <h4 style="text-align: center;margin-top: 5%;font-family: 'Lato', sans-serif;" class="subtitle is-4">PLEASE SIGN IN</h4>
            <input id ="email"style="font-size: 18px;margin-top: 2%;padding-left: 20px;width: 100%;height: 50px;border-color: rgb(46, 46, 46);" type="email" placeholder="Email">
            <p style="text-align: center;color: tomato;" id="error"></p>
            <button class="cstmbtn" style="margin-top: 5%;width: 100%;border-radius: 0%;border-width: 1px; font-family: 'Lato', sans-serif;" onclick="checkvalid()">NEXT</button>
            <button class="" style="background-color: #f5f5f5;margin: 4px 2px;padding: 16px 32px;width: 100%;border-radius: 0%;border-width: 0px; font-family: 'Lato', sans-serif;font-size: 15px;" onclick="cancelsignin()">CANCEL</button>
            <div  style="text-align: center;margin: 15px;">
                <a class="txtan" style="padding: 8px;" onclick="gotoReset()" >  FORGOT YOUR PASSWORD?   </a>
            </div>
            <div  style="text-align: center;margin: 15px;">
                <a class="txtan" style="padding: 8px;font-size: 20px;" onclick ="gottocreate()">  Don't have an account? Join Now   </a>
            </div>
`;
var pass1 = `
            <h4 style="text-align: center;margin-top: 5%;font-family: 'Lato', sans-serif;" class="subtitle is-4">PLEASE SIGN IN</h4>
            <input id ="email"style="background-color:#ebebeb ; font-size: 18px;margin-top: 2%;padding-left: 20px;width: 100%;height: 50px;border-color: rgba(46, 46, 46,0);" type="email" disabled value="

`;
var pass2 = `
            " placeholder="Email">
            <input id ="pass" style="font-size: 18px;margin-top: 2%;padding-left: 20px;width: 100%;height: 50px;border-color: rgb(46, 46, 46);" type="password" placeholder="Password">
            <p style="text-align: center;color: tomato;" id="error"></p>
            <button class="cstmbtn2" style="margin-top: 5%;width: 100%;border-radius: 0%;border-width: 1px; font-family: 'Lato', sans-serif;" onclick = "signin()" >SIGN IN</button>
            <button class="" style="background-color: #f5f5f5;margin: 4px 2px;padding: 16px 32px;width: 100%;border-radius: 0%;border-width: 0px; font-family: 'Lato', sans-serif;font-size: 15px;" onclick = "backtoemail()" >BACK</button>
            <div  style="text-align: center;margin: 15px;">
            <a class="txtan" style="padding: 8px;" onclick="gotoReset()" >  FORGOT YOUR PASSWORD?   </a>
            </div>
            <div  style="text-align: center;margin: 15px;">
            <a class="txtan" style="padding: 8px;font-size: 20px;" onclick ="gottocreate()">  Don't have an account? Join Now   </a>
            </div>
`;
