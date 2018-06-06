document.write('<style>.donation-form-container {display:none}</style>');
jQuery.noConflict();
jQuery('form').hide();
jQuery(document).ready(function($) {
	if(background && background.length>0) {
		$('body').css('background-image', 'url('+background+')');
		$('body').css('background-size', 'cover');
	}
	// set ask amount radio to checked
	$('.donation-levels input').click( function() {
		$('.donation-levels label').removeClass('Checked');
		$(this).parent().siblings('label').addClass('Checked');

	});
	// wrap all of the form sections into a div with class form-group
	// based on the section-header-container
	$('.section-header-container').each(function() {
		$(this).nextUntil('.section-header-container').wrapAll('<div class="form-group"></div>');
		var el = $(this).next('.form-group');
		$(this).prependTo(el);

	});
	
	// add navigation buttons
	// no nav on all but last child of form-group
	$('.form-group').each(function() {
		var navgroup = $('<div class="nav-group"></div>');
		var next = $('<div class="next btn">Next</div>');
		var back = $('<div class="back btn">Back</div>');
		if($(this).is(':first')) {
			$(navgroup).append(next);
		} else {
			$(navgroup).append(back);
			$(navgroup).append(next);
		}
		if($(this).is(':last-child')) {
			$('.button-sub-container').prepend(back);
		} else {
			$(this).append(navgroup);
		}
		
	})
	
	// to do:  add progress header
	// with information about selections in previous step
	// most notably the amount
	
	// to do:  add form hide and load sequence
	// hide while dom preparation takes place
	// then display when everything is ready for render
	
	// to do:  layout the person fields in a pleasing manner
	// maybe use flexbox
	
	// hide and show section content
	$('.form-group').hide();
	$('.form-group').first().show();
	
	$('.donation-form-container').show();
	$(document).on('click','.next', function() {
		function complete() {
			console.log('fade complete');
		}
		console.log('next clicked');
		$(this).parents('.form-group').hide();
		$(this).parents('.form-group').next('.form-group').show();
		
		
	});
	$(document).on('click','.back', function() {
		function complete() {
			console.log('fade complete');
		}
		console.log('back clicked');
		$(this).parents('.form-group').hide();
		$(this).parents('.form-group').prev('.form-group').show();
		
	});

	
	
	
	
})