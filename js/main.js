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

// DATEPICKER
$(function() {
	$('.date-start').datepicker({
		showOn: 'button',
		buttonImage: '/imgs/datepicker.png',
		buttonImageOnly: true,
		buttonText: 'showDate',
		dateFormat: 'dd.mm.yy',
	});
	$('.date-end').datepicker({
		showOn: 'button',
		buttonImage: '/imgs/datepicker.png',
		buttonImageOnly: true,
		buttonText: 'showDate',
		dateFormat: 'dd.mm.yy'
	});
});

// CREATE TASK 
$(function() {
	$('div.create-task-form > div.title > input[type=text]').focus(function() {
		$(this).attr('placeholder', 'Название задачи');
		$('div.create-task-form > div.descr').show();
	});

	$('div.create-task-form > div.descr > p.action > button').click(function() {
		$('div.create-task-form > div.title > input[type=text]').attr('placeholder', 'Создать задачу...');
		$('div.create-task-form > div.descr').hide();
	});

	$('#task-select-date').datepicker({
		showOn: 'button',
		buttonImage: '/imgs/datepicker.png',
		buttonImageOnly: true,
		buttonText: 'showDate',
		dateFormat: 'dd.mm.yy',	
		onSelect: function() {
			$('div.create-task-form > div.descr > div.more-for-task > div > sup').show();
		}
	});
	$('div.create-task-form > div.descr > div.more-for-task > div > sup').click(function() {
		$('#task-select-date').val('');
		$(this).hide();
	})

	$('div.create-task-form > div.descr > div.tags > ul > li > input[type=text]').autosizeInput();
	$('div.create-task-form > div.descr > div.tags > ul > li > input[type=text]').keypress(function(event) {
		var ul = $('div.create-task-form > div.descr > div.tags > ul'),
			val = $(this).val().trim();

		if (event.which == 13) {	
			if (val.length != 0) {		
				$(this).parent().before('<li class="item">' + val + '<span>x</span></li>');
			}
			$(this).val('');
		}
	});

	$('div.create-task-form > div.descr > div.tags > ul').on('click', 'li > span', function() {
		$(this).parent().remove();
	});

	$('div.create-task-form > div.descr > div.more-for-task > div > div.person > span.change-person').click(function() {
		$('div.create-task-form > div.descr > div.more-for-task > div > div.person > div.list-persons').show();
	});

	$('div.create-task-form > div.descr > div.more-for-task > div > div.person > div.list-persons > ul > li').click(function() {
		if ($(this).hasClass('search')) return;
		$('div.create-task-form > div.descr > div.more-for-task > div > div.person > span.change-person').hide();
		$('div.create-task-form > div.descr > div.more-for-task > div > div.person > span.current-person').show();
		$('div.create-task-form > div.descr > div.more-for-task > div > div.person > div.list-persons').hide();
	});

	$('div.create-task-form > div.descr > div.more-for-task > div > div.person > span.current-person > sup').click(function() {
		$('div.create-task-form > div.descr > div.more-for-task > div > div.person > span.change-person').show();
		$('div.create-task-form > div.descr > div.more-for-task > div > div.person > span.current-person').hide();
	});

	$('div.create-task-form > div.descr > div.more-for-task > div > div.person > div.list-persons > ul > li.search > input[type=text]').keypress(function(event) {
		var val = $(this).val().trim();
		if (event.which == 13) { 

		} else {
			console.log(val);			
			if ($('div.create-task-form > div.descr > div.more-for-task > div > div.person > div.list-persons > ul > li > span:contains("'+val+'")')) {
				console.log('hello');
			}
		}	
	});
});