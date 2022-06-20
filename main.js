
$(document).ready(function(){
  setTimeout(function(){
    $(document).scroll(function(){
      $('.banner').fadeOut(600, 'swing');
    });
  },100);
}) ; 
