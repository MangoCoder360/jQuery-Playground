$(document).ready(function() {
    var pxVar;
    function mvRight() {
        alert(pxVar);
        $("#cubeo").css("margin-left", pxVar);
    }
    function keyDownHandler(e) {
        if (e.key == "ArrowRight") {
            pxVar = $(this).css("margin-left");
            mvRight();
        }
    }
    $("#cubeo").click(function() {
        $("#cubeo").animate({"border-radius":"20px"}, 1000);
    })
    document.addEventListener("keydown", keyDownHandler, false);
})