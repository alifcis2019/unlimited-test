// hide upper navbar

const header = document.getElementById("header");
const upperbar = document.querySelector(".upperNav");

let prevScrollPos = window.scrollY;

window.onscroll = function () {
    const currentScrollPos = window.scrollY;
    const upperbarHeight = upperbar.clientHeight;

    if (prevScrollPos > currentScrollPos) {
        // User is scrolling up
        header.style.top = "0";
    } else {
        // User is scrolling down
        header.style.top = `-${upperbarHeight}px`;
    }
    prevScrollPos = currentScrollPos;
};


/**
 * Preloader
 */
const preloader = document.querySelector("#preloader");
if (preloader) {
    document.querySelector("body").style.overflow = "hidden";
    window.addEventListener("load", () => {
        document.querySelector("body").style.overflow = "auto";
        preloader.remove();
    });
}




// initialize aos library
AOS.init();



// services drop down
let opened = false
document.querySelector(".services-tab").addEventListener('click', () => {
    if (!opened) {
        document.querySelector(".services__dropDown").style.display = "flex"
        opened = true
    }
    else {
        document.querySelector(".services__dropDown").style.display = "none"
        opened = false
    }
})

let opened_mobile = false
document.querySelector(".services-tab-mobile").addEventListener('click', () => {
    if (!opened_mobile) {
        document.querySelector(".services__dropDown-mobile").style.display = "flex"
        opened_mobile = true
    }
    else {
        document.querySelector(".services__dropDown-mobile").style.display = "none"
        opened_mobile = false
    }
})


