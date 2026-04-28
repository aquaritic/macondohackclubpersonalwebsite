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
        cookies-=100*(1+multiplier);
        multiplier +=1;
        updateColor();
        saveCount();
        cookieDisplay.textContent = "Atoms: " + cookies;
        multiDisplay.textContent = "Multiplier: " + multiplier;
        buyNebula.textContent = "Buy Nebula - Cost: " + 100*(1+multiplier);
    }
});

setInterval(() => {
    cookies += autoclicker;
    cookieDisplay.textContent = "Atoms: " + cookies;
    updateColor();
    saveCount();
}, 800);

buyAutoclicker.addEventListener("click", () => {
    if (cookies >= 1000*(1+autoclicker)){
        cookies -= 1000*(1+autoclicker);
        autoclicker += 1;
        updateColor();
        saveCount();
        cookieDisplay.textContent = "Atoms: " + cookies;
        autoDisplay.textContent = "Autoclicks: " + autoclicker;
        buyAutoclicker.textContent = "Buy Autoclicker - Cost: " + 1000*(1+autoclicker);
    }
})

increaseBtn.addEventListener("click", () => {
    addCookies();
    cookieDisplay.textContent = "Atoms: " + cookies;
    updateColor();
    saveCount();
});

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

cookieDisplay.style.color = "white";