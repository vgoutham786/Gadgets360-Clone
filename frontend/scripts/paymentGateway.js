var success_popup = document.getElementById("success");
var error_popup = document.getElementById("error");
var s_close = document.getElementById("s_button");
var e_close = document.getElementById("e_button");
// var s_btn = document.getElementById("success_trigger");
// var e_btn = document.getElementById("error_trigger");
// s_btn.onclick = function () {
//   success_popup.style.display = "block";
// };
// e_btn.onclick = function () {
//   error_popup.style.display = "block";
// };
// s_close.onclick = function () {
//   success_popup.style.display = "none";
// };
// e_close.onclick = function () {
//   error_popup.style.display = "none";
// };

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  checkoutFunction();
});

// let aa=JSON.parse(localStorage.getItem("ca")) || []

// console.log(aa)

function checkoutFunction() {
  let cardname = document.getElementById("i1").value;

  let cardnum = document.querySelector("#i2").value;

  let carddate = document.querySelector("#i3").value;

  let cv = document.querySelector("#i4").value;

  console.log(cardname, cardnum, carddate, cv);

  // console.log(cardname.length)

  if (cardname.length < 1 || cardname.length > 20) {
    alert("Enter Name Correct");
  } else if (cv.length != 3) {
    alert("Enter Correct CVV");
  } else if (cardnum.length != 16) {
    alert("Enter Correct Number");
  } else {
    alert("Payment Successfull");

    //window.location.href="checkout.html";
  }

  var ask = window.confirm("Go to home page");

  if (ask) {
    // window.alert("Th");
    localStorage.setItem("cart", null)

    window.location.href = "index.html";
  }
}
