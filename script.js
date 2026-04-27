let multiplier = Number(localStorage.getItem("multiplier")) || 0;
let autoclicker = Number(localStorage.getItem("autoclicker")) || 0;
let cookies = Number(localStorage.getItem("cookies")) || 0;
let multi = Number(localStorage.getItem("M")) || 0;
let aclicks = Number(localStorage.getItem("A")) || 0;

const cookieDisplay = document.getElementById("cookies");
const increaseBtn = document.getElementById("increase");
const buyNebula = document.getElementById("multiplier");
const buyAutoclicker = document.getElementById("auto");
const autoDisplay = document.getElementById("A");
const multiDisplay = document.getElementById("M");

buyNebula.addEventListener("click", () => {
    if (cookies >= 100*(1+multiplier)){
        cookies-=100;
        multiplier +=1;
        updateColor();
        saveCount();
        cookieDisplay.textContent = cookies;
        multiDisplay.textContent = multiplier;
    }
});

setInterval(() => {
    cookies += autoclicker;
    cookieDisplay.textContent = cookies;
    updateColor();
    saveCount();
}, 800);

buyAutoclicker.addEventListener("click", () => {
    if (cookies >= 1000*(1+autoclicker)){
        cookies -= 1000;
        autoclicker += 1;
        updateColor();
        saveCount();
        cookieDisplay.textContent = cookies;
        autoDisplay.textContent = autoclicker;
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
    localStorage.setItem("M", multiplier);
    localStorage.setItem("A", autoclicker);
}