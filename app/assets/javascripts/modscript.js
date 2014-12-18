/* Enable JS on page load */
var ready;
ready = function() {


/* "Read More" tag */
$('.row .btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $collapse = $this.closest('.collapse-group').find('.collapse');
    $collapse.collapse('toggle');
});

/* Scroll effect 
$(window).scroll(function(e){
    if ($(this).scrollTop() > 700) {
        $('#my-nav:hidden').slideDown();
    } else {
        $('#my-nav:visible').slideUp();
    }
});*/
/* Anchor Magic */
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

/* Show More */
$(".show-more a").on("click", function() {
    var $this = $(this); 
    var $content = $this.parent().prev("div.content");
    var linkText = $this.text().toUpperCase();    
    
    if(linkText === "SHOW MORE"){
        linkText = "Show less";
        $content.switchClass("hideContent", "showContent", 400);
    } else {
        linkText = "Show more";
        $content.switchClass("showContent", "hideContent", 400);
    };

    $this.text(linkText);
});

/* Burger */
$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});
});

 $(function(){ 
     var navMain = $("#nav-icon1");

     navMain.on("click", "span", null, function () {
         navMain.collapse('hide');
     });
 });
 };

$(document).ready(ready);
$(document).on('page:load', ready);
