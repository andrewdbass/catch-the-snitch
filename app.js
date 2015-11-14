var main = function(){
  $(document).click(function() {
    $(".location").toggle();
  });
  $(document).mousemove(function(event){
    $(".location").text(event.pageX+ " "+ event.pageY);

     var x = parseInt($(".blurb").css("left"))+50;
     var y = parseInt($(".blurb").css("top"));

    if(Math.abs(x-event.pageX)<125 && Math.abs(y-event.pageY)<125){
      $(".blurb").animate({left: Math.random()*800, top: Math.random()*600},0);
    }
  });
}
$(document).ready(main);

