$(document).ready(function() {
	// set ask amount radio to checked
	$('.donation-levels input').click( function() {
		$('.donation-levels label').removeClass('Checked');
		$(this).parent().siblings('label').addClass('Checked');

	});
	// wrap all of the form sections into a div with class form-group
	// based on the section-header-container
	$('.section-header-container').each(function() {
		$(this).nextUntil('.section-header-container').wrapAll('<div class="form-group"></div>');

	});
	
	// to do:  add navigation buttons
	// no nav on all but last child of form-group
	
	var first-nav-group = $('<div class="nav-group"></div>');
	var next-nav-group = $('<div class="nav-group"></div>');
	
	var next = $('<div class="next">Next</div>');
	var prev = $('<div class="back">Back</div>');
	
	// to do:  add progress header
	// with information about selections in previous step
	// most notably the amount
	
	// to do:  add form hide and load sequence
	// hide while dom preparation takes place
	// then display when everything is ready for render
	
	// to do:  layout the person fields in a pleasing manner
	// maybe use flexbox
	
	// hide and show section content
	$('.section-header-container').nextAll().hide();
	$('.section-header-container').first().nextUntil('.section-header-container').show();
	
	
	
	
})