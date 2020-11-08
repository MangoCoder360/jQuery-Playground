$(document).ready(function() {
    $("#square").click(function() {
      $("#square").fadeOut(2000, alert2);
    });
    $(this).keypress(function(e) {
      switch(e.keyCode) {
        case 32:
          animateRec();
          break;
      }
    });
    function alert2(){
      animation();
      alert("Im done!");
      $("#square").css({"background-color":"green"});
      $("#square").fadeIn(2000);
    }
  
    function animation() {
      $("#object").animate({"border-radius":"0px"}, 10000);
    }
  
    function animateRec() {
      $("#keyPress").animate({"border-radius":"80px"}, 10000);
    }
  
  });