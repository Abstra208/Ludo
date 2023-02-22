//TAB CLICK
const tabs = document.querySelectorAll(".tabs button");
Array.from(tabs).forEach(tab => {
    tab.addEventListener("click", function(){
        Array.from(tabs).forEach(function(tab) {
            tab.setAttribute("data-status", "inactive");
        });
        this.setAttribute("data-status", "active");
    });
});
//MENU SVG
const menuIcon = document.querySelector('#menu');
const navtabs = document.querySelector(".tabs")

menuIcon.addEventListener("click", function() {
  menuIcon.classList.toggle('close');
  navtabs.classList.toggle("display");
});