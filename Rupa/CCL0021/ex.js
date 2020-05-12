
$('.drop-down-menu').hover(
  function() {
	  $('.dropdown', this).stop().slideDown(200);
  },
	function() {
    $('.dropdown', this).stop().slideUp(200);
  }
);