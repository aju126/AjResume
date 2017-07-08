var blog_nav = {
    
  click_nav : function () {
    $('.nav li a').on('click', function(){
        $('.nav li').removeClass();
        $($(this).attr('href')).addClass('active');
    });
  }
    
}

$(document).ready(function(){
    blog_nav.click_nav();
});
