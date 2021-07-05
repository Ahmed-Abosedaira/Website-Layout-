// navigation bar functionality

// variables

 const navBarButton = document.querySelector("#show");
 const navBarHideButton = document.querySelector("#hide");

//  event listener and functions

navBarButton.addEventListener("click", () =>{
    document.querySelector("#nav-bar").classList.add("nav-active")
})
navBarHideButton.addEventListener("click", () =>{
    document.querySelector("#nav-bar").classList.remove("nav-active")
})

////////////////////////////////////////////

// variable

let section = localStorage.getItem("section");

const HomeSecBtn = document.querySelector("#home");
const servicesSecBtn = document.querySelector("#services");
const portfolioSecBtn = document.querySelector("#portfolio");
const aboutSecBtn = document.querySelector("#about");
const contactSecBtn = document.querySelector("#contact");

// functions

const showHomeSec = () => {
    document.querySelector("#landing-section").setAttribute("class", "sec-active")
    section = localStorage.setItem("section", "Home-sec")
}
const showServicesSec = () => {
    document.querySelector("#services-section").setAttribute("class", "sec-active")
    section = localStorage.setItem("section", "Services-sec")
}
const showPortfolioSec = () => {
    document.querySelector("#portfolio-section").setAttribute("class", "sec-active")
    section = localStorage.setItem("section", "Portfolio-sec")
}
const showAboutSec = () => {
    document.querySelector("#about-section").setAttribute("class", "sec-active")
    section = localStorage.setItem("section", "About-sec")
}
const showContactSec = () => {
    document.querySelector("#contact-section").setAttribute("class", "sec-active")
    section = localStorage.setItem("section", "contact-sec")
}
const hideSections = () => {
    document.querySelector("#landing-section").removeAttribute("class", "sec-active")
    document.querySelector("#services-section").removeAttribute("class", "sec-active")
    document.querySelector("#portfolio-section").removeAttribute("class", "sec-active")
    document.querySelector("#about-section").removeAttribute("class", "sec-active")
    document.querySelector("#contact-section").removeAttribute("class", "sec-active")
}
const hideNavBar = () => {
    document.getElementById("nav-bar").classList.remove("nav-active")
}
// check saved settings

if (section === "Home-sec"){
    hideSections();
    showHomeSec();
} else if (section === "Services-sec"){
    hideSections();
    showServicesSec();
} else if (section === "Portfolio-sec"){
    hideSections();
    showPortfolioSec();
} else if (section === "About-sec"){
    hideSections();
    showAboutSec();
} else if (section === "contact-sec"){
    hideSections();
    showContactSec();
}

// event listener

HomeSecBtn.addEventListener("click", () => {
    hideSections();
    showHomeSec();
    hideNavBar();
    localStorage.getItem("section")
})
servicesSecBtn.addEventListener("click", () =>{
    hideSections();
    showServicesSec();
    hideNavBar();    
    localStorage.getItem("section")
})
portfolioSecBtn.addEventListener("click", () => {
    hideSections();
    showPortfolioSec();
    hideNavBar();
    localStorage.getItem("section")
})
aboutSecBtn.addEventListener("click", () => {
    hideSections();
    showAboutSec();
    hideNavBar();
    localStorage.getItem("section")
})
contactSecBtn.addEventListener("click", () => {
    hideSections();
    showContactSec();
    hideNavBar();
    localStorage.getItem("section")
})

//////////////////////////////////////////////////
// darkmode

// variables

let darkMode = localStorage.getItem("darkmode");

const darkModeBtn = document.querySelector("#dark-mode");

// functions

const enableDarkMode = () => {

    document.body.classList.add("dark-mode");
    localStorage.setItem("darkmode", "enabled");

}
const disableDarkMode = () => {

    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkmode", "disabled");

}

// check saved settings

if(darkMode === "enabled"){
    enableDarkMode();
    localStorage.getItem("darkmode")
}

// event listeners

darkModeBtn.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkmode")
    if( darkMode !== "enabled"){
        enableDarkMode();
    } else{
        disableDarkMode();
    }
})


