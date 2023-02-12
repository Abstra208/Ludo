/*TAB CLICK*/
const tabs = document.querySelectorAll(".tabs button");
Array.from(tabs).forEach(tab => {
    tab.addEventListener("click", function(){
        Array.from(tabs).forEach(function(tab) {
            tab.setAttribute("data-status", "inactive");
        });
        this.setAttribute("data-status", "active");
    });
});
/*ADD TAB*/
const addTabButton = document.getElementById("addTab");
addTabButton.addEventListener("click", function() {
    const tabs = document.querySelector(".tabs");
    const newTab = document.createElement("button");
    newTab.innerText = "Onglet " + (tabs.children.length + 1);
    tabs.appendChild(newTab);
    
    Array.from(tabs.children).forEach(function(tab) {
        tab.setAttribute("data-status", "inactive");

    newTab.setAttribute("data-status", "active");

    tab.addEventListener("click", function() {
        Array.from(tabs.children).forEach(function(tab) {
                tab.setAttribute("data-status", "inactive");
            });
            this.setAttribute("data-status", "active");
        });
    });
});
/*REMOVE TAB*/
const removeTabButton = document.getElementById("removeTab");
removeTabButton.addEventListener("click", function() {
    const tabs = document.querySelectorAll(".tabs button");
    if (tabs.length < 2) {
        return;
    }

    const activeTab = document.querySelector(".tabs button[data-status='active']");
    const activeTabIndex = Array.from(tabs).indexOf(activeTab);
    activeTab.remove();

    /*if (activeTabIndex === tabs.length - 1 && activeTabIndex !== 0) {
        tabs[activeTabIndex - 1].setAttribute("data-status", "active");
    } else {
        tabs[activeTabIndex === 0 ? 1 : 0].setAttribute("data-status", "active");
    }*/
    if (activeTabIndex === 0) {
        tabs[0].setAttribute("data-status", "active");
    } else {
        tabs[activeTabIndex - 1].setAttribute("data-status", "active");
    }
});