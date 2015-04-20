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
  function(b){
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

/*---------------------------------------------pampa------------------------------------------------------------------------

 $(document).ready(function()  {
 $(".nav_menu").before('<div class="menu">&#9776;</div>');
 $(".menu").hide();
 $(".menu").height(40).width("auto");
 $(".menu").css("font-weight", "normal").css("color","black").css("font-size","20px").css("padding","10px 0px 10px 10px").css("text-align","left").css("background-color","white");
 $(".menu").click(function() {

 $(".nav_menu").toggle();


 });





 $(window).resize(function() {
 if ($(window).width() > 900 ) {




 //var stop = true;
 //var hovered;
 //var timeout;

 $(".nav").hover(function() {

 clearTimeout(timeout);
 stop = true;
 hovered = this;
 timeout = setTimeout(function() {
 if($(hovered).hasClass("nav_menu_link_drop nav")) {
 //  $('.content').css('z-index',0);
 $(hovered).next(".content").css("z-index",-1);
 $(hovered).next('.content').slideDown(0);
 timeout = setTimeout(function() {
 $(".content").not($(hovered).next('.content')).slideUp(1000);
 },450);
 }
 else
 $('.content').slideUp('slow');
 },650);
 },
 function(){
 stop = false;
 clearTimeout(timeout);
 setTimeout(function(){
 if(!stop)
 $('.content').slideUp('slow');
 },850);
 });
 $('.content').hover(
 function(){
 stop = true;
 },
 function(){

 });

 $('.nav_menu').hover(
 function(){

 },
 function(){
 timeout = setTimeout(function() {
 $('.content').slideUp('fast');
 },450);
 });



 $(".nav_menu").show();
 $(".menu").hide();
 $(".nav_menu li").height("50px").width("auto");
 $(".nav_menu").css("padding-left","600px");
 $(".nav_menu").height("80px").width("100%");
 $(".nav_menu").css("position","absolute");
 $(".nav_menu_link").css("border-radius","100px");
 $("#content1, #content2, #content3").css("position","absolute").css("background-color","white").css("top","-20px").height("auto").width("100%");
 $("#content1 ul, #content2 ul, #content3 ul").css("padding-left","50px").css("padding-top","80px");
 //$(".nav_menu_link").css( "background-color", "rgba(0, 0, 0, 0.5)" );
 // $("#menu1").css("background-color","none");
 $("a.nav_menu_link").hover(
 function() {
 $(this).css("background-color","rgba(0, 0, 0, 0.5)" );
 },
 function () {
 $(this).css("background-color","rgba(0, 0, 0, 0)" );
 }
 );


 }
 if ($(window).width() < 900 ) {



 $(".menu").show();
 $(".nav_menu").css("display","none");
 // $(".nav_menu").height("auto").width("auto");
 $(".nav_menu li").height("80").width("700");
 $(".nav_menu").css("position","relative");
 $(".nav_menu").css("padding","0px");
 $(".content").css("padding","0px");
 $(".content").css("margin","0px");
 // $(".content").css("border","1px solid black");
 // $(".content").height("auto").width("auto");
 $(".content").css("background-color","green");
 $("#content1, #content2, #content3" ).css("background-color","white").css("margin","0px").css("top","0px").css("position","relative").css("padding-left","0px")
 $(".nav_menu_link").css("border-radius","0px");
 $("a.nav_menu_link").css( "background-color", "rgba(0, 0, 0, 0)" );
 // $("#content1, #content2, #content3" ).height("auto").width("900px");




 $('.nav').unbind('mouseenter').unbind('mouseleave').unbind('mouseover').unbind('mouseout');
 $('.nav_menu_link_drop nav').unbind('mouseenter').unbind('mouseleave').unbind('mouseover').unbind('mouseout');
 //$('.nav_menu').unbind('mouseenter').unbind('mouseleave').unbind('mouseover').unbind('mouseout');
 //$('.content').unbind('mouseenter').unbind('mouseleave').unbind('mouseover').unbind('mouseout');
 /**
 $(".nav_menu_link_drop").click(function() {


 $("#content1").toggle();

 });
 */

/*$("#menu1").click(function() {


  $("#content1").toggle();
  $("#content2").slideUp();
  $("#content3").slideUp();
});
$("#menu2").click(function() {

  $("#content2").toggle();
  $("#content3").slideUp();
  $("#content1").slideUp();
});
$("#menu3").click(function() {

  $("#content3").toggle();
  $("#content1").slideUp();
  $("#content2").slideUp();
});
}






});
});*/

