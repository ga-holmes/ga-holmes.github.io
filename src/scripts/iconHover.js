

function iconHover(e) {

    let info = document.getElementById("info");
    let infoDiv = document.getElementById("infoDiv");

    let hovering = false;

    // hovering over icon
    info.addEventListener("mouseleave", function (event) {
        hovering = false;
        info.classList.remove('infoHover')
        infoDiv.style.display = "none"
    }, false);

    info.addEventListener("mouseover", function (event) {
        hovering = true;
        info.classList.add('infoHover')
        infoDiv.style.display = "block"
    }, false)
    // hovering over box
    infoDiv.addEventListener("mouseleave", function (event) {
        hovering = false;
        info.classList.remove('infoHover')
        infoDiv.style.display = "none"
    }, false);

    infoDiv.addEventListener("mouseover", function (event) {
        hovering = true;
        info.classList.add('infoHover')
        infoDiv.style.display = "block"
    }, false)

}

export default iconHover