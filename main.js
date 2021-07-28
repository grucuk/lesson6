let getID = id => document.getElementById(id);

//Умови перевірок//

let firstregExp = /^[A-Z]+[a-z]{2,20}$/;
let lastregExp = /^[A-Z]+[a-z]{2,20}$/;
let emailregExp = /^[\w_#&-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let parolregExp = /^\w{8,12}$/;


// Перевірка імені //

getID('first').oninput = function () {
    let testfirst = firstregExp.test(getID('first').value)
    if (testfirst) {
        first.style.paddingTop = '10px';
        first.style.border = '2px solid green ';
        span1.style.visibility = 'visible';
        span12.style.visibility = 'hidden';
        first.style.background = 'url("icons8-checkmark-20.png") no-repeat 220px white';

    } else {
        first.style.paddingTop = '10px';
        first.style.border = '2px solid red ';
        span1.style.visibility = 'visible';
        span12.style.visibility = 'visible';
        first.style.background = 'url("icons8-delete-20.png") no-repeat 220px white';
    }
}

// Перевірка прізвища //

getID('last').oninput = function () {
    let testlast = lastregExp.test(getID('last').value)
    if (testlast) {
        last.style.paddingTop = '10px';
        last.style.border = '2px solid green ';
        span2.style.visibility = 'visible';
        span22.style.visibility = 'hidden';
        last.style.background = 'url("icons8-checkmark-20.png") no-repeat 220px white';

    } else {
        last.style.paddingTop = '10px';
        last.style.border = '2px solid red ';
        span2.style.visibility = 'visible';
        span22.style.visibility = 'visible';
        last.style.background = 'url("icons8-delete-20.png") no-repeat 220px white';

    }
}

// Перевірка електронки //

getID('email').oninput = function () {
    let testemail = emailregExp.test(getID('email').value)
    if (testemail) {
        email.style.paddingTop = '10px';
        email.style.border = '2px solid green ';
        span3.style.visibility = 'visible';
        span32.style.visibility = 'hidden';
        email.style.background = 'url("icons8-checkmark-20.png") no-repeat 220px white';
    } else {
        email.style.paddingTop = '10px';
        email.style.border = '2px solid red ';
        span3.style.visibility = 'visible';
        span32.style.visibility = 'visible';
        email.style.background = 'url("icons8-delete-20.png") no-repeat 220px white';
    }
}

// Перевірка паролю //

getID('parol').oninput = function () {
    let testparol = parolregExp.test(getID('parol').value)
    if (testparol) {
        parol.style.paddingTop = '10px';
        parol.style.border = '2px solid green ';
        span4.style.visibility = 'visible';
        span42.style.visibility = 'hidden';
        parol.style.background = 'url("icons8-checkmark-20.png") no-repeat 220px white';
    } else {
        parol.style.paddingTop = '10px';
        parol.style.border = '2px solid red ';
        span4.style.visibility = 'visible';
        span42.style.visibility = 'visible';
        parol.style.background = 'url("icons8-delete-20.png") no-repeat 220px white';
    }
}

// Внесення даних в local Storage

let fn = [];
let sn = [];
let pochta = [];
let parol2 = [];
const fname = document.querySelector("#first");
const lname = document.querySelector("#last");
const email = document.querySelector("#email");
const pass = document.querySelector("#parol");
let users = [];

function signUp() {
    let user = {};
    user.firstname = fname.value;
    user.lastname = lname.value;
    user.email = email.value;
    user.password = pass.value;
    if (user.firstname !== "" && user.lastname !== "" && user.email !== "" && user.password !== "" &&
        firstregExp.test(getID('first').value) && lastregExp.test(getID('last').value) && emailregExp.test(getID('email').value) &&
        parolregExp.test(getID('parol').value)) {
        if (localStorage.length > 0 && localStorage.getItem("users")) {
            users = JSON.parse(localStorage.getItem("users"));
            let u = JSON.parse(localStorage.getItem("users"));
            for (let i in u) {
                pochta.push(u[i]["email"]);
            }

        }
        if (!pochta.some(x => x === email.value)) {
            users.push(user);
            window.location.reload();
        } else {
            span32.textContent = "This email is already exist";
            span32.style.visibility = 'visible';
            email.style.backgroundImage = 'url("icons8-delete-20.png")';
            email.style.backgroundRepeat = 'no-repeat';
            email.style.backgroundPosition = ' 220px';
        }
        localStorage.setItem("users", JSON.stringify(users));
    }

}

function signUp2() {
    document.querySelector('.forma').style.display = 'none';
    document.querySelector('.forma2').style.display = 'block';
    getID('great').style.display = 'none';
    document.querySelector('#span_42').style.visibility = 'hidden';
}

function signIn() {

    getID('great').style.display = 'block';
}

function ss1() {
    document.querySelector('.forma').style.display = 'none';
    document.querySelector('.forma2').style.display = 'block';
}

function ss2() {
    document.querySelector('.forma').style.display = 'block';
    document.querySelector('.forma2').style.display = 'none';

}

// Вхід в обліковий запис

function sign() {

    let k = JSON.parse(localStorage.getItem("users"));
    for (let j in k) {
        pochta.push(k[j]["email"]);
        parol2.push(k[j]["password"]);
        fn.push(k[j]["firstname"])
        sn.push(k[j]["lastname"])
    }

    if (pochta.some(y => y === document.querySelector("#email2").value)) {
        let p = pochta.indexOf(document.querySelector("#email2").value);

        if (parol2[p] === document.querySelector("#parol2").value) {
            document.querySelector(".fn3").textContent = `${fn[p]} ${sn[p]} `;
            document.querySelector(".em").textContent = `${pochta[p]} `;
            document.querySelector('.forma2').style.display = 'none';
            document.querySelector('#great').style.display = 'block';
            document.querySelector("#email2").value = "";
            document.querySelector("#parol2").value = "";
        } else {
            document.querySelector('#span_42').style.visibility = 'visible';
        }
    } else {
        document.querySelector('#span_42').style.visibility = 'visible';
    }
}