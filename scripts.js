

window.onscroll = function() {myFunction()};

function myFunction() {

    var nav = document.getElementById("topBar");
    var scrollamt = nav.offsetTop;
    
    if (window.pageYOffset > scrollamt) {
        nav.classList.add("stay");
    } else {
        nav.classList.remove("stay");
    }
}