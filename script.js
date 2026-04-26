let multiplier = 0;
let cookies = Number(localStorage.getItem("cookies")) || 0

const cookieDisplay = document.getElementById("cookies");
const increaseBtn = document.getElementById("increase");
const buyNebula = document.getElementById("Multiplier")

buyNebula.addEventListener("click", () => {
    if (cookies == 100){
        cookies-=100;
        multiplier +=1;
        updateColor();
        saveCount();
        cookieDisplay.textContent = cookies;
    }
});

increaseBtn.addEventListener("click", () => {
    cookies++
    cookieDisplay.textContent = cookies;
    updateColor();
    multiplier();
    saveCount();
    console.log("clicked");
});

function updateColor() {
    if (cookies > 0) {
        cookieDisplay.style.color = "green";
    } else if (cookies < 0){
        cookieDisplay.style.color = "red";
    } else {
        cookieDisplay.style.color = "black";
    }
}

function multiplier() {
    if (multiplier == 1){
        cookies+=1;
    }
}

if (cookies === null) {
    cookies = 0;
} else {
    cookies = Number(cookies);
}

function saveCount() {
    localStorage.setItem("cookies", cookies);
}