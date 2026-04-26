let Multiplier = 0;
let cookies = Number(localStorage.getItem("cookies")) || 0

const cookieDisplay = document.getElementById("cookies");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const plusFiveBtn = document.getElementById("plusFive");
const minusFiveBtn = document.getElementById("minusFive");
const buyNebula = document.getElementById("Multiplier")
const resetBtn = document.getElementById("reset");

buyNebula.addEventListener("click", () => {
    if (cookies > 0){
        cookies-=100;
        Multiplier +=1;
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

decreaseBtn.addEventListener("click", () => {
    if (cookies > 0){
        cookies--;
        cookieDisplay.textContent = cookies;
    }
    updateColor();
    saveCount();
});

plusFiveBtn.addEventListener("click", () => {
    cookies+=5;
    cookieDisplay.textContent = cookies;
    updateColor();
    multiplier();
    saveCount();
});

minusFiveBtn.addEventListener("click", () => {
    if (cookies > 0){
    cookies-=5;
    cookieDisplay.textContent = cookies;
    }
    updateColor();
    saveCount();
});

resetBtn.addEventListener("click", () => {
    cookies = 0;
    cookieDisplay.textContent = cookies;
    updateColor();
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

function multiplier() {
    if (Multiplier == 1){
        cookies+=1;
    }
}

document.addEventListener("keydown"), (event) => {
    if (event.key === "ArrowUp") {
        cookies++;
        multiplier();
    } else if (event.key === "ArrowDown") {
        cookies--;
    }

    cookieDisplay.textContent = cookies;
    updateColor();
    saveCount();
}

if (cookies === null) {
    cookies = 0;
} else {
    cookies = Number(cookies);
}

function saveCount() {
    localStorage.setItem("cookies", cookies);
}