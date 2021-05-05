const topOffset = function(sectionId) {
    return document.getElementById(sectionId).offsetTop
}

const height = function(sectionId) {
    return document.getElementById(sectionId).offsetHeight
}

function whenOnLoad() {

    ["home", "about", "ingridients", "menu", "reviews", "reservations"].forEach(sectionId => {
        if (pageYOffset >= topOffset(sectionId) - 200 && pageYOffset < topOffset(sectionId) + height(sectionId) - 200){
            changeNavLook("nav-"+sectionId);
        }
        window.addEventListener('scroll', function() {
            if (pageYOffset >= topOffset(sectionId) - 200 && pageYOffset < topOffset(sectionId) + height(sectionId) - 200){
                changeNavLook("nav-"+sectionId);
            }
        })
    })
}

function getActiveNavEl() {
    return ["nav-home", "nav-about", "nav-ingridients", "nav-menu", "nav-reviews", "nav-reservations"]
    .find(elId => document.getElementById(elId).classList.contains("active"));
}

function moveNavMarker(newClassForMarker) {
    document.getElementById("nav-marker").classList.remove(getActiveNavEl()+"-marker");
    document.getElementById("nav-marker").classList.add(newClassForMarker);
}

function handleInput(value) { return ( value == 'your name*' || value == 'your email*') ? '' : value }

function pageScroll(pos) {
    window.scrollTo({
        top: pos,
        left: 0,
        behavior: 'smooth'
    });
}

function changeNavLook(elementId) {
    moveNavMarker(elementId+"-marker");
    let prevActive = getActiveNavEl();
    document.getElementById(prevActive).classList.remove("active")
    document.getElementById(elementId).className = "active";
}
        