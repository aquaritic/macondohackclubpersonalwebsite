let multiplier = Number(localStorage.getItem("multiplier")) || 0;
let autoclicker = Number(localStorage.getItem("autoclicker")) || 0;
let cookies = Number(localStorage.getItem("cookies")) || 0;

const cookieDisplay = document.getElementById("cookies");
const increaseBtn = document.getElementById("increase");
const buyNebula = document.getElementById("multiplier");
const buyAutoclicker = document.getElementById("auto");
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

setInterval(() => {
    cookies += autoclicker;
    cookieDisplay.textContent = cookies;
    updateColor();
    saveCount();
}, 100);

buyAutoclicker.addEventListener("click", () => {
    if (cookies >= 1000){
        cookies -= 1000;
        autoclicker += 1;
        updateColor();
        saveCount();
        cookieDisplay.textContent = cookies;
    }
})

increaseBtn.addEventListener("click", () => {
    addCookies();
    cookieDisplay.textContent = cookies;
    updateColor();
    saveCount();
});

function updateColor() {
    if (cookies > 0) {
        cookieDisplay.style.color = "green";
    } else {
        cookieDisplay.style.color = "black";
    }
}

function addCookies() {
    cookies += 1 + multiplier;
}

function saveCount() {
    localStorage.setItem("cookies", cookies);
    localStorage.setItem("multiplier", multiplier);
    localStorage.setItem("autoclicker", autoclicker);
}