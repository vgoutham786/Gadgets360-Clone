let form = document.querySelector("form");
let submit = document.getElementById("submit");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    let email = form.email.value;

    let password = form.password.value;
    let obj = new log(email, password);
    console.log(obj)
    login(obj)

})

function log(email, password) {
    this.email = email,
        this.password = password

}


async function login(obj) {
    try {
        let res = await fetch("http://localhost:8080/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })

        let data = await res.json();
        let token = data.token;
        localStorage.setItem("token", JSON.stringify(token))
        alert("User Login Successfull");
        location.replace("index.html")
    } catch (error) {
        console.log(error)
    }
}