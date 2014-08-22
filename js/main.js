$(function() {

	var flag = false,
		x1 = -1, x2 = -1,
		y1 = -1, y2 = -1;

	$('li.empty').click(function() {
		$('div.dd_messages').hide();
		$('div.dd_tasks').hide();
		$('div.dd_alarms').hide();

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
		$('div.dd_tasks').hide();
		$('div.dd_alarms').hide();

		var dropdown = $('div.dd_messages');
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
				$('div.dd_messages').hide();
				flag = false;
			}
		}
	});

});

$(function() {

	var flag = false,
		x1 = -1, x2 = -1,
		y1 = -1, y2 = -1;

	$('li.alarms').click(function() {
		$('ul.dropdown').hide();
		$('div.dd_tasks').hide();
		$('div.dd_messages').hide();

		var dropdown = $('div.dd_alarms');
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
				$('div.dd_alarms').hide();
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
		$('div.dd_messages').hide();
		$('div.dd_alarms').hide();

		var dropdown = $('div.dd_tasks');
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
				$('div.dd_tasks').hide();
				flag = false;
			}
		}
	});

});

// FLOT
$(function() {

	var activities = [
		{color: 3, data: [
			[1395518400000, 0], 
			[1395691200000, 10], 
			[1395950400000,70],
			[1396382400000, 8],
			[1396814400000, 30],
			[1396987200000, 15]
		]}
	];

	var plot_conf = {
		series: {
			lines: { 
	    		show: true,
	    		lineWidth: 2 
	   		}
	 	},
	 	grid: { 
           borderWidth: {top: 1, right: 1, bottom: 1, left: 1},
           borderColor: {top: "#eee", right: "#eee",  bottom: "#eee", left: "#eee"} 
        },
        xaxis: {
   			mode: "time",
   			timeformat: "%b %d",
 		}
	};

	// Проверку поставил для обхода ошибки в макете
	if ($("div.graph-activity").length > 0)
		$.plot($("div.graph-activity"), activities, plot_conf);

});

// FLOT TASKS
$(function() {
	var tasks = [
		{
			label: 'Открытые',
			color: 0,
			data: [
				[1395518400000, 0], 
				[1395691200000, 10], 
				[1395950400000,70],
				[1396382400000, 8],
				[1396814400000, 30],
				[1396987200000, 15]
			]
		},
		{
			label: 'В работе',
			color: '#3a87ad',
			data: [
				[1395518400000, 8], 
				[1395691200000, 0], 
				[1395950400000, 17],
				[1396382400000, 6],
				[1396814400000, 30],
				[1396987200000, 5]
			]
		},
		{
			label: 'Утверждено',
			color: 3,
			data: [
				[1395518400000, 18], 
				[1395691200000, 10], 
				[1395950400000, 27],
				[1396382400000, 65],
				[1396814400000, 90],
				[1396987200000, 51]
			]
		},
		{
			label: 'Закрыто',
			color: '#aaa',
			data: [
				[1395518400000, 0], 
				[1395691200000, 1], 
				[1395950400000, 23],
				[1396382400000, 17],
				[1396814400000, 9],
				[1396987200000, 19]
			]
		},
		{
			label: 'Просрочено',
			color: 2,
			data: [
				[1395518400000, 68], 
				[1395691200000, 0], 
				[1395950400000, 0],
				[1396382400000, 0],
				[1396814400000, 9],
				[1396987200000, 1]
			]
		}
	];

	var plot_conf = {
		series: {
			lines: { 
	    		show: true,
	    		lineWidth: 2 
	   		}
	 	},
	 	grid: { 
           borderWidth: {top: 1, right: 1, bottom: 1, left: 1},
           borderColor: {top: "#eee", right: "#eee",  bottom: "#eee", left: "#eee"} 
        },
        xaxis: {
   			mode: "time",
   			timeformat: "%b %d",
 		}
	};

	if ($("div.graph-task-activity").length > 0)
		$.plot($("div.graph-task-activity"), tasks, plot_conf);
});

// CHARTS
$(function() {
    $('.chart-open').easyPieChart({
        barColor: '#f89406',
        trackColor: '#f8e4c6',
        size: 105
    });

    $('.chart-start').easyPieChart({
        barColor: '#3a87ad',
        trackColor: '#dee7ec',
        size: 105
    });

    $('.chart-resolved').easyPieChart({
        barColor: '#080',
        trackColor: '#ddf6dd',
        size: 105
    });

    $('.chart-closed').easyPieChart({
        barColor: '#bbb',
        trackColor: '#f1f1f1',
        size: 105
    });
});

// POPUP 
$(function() {
	$('ul.persons > li > img').mouseenter(function() {
		$(this).parent().find('div.info').show();
	}).mouseleave(function() {
		$(this).parent().find('div.info').hide();
	});

	$('ul.followers > li').mouseenter(function() {
		if ($(this).hasClass('more')) return;
		$(this).parent().find('div.info').show();
	}).mouseleave(function() {
		$(this).parent().find('div.info').hide();
	});
});

// SPARKLINES
$(function() {
	$(".sparkline-product").sparkline([5,6,7,2,0,4,2,4], {
    type: 'bar',
    height: '36px',
    barWidth: 8,
    barSpacing: 2,
    barColor: '#f89406',
    zeroAxis: false});

    $(".sparkline-activity").sparkline([5,6,7,2,0,4,2,4], {
    type: 'bar',
    height: '36px',
    barWidth: 8,
    barSpacing: 2,
    barColor: '#3a87ad',
    zeroAxis: false});

    $(".sparkline-skills").sparkline([5,6,7,2,0,4,2,4], {
    type: 'bar',
    height: '36px',
    barWidth: 8,
    barSpacing: 2,
    barColor: '#080',
    zeroAxis: false});

    $(".sparkline-views").sparkline([5,6,7,2,0,4,2,4], {
    type: 'bar',
    height: '36px',
    barWidth: 8,
    barSpacing: 2,
    barColor: '#dd4b39',
    zeroAxis: false});
});