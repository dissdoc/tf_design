(function($) {

	var methods = {
		init: function(options) {
			var settings = $.extend({menu: null}, options),
				menu = $(settings['menu']);

			$(this).click(function() {
				menu.show();
				return false;
			});

			menu.hover(function() {								
			}, function() {
				$(this).hide();
			});

			menu.css('left', $(this).position().left);
			menu.css('top', $(this).position().top + $(this).innerHeight());		
		}
	};

	$.fn.contextmenu = function(method) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' + method + ' does not exist in jQuery.contextmenu');
		}
	};

})(jQuery);