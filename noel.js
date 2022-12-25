const loginForm = document.getElementById("form-login");
const userNameRight = "admin";
const passwordRight = "admin";
const phoneRight = "123456";
const EmailRight = "123@gmail.com";
const addressRight = "vn";

loginForm.addEventListener("submit", function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    checkUser(username, password, phone, email, address);
});

function checkUser(username, password, phone, email, address) {
    if (username == userNameRight && password == passwordRight && phone == phoneRight && email == EmailRight && address == addressRight) {
        alert(" Login success !!");
    } else {
        alert("Login failed !!");
    }
}

const listBuyButton = document.getElementsByClassName("form-button2");

listBuyButton[0].addEventListener("click", function () {
    increaseCart();
})

listBuyButton[1].addEventListener("click", function () {
    increaseCart();
})

listBuyButton[2].addEventListener("click", function () {
    increaseCart();
})

listBuyButton[3].addEventListener("click", function () {
    increaseCart();
})

function increaseCart() {
    var cart = document.getElementById("cart").innerText;
    cart++;
    document.getElementById("cart").innerText = cart;
}




