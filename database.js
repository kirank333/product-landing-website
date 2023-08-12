const firebaseConfig = {
    apiKey: "AIzaSyDDOjK_HT2Q4zdyqfnLpCpk2IGKAlna1cQ",
    authDomain: "orderform-4b4b9.firebaseapp.com",
    databaseURL: "https://orderform-4b4b9-default-rtdb.firebaseio.com",
    projectId: "orderform-4b4b9",
    storageBucket: "orderform-4b4b9.appspot.com",
    messagingSenderId: "558944700393",
    appId: "1:558944700393:web:e34f22bd1221383db0ed78",
    measurementId: "G-PZJWRYJP82"
  };
//initialize firebase
firebase.initializeApp(firebaseConfig);

//reference your database 
var contactformDB = firebase.database().ref('Orderform');

document.getElementById('Orderform').addEventListener("submit", submitform);


function submitform(e) {
    e.preventDefault();

    var name = getElementVal('firstname');
    var emailid = getElementVal('lastname');
    var email = getElementVal('email');
    var pass = getElementVal('pass');
    var msg = getElementVal('msg');

    console.log(firstname,lastname, email,pass, msg);
    saveMessages(firstname,lastname, email, msg);

    //enable alert 

    document.querySelector('.alert').style.display = 'block';

    //remove the alert 
    setTimeout(() => {
        document.querySelector('.alert').style.display = 'none';

    }, 3000);

    //reset the form 
    document.getElementById("Orderform").reset();
}

const saveMessages = (firstname,lastname, email,pass, msg) => {
    var newOrderform = OrderformDB.push();

    newOrderform.set({
        firstname: firstname,
        lastname:lastname,
        email: email,
        pass:pass,
        msg: msg,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
}