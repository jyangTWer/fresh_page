$(function() {
	// $('.carousel').carousel();
    debugger;
    var container = $('#testimonials');
    var quotes = container.find('blockquote');

    var activeQuote = 0;
    var timerId;

    function startTimeout() {
	    timerId = setTimeout(start, 100000);
	}

	function start() {
	    activeQuote++;
	    if(activeQuote>=quotes.length) activeQuote = 0;
	        quotes.removeClass('active');
	        quotes.eq(activeQuote).addClass('active');
	        startTimeout();
	    }

	    quotes.find('footer').click(function(){
	        clearTimeout(timerId);
	        quotes.removeClass('active');
	        var blockquote = $(this).closest('blockquote');
	        activeQuote = parseInt( blockquote.data('testimonial'), 10);
	        blockquote.addClass('active');
	        startTimeout();
	    });

	    startTimeout();
	}
})