
    
    $(document).ready(function() {
    $(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
           $('.xyz').addClass('header-sticky');
        } else {
           $('.xyz').removeClass('header-sticky');
        }
    });
  });
  
    
      