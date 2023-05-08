let products = document.getElementById("prod");
let cartArray = JSON.parse(localStorage.getItem("cart")) || [];
let htl = document.getElementById("htl");
let lth = document.getElementById("lth")
data()

async function data() {
    try {
        let res = await fetch("http://localhost:8080/laptops/");
        let data = await res.json();
        let array = data.laptops;
        display(array)
    } catch (error) {
        console.log(error)
    }
}

htl.addEventListener("click", async () => {
    try {
        let res = await fetch("http://localhost:8080/laptops/?sort=des");
        let data = await res.json();
        let array = data.laptops;
        display(array)
    } catch (error) {
        console.log(error)
    }
})
lth.addEventListener("click", async () => {
    try {
        let res = await fetch("http://localhost:8080/laptops/?sort=asc");
        let data = await res.json();
        let array = data.laptops;
        display(array)
    } catch (error) {
        console.log(error)
    }
})

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
        <button data-id="${e._id}" class="cart">Add To Cart</button>
        </div>
    </div>`
    });

    products.innerHTML = x;
    let cart1 = document.querySelectorAll(".cart");

    console.log(cart1)

    cart1.forEach((e) => {
        e.addEventListener("click", async (e) => {
            console.log(e)
            let id = e.target.dataset.id;
            let res = await fetch(`http://localhost:8080/laptops/${id}`)
            let data = await res.json();


            let flag = true;
            cartArray.map((e) => {
                if (e._id == id) {
                    flag = false
                }
            })
            if (flag) {
                cartArray.push(data);
                localStorage.setItem("cart", JSON.stringify(cartArray));
                alert("Added to cart");
            } else {
                alert("Already added to cart")
            }

            // location.replace("./cart.html")
        })
    })

}

