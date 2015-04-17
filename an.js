var stop = true;
var hovered;
var timeout;

$('.nav').hover(
  function(){
    clearTimeout(timeout);
    stop = true;
    hovered = this;
    timeout = setTimeout(function(){
      if($(hovered).hasClass('nav_menu_link_drop')){
        $('.content').css('z-index',-1);
        $(hovered).next('.content').css('z-index','-1');
        $(hovered).next('.content').slideDown('slow');
        timeout = setTimeout(function(){
          $('.content').not($(hovered).next('.content')).slideUp('slow');
        },450);
      }
      else
        $('.content').slideUp('slow');
    },650);
  },
  function(e){
    stop = false;
    clearTimeout(timeout);
    setTimeout(function(){
      if(!stop)
        $('.content').slideUp('slow');
    },850);
  }
);

$('.content').hover(
  function(){
    stop = true;
  },
  function(){

  }
);

$('.nav_menu').hover(
  function(){

  },
  function(){
    timeout = setTimeout(function(){
      $('.content').slideUp('slow');
    },450);
  }
);

/*---------------------------------------------pampa------------------------------------------------------------------------*/
$(function() {
  $(".nav_menu").before('<div class="menu">&#9776;</div>');
  $(".menu").hide();
  $(".menu").height(40).width("auto");
  $(".menu").css("font-weight", "normal").css("color","black").css("font-size","20px").css("padding","10px 0px 10px 10px").css("text-align","left").css("background-color","white");
  $(".menu").click(function() {

    $(".nav_menu").toggle();


  });

  $(window).resize(function() {
    if ($(window).width() < 1000 ) {


      $(".menu").show();
      $(".nav_menu").css("display","none");
      $(".nav_menu").height("auto").width("auto");
      $(".nav_menu li").height("80").width("800");
      $(".nav_menu").css("position","relative");
      $(".nav_menu").css("padding","0px");

    }
    else
    {

      $(".nav_menu").show();
      $(".menu").hide();
      $(".nav_menu li").height("50px").width("auto");
      $(".nav_menu").css("padding-left","600px");
      $(".nav_menu").height("80px").width("100%");
      $(".nav_menu").css("position","absolute");

    }

  });
});

