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
const buyProto = document.getElementById("proto");
const tauri = document.getElementById("tauri");
const low = document.getElementById("LM");
const high = document.getElementById("HM");

buyNebula.addEventListener("click", () => {
    if (cookies >= 100*(1+multiplier)){
        cookies-=100*(1+multiplier);
        multiplier +=1;
        saveCount();
        saveDisplay();
    }
});

buyProto.addEventListener("click", () => {
    if (cookies >= 10000){
        cookies -= 10000;
        multiplier +=1;
        saveCount();
        saveDisplay();
    }
});

tauri.addEventListener("click", () => {
    if (cookies >= 50000){
        cookies -= 50000;
        multiplier += 5;
        saveCount();
        saveDisplay();
    }
});

low.addEventListener("click", () => {
    if(cookies >= 100000){
        cookies-= 100000
        multiplier+= 10;
        saveCount();
        saveDisplay();
    }
});

high.addEventListener("click", () => {
    if(cookies >=150000){
        cookies-=150000;
        multiplier+=25;
        saveCount();
        saveDisplay();
    }
});

setInterval(() => {
    cookies += autoclicker;
    saveDisplay();
    saveCount();
}, 800);

buyAutoclicker.addEventListener("click", () => {
    if (cookies >= 1000*(1+autoclicker)){
        cookies -= 1000*(1+autoclicker);
        autoclicker += 1;
        saveCount();
        saveDisplay();
    }
});

increaseBtn.addEventListener("click", () => {
    addCookies();
    saveDisplay();
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

function saveDisplay() {
    cookieDisplay.style.color = "black";
    cookieDisplay.textContent = "Atoms: " + cookies;
    multiDisplay.textContent = "Multiplier: " + multiplier;
    autoDisplay.textContent = "Autoclicks: " + autoclicker;
    buyAutoclicker.textContent = "Buy Autoclicker - Cost: " + 1000*(1+autoclicker);
    buyNebula.textContent = "Buy Nebula - Cost: " + 100*(1+multiplier);
    buyProto.textContent = "Buy Protostar - Cost: " + 10000;
    tauri.textContent = "Initiate T-Tauri Phase - Cost: " + 50000;
    low.textContent = "Buy Low Mass Star - Cost: " + 100000;
    high.textContent = "Buy High Mass Star - Cost: " + 150000;
}

saveDisplay();
