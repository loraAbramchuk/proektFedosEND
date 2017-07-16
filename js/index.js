$(function() {
    $("#content").click(function() {
        var theClass = $('#content').attr('class');
        if(theClass="content"){
        $("#cotent").removeClass("content");         
        $(this).toggleClass("content_click");
    }
    else if(theClass="content_click"){
        $("#content").removeClass("content_click");         
        $(this).toggleClass("content");
    }
    })
});

$(function init() {
  $("#content").click(function(){

        $("#black").removeClass("black");         
        $("#black").toggleClass("black_click");
});
});

$(function init2() {
  $("#black").click(function(){

        $("#black").removeClass("black_click");         
        $("#black").toggleClass("black");

         $("#content").removeClass("content_click");   
         $("#curses").toggleClass("curses");      
});
});

$(function init2() {
  $("#close").click(function(){

        $("#black").removeClass("black_click");         
        $("#black").toggleClass("black");

         $("#content").removeClass("content_click");   
         $("#curses").toggleClass("curses");      
});
});

$(function init3() {
  $("#content").click(function(){

        $("#curses").removeClass("curses");         
        $("#curses").toggleClass("curses_click");
         
});
});

$(function init4() {
  $("#black").click(function(){

        $("#curses").removeClass("curses_click");         
        $("#curses").addClass("curses");
         
});
});

$(function init4() {
  $("#close").click(function(){

        $("#curses").removeClass("curses_click");         
        $("#curses").addClass("curses");
         
});
});