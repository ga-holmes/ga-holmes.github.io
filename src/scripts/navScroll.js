
const mobileScreen = window.matchMedia("only screen and (max-device-width: 1024px)").matches;

let pos = 0;
function navScroll(e) {

    let scrollPos = window.scrollY;

    let icons = document.getElementById("icons")
    let nav = document.getElementById("nav")
    let info = document.getElementById("info")

    let topPos = 0;
    let underPos = 8;
    let id = null;

    if (icons != null && scrollPos / window.screen.height < icons.offsetTop / window.screen.height) {
        nav.style.display = 'none'

        // If using a mobile device, activate animation so icon doesnt get in the way
        if (mobileScreen) {
            id = setInterval(frameUp, 2);

            function frameUp() {
                if (pos <= topPos) {
                    clearInterval(id);
                } else {
                    pos--;
                    info.style.top = pos + 'vh';
                }
            }
        }

    }

    if (icons === null || scrollPos / window.screen.height >= icons.offsetTop / window.screen.height) {
        nav.style.display = 'flex'

        // If using a mobile device, activate animation so icon doesnt get in the way
        if (mobileScreen) {

            id = setInterval(frameDown, 2);

            function frameDown() {
                if (pos >= underPos) {
                    clearInterval(id);
                } else {
                    pos++;
                    info.style.top = pos + 'vh';
                }
            }

        }
    }

}

export default navScroll