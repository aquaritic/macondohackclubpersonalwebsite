let cookies = 0;
let Grandma = 0;
let cookies = localStorage.getItem("cookies");

const cookieDisplay = document.getElementById("cookies");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const plusFiveBtn = document.getElementById("plusFive");
const minusFiveBtn = document.getElementById("minusFive");
const resetBtn = document.getElementById("reset");

buyGrandma.addEventListener("click", () => {
    if (cookies > 0){
        cookies-=100;
        Grandma +=1;
        updateColor();
        saveCount();
    }
});

increaseBtn.addEventListener("click", () => {
    cookies++
    countDisplay.textContent = cookies;
    updateColor();
    saveCount();
});

decreaseBtn.addEventListener("click", () => {
    if (cookies > 0){
        cookies--;
        countDisplay.textContent = cookies;
    }
    updateColor();
    saveCount();
});

plusFiveBtn.addEventListener("click", () => {
    cookies+=5;
    countDisplay.textContent = cookies;
    updateColor();
    saveCount();
});

minusFiveBtn.addEventListener("click", () => {
    if (cookies > 0){
    cookies-=5;
    countDisplay.textContent = cookies;
    }
    updateColor();
    saveCount();
});

resetBtn.addEventListener("click", () => {
    cookies = 0;
    countDisplay.textContent = cookies;
    updateColor();
    saveCount();
});

function updateColor() {
    if (cookies > 0) {
        countDisplay.style.color = "green";
    } else if (cookies < 0){
        countDisplay.style.color = "red";
    } else {
        countDisplay.style.color = "black";
    }
}

document.addEventListener("keydown"), (event) =>{
    if (event.key === "ArrowUp)") {
        count++;
    } else if (event.key === "ArrownDown") {
        count--;
    }

    countDisplay.textContent = count;
    updateColor();
    saveCount();
}

if (count === null) {
    count = 0;
} else {
    count = Number(count);
}

function saveCount() {
    localStorage.setItem("count", count);
}