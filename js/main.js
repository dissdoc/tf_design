$(function() {

	var flag = false,
		x1 = -1, x2 = -1,
		y1 = -1, y2 = -1;

	$('li.empty').click(function() {
		$('ul.dd_messages').hide();
		$('ul.dd_tasks').hide();

		var dropdown = $('ul.dropdown');
		dropdown.show();
		x1 = dropdown.position().left;
		y1 = dropdown.position().top;
		x2 = x1 + dropdown.width();
		y2 = y1 + dropdown.height();
		flag = true;
		return false;
	});

	$(document).click(function(event) {
		if (flag) {
			if (!(event.pageX >= x1 && event.pageX <= x2 && event.pageY >= y1 && event.pageY <= y2)) { 
				$('ul.dropdown').hide();
				flag = false;
			}
		}
	});

});

$(function() {

	var flag = false,
		x1 = -1, x2 = -1,
		y1 = -1, y2 = -1;

	$('li.messages').click(function() {
		$('ul.dropdown').hide();
		$('ul.dd_tasks').hide();

		var dropdown = $('ul.dd_messages');
		dropdown.show();
		x1 = dropdown.position().left;
		y1 = dropdown.position().top;
		x2 = x1 + dropdown.width();
		y2 = y1 + dropdown.height();
		flag = true;
		return false;
	});

	$(document).click(function(event) {
		if (flag) {
			if (!(event.pageX >= x1 && event.pageX <= x2 && event.pageY >= y1 && event.pageY <= y2)) { 
				$('ul.dd_messages').hide();
				flag = false;
			}
		}
	});

});

$(function() {

	var flag = false,
		x1 = -1, x2 = -1,
		y1 = -1, y2 = -1;

	$('li.tasks').click(function() {
		$('ul.dropdown').hide();
		$('ul.dd_messages').hide();

		var dropdown = $('ul.dd_tasks');
		dropdown.show();
		x1 = dropdown.position().left;
		y1 = dropdown.position().top;
		x2 = x1 + dropdown.width();
		y2 = y1 + dropdown.height();
		flag = true;
		return false;
	});

	$(document).click(function(event) {
		if (flag) {
			if (!(event.pageX >= x1 && event.pageX <= x2 && event.pageY >= y1 && event.pageY <= y2)) { 
				$('ul.dd_tasks').hide();
				flag = false;
			}
		}
	});

});

// CHARTS
$(function() {
    $('.chart-open').easyPieChart({
        barColor: '#f89406',
        trackColor: '#f1f1f1',
        size: 105
    });
});
$(function() {
    $('.chart-start').easyPieChart({
        barColor: '#3a87ad',
        trackColor: '#f1f1f1',
        size: 105
    });
});
$(function() {
    $('.chart-resolved').easyPieChart({
        barColor: '#080',
        trackColor: '#f1f1f1',
        size: 105
    });
});
$(function() {
    $('.chart-closed').easyPieChart({
        barColor: '#ccc',
        trackColor: '#f1f1f1',
        size: 105
    });
});