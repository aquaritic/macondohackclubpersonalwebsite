let multiplier = 0;
let cookies = Number(localStorage.getItem("cookies")) || 0

const cookieDisplay = document.getElementById("cookies");
const increaseBtn = document.getElementById("increase");
const buyNebula = document.getElementById("Multiplier")
cookieDisplay.textContent = cookies;

buyNebula.addEventListener("click", () => {
    if (cookies >= 100){
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
    multiplierBoost();
    saveCount();
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

function multiplierBoost() {
    cookies += multiplier;
}

function saveCount() {
    localStorage.setItem("cookies", cookies);
}