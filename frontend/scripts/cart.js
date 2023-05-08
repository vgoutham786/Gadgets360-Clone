let cartArray = JSON.parse(localStorage.getItem("cart"));
let products = document.getElementById("prod");
let totalSum = document.getElementById("total");
let totalItems = document.getElementById("items");
let ptp = document.getElementById("ptp");

let token = JSON.parse(localStorage.getItem("token"))

display(cartArray)
function display(arr) {
    let x = ``;
    arr.map((e) => {
        x += `<div>
        <div>
        <div id="im">
            <img src="${e.image}" alt="">
        </div>
        <div>
            <h4>${e.model}</h4>
            <div id="dis">
            <div>
                <p>Brand</p>
                <p><b>${e.brand}</b></p>
                <p>OS</p>
                <p><b>${e.operating_system}</b></p>
                <p>Display Size</p>
                <p><b>${e.display_size}-inch</b></p>
            </div>
            <div>
                <p>Display Resolution</p>
                <p><b>${e.display_resolution} mm</b></p>
                <p>Processer</p>
                <p><b>${e.processor}</b></p>
                <p>Hard Disk</p>
                <p><b>${e.storage}</b></p>
            </div>
            </div>
        </div>
        </div>
        <div>
        <p class="pri"><b>PRICE: </b>₹${e.price}</p>
        <button data-id="${e._id}" class="cart">Remove</button>
        </div>
    </div>`
    });

    products.innerHTML = x;
    let cart1 = document.querySelectorAll(".cart");


    totalItems.innerText = cartArray.length;
    let sum = 0;
    cartArray.map((e) => {
        sum += Number(e.price)
    })
    totalSum.innerText = `₹${sum}`;
    console.log(cart1)

    cart1.forEach((e) => {
        e.addEventListener("click", async (e) => {

            console.log(e)
            let id = e.target.dataset.id;
            cartArray = cartArray.filter((e) => {
                if (e._id != id) {
                    return true
                }
            })

            localStorage.setItem("cart", JSON.stringify(cartArray));
            display(cartArray)
        })
    })

}

ptp.addEventListener("click", () => {
    console.log("hi")
    if (token) {
        location.replace("paymentGateway.html")
    } else {
        alert("Please login to proceed")
    }
})
