
const mobileScreen = window.matchMedia("only screen and (max-device-width: 1024px)").matches;

function navScroll(e) {

    let scrollPos = window.scrollY;

    let icons = document.getElementById("icons")
    let nav = document.getElementById("nav")
    let info = document.getElementById("info")

    if (icons != null && scrollPos / window.screen.height < icons.offsetTop / window.screen.height) {
        nav.style.display = 'none'

        if (mobileScreen) {
            info.style.paddingTop = '0.2%'
        }

    }

    if (icons === null || scrollPos / window.screen.height >= icons.offsetTop / window.screen.height) {
        nav.style.display = 'flex'
        
        if (mobileScreen) {
            info.style.paddingTop = '20%'
        }
    }

}

export default navScroll