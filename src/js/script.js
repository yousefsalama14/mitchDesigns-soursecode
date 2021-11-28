$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      loop:true,
      nav:true,
      autoplay:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  });
  $('.add').click(function () {
		if ($(this).prev().val() < 3) {
    	$(this).prev().val(+$(this).prev().val() + 1);
		}
  });
  $('.sub').click(function () {
      if ($(this).next().val() > 1) {
        if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
      }
  });
});