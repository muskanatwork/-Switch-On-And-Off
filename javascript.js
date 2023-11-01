const button = document.querySelector(".bulb-button")
let i = 0;
button.addEventListener("click", function () {
    if (i === 0) {
        button.textContent = "TURN ON";
        i = 1
        button.style.backgroundColor = "chartreuse"
        let img = document.querySelector(".bulb")
        img.setAttribute("src", "bulb-on.png")
    }
    else {
        button.textContent = "TURN OFF";
        i = 0
        button.style.backgroundColor = "white"
        let img = document.querySelector(".bulb")
        img.setAttribute("src", "bulb-off.png")
    }
})
