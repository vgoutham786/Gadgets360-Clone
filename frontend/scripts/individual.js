let userID = JSON.parse(localStorage.getItem("userID"));
let products = document.getElementById("prod");
let cartArray = JSON.parse(localStorage.getItem("cart"));
detail()
async function detail() {
    let res = await fetch(`https://tan-super-horse.cyclic.app/laptops/${userID}`)
    let e = await res.json();
    console.log(e)
    let x = `<div>
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
           <p>Model</p>
           <p><b>${e.model}</b></p>
           <p>Processor</p>
           <p><b>${e.processor}-inch</b></p>
           <p>Graphics</p>
           <p><b>${e.graphics}</b></p>
           <p>Memory</p>
           <p><b>${e.memory}</b></p>
           <p>Storage</p>
           <p><b>${e.storage}-inch</b></p>
           <p>Display Size</p>
           <p><b>${e.display_size}-inch</b></p>
       </div>
       <div>
           <p>Display Resolution</p>
           <p><b>${e.display_resolution} mm</b></p>
           <p>Battery Life</p>
           <p><b>${e.battery_life}</b></p>
           <p>Weigth</p>
           <p><b>${e.weight}</b></p>
           <p>OS</p>
           <p><b>${e.operating_system}</b></p>
           <p>Rating</p>
           <p><b>${e.rating}</b></p>
           <p>Reviews</p>
           <p><b>${e.reviews}-inch</b></p>
           <p>Warranty</p>
           <p><b>${e.warranty}-inch</b></p>
       </div>
       </div>
   </div>
   </div>
   <div>
   <p class="pri"><b>PRICE: </b>₹${e.price}</p>
   <button data-id="${e._id}" class="cart">Add To Cart</button>
   </div>
</div>`


    products.innerHTML = x;
    let cart1 = document.querySelectorAll(".cart");


    console.log(cart1)

    cart1.forEach((e) => {
        e.addEventListener("click", async (e) => {
            console.log(e)
            let id = e.target.dataset.id;
            let res = await fetch(`https://tan-super-horse.cyclic.app/laptops/${id}`)
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
                location.replace("./cart.html")
            } else {
                alert("Already added to cart")
            }


        })
    })
}