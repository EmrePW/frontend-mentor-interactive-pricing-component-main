const slider = document.querySelectorAll(".price");
const dollars = document.querySelector("#dollars");
const views = document.querySelector("#views");

const toggle = document.querySelector(".switch");

const yearly = document.querySelector(".yearly");

const slider_desktop = document.querySelector(".slider-contanier.desktop");
const slider_mobile = document.querySelector(".slider-contanier.mobile");


if(window.innerWidth < 500) {
    yearly.setAttribute("data-text", "-25%");
    slider_desktop.hidden = true;
    slider_mobile.hidden = false;
}

if(window.innerWidth >= 500){
    slider_mobile.hidden = true;
}

window.addEventListener("resize", () => {
    if(window.innerWidth < 500) {
        yearly.setAttribute("data-text", "-25%");
        slider_desktop.hidden = true;
        slider_mobile.hidden = false;

        return;
    }
    yearly.setAttribute("data-text", "25% discount");
    slider_mobile.hidden = true;
    slider_desktop.hidden = false;
})

slider.forEach((element) => {
    element.addEventListener("input", (e) => {
        let sliderValue = e.target.value;
        dollars.innerText = '$' + sliderValue.toString() + ".00";
        views.innerText = (sliderValue / 16) * 100;
    
        const progress = (sliderValue / element.max) * 100;
    
        element.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) ${progress}%, #ccc ${progress}%)`;
    })
})

toggle.addEventListener("click", () => {
    if(toggle.classList.contains("active")) {
        toggle.classList.remove("active");
        return;
    }
    toggle.classList.add("active");
})