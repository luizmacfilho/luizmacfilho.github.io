var headerBackgroundColor;
var supportPageOffset = window.pageXOffset !== undefined;
var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
var homeStageHeight = document.getElementById('home-stage').offsetHeight;
var headerElm = document.getElementById('header');

setHeaderBackgroundColor();

window.onscroll = function() {
    setHeaderBackgroundColor();
};

function getScrollYPosition() {
    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
}

function setHeaderBackgroundColor() {
    var scrollY = getScrollYPosition();
    if (scrollY <= 30) {
        headerBackgroundColor = "transparent";
    } else if (getScrollYPosition() >= homeStageHeight - 80) {
        headerBackgroundColor = "rgba(0, 0, 0, 0.85)";
    } else {
        headerBackgroundColor = "rgba(0, 0, 0, 0.3)";
    }
    headerElm.style.backgroundColor = headerBackgroundColor;
}

function moveToAboutStage() {
    window.scroll({
        top: homeStageHeight,
        left: 0,
        behavior: 'smooth'
    });
}
