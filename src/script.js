
function navScroll(e) {

    let scrollPos = window.scrollY;

    let icons = document.getElementById("icons")
    let nav = document.getElementById("nav")

    if (scrollPos / window.screen.height < icons.offsetTop / window.screen.height) {
        nav.style.display = 'none'
    }

    if (icons === null || scrollPos / window.screen.height >= icons.offsetTop / window.screen.height) {
        nav.style.display = 'block'
    }

    console.log(icons.offsetTop);

}

export default navScroll