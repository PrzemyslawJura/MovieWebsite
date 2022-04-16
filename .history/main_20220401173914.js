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
    if(nav == false) {
        document.getElementById("mySidenav").style.width = "17%";
        document.getElementById("sidenav1").style.display = "block";
        document.getElementById("container").style.marginLeft = "17%";
        document.getElementById("options").style.display = "none";
        nav = true;
    }
    else if(nav == true) {
        document.getElementById("mySidenav").style.width = "0";

        document.getElementById("container").style.marginLeft = "0";
        nav = false;
    }
}