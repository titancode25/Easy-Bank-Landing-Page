// ---- Responsive Nav Logics

let nav = document.getElementById("nv_res_1");
let humburger = document.getElementById("humburger");
let closemenubtn = document.getElementById("close_menu");

humburger.onclick = openmenu;
closemenubtn.onclick = closemenu;

function openmenu() {
    humburger.style.display = "none";
    closemenubtn.style.display = "block";
    nav.style.cssText = "transform: translate(0%,0%);"
}

function closemenu() {
    closemenubtn.style.display = "none";
    humburger.style.display = "block";
    nav.style.cssText = "transform:translate(0%,-200%);"
}