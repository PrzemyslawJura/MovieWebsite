const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

var nav = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

function openNav() {
    if(nav == false && screen.width > 1200) {
        document.getElementById("mySidenav").style.width = "17%";
        document.getElementById("sidenav1").style.opacity = "1";
        document.getElementById("sidenav2").style.opacity = "1";
        document.getElementById("sidenav3").style.opacity = "1";
        document.getElementById("sidenav4").style.opacity = "1";
        document.getElementById("sidenav5").style.opacity = "1";
        document.getElementById("sidenav6").style.opacity = "1";
        document.getElementById("sidenav7").style.opacity = "1";
        document.getElementById("container").style.marginLeft = "17%";
        nav = true;
    }
    else if(nav == true) {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("sidenav1").style.opacity = "0";
        document.getElementById("sidenav2").style.opacity = "0";
        document.getElementById("sidenav3").style.opacity = "0";
        document.getElementById("sidenav4").style.opacity = "0";
        document.getElementById("sidenav5").style.opacity = "0";
        document.getElementById("sidenav6").style.opacity = "0";
        document.getElementById("sidenav7").style.opacity = "0";
        document.getElementById("container").style.marginLeft = "0";
        nav = false;
    }
    else if(nav == false && screen.width < 1200)
    {
        document.getElementById("mySidenav").style.width = "100%";
        document.getElementById("sidenav1").style.opacity = "1";
        document.getElementById("sidenav2").style.opacity = "1";
        document.getElementById("sidenav3").style.opacity = "1";
        document.getElementById("sidenav4").style.opacity = "1";
        document.getElementById("sidenav5").style.opacity = "1";
        document.getElementById("sidenav6").style.opacity = "1";
        document.getElementById("sidenav7").style.opacity = "1";
        document.getElementById("container").style.marginLeft = "100%";
        nav = true;
    }
}