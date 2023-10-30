window.onload = function() {
	var data = {
		hero: [
			{id: 1, name: "Лорел Аланис", hp: 6, str: 0, mana: 1, agil: 2, dop: 1},
			{id: 2, name: "Рака", hp: 6, str: 1, mana: 0, agil: 2, dop: 1},
			{id: 3, name: "Родерик Талус", hp: 6, str: 1, mana: 0, agil: 2, dop: 1},
			{id: 4, name: "Сибот", hp: 6, str: 0, mana: 1, agil: 2, dop: 1},
			{id: 5, name: "Корн Кромсатель", hp: 6, str: 1, mana: 0, agil: 2, dop: 1},
			{id: 6, name: "Тейнин Легкоступ", hp: 6, str: 1, mana: 0, agil: 2, dop: 1},
		]
	};
	var langList = ["RU", "ENG"];
	var config = {
		lang: "RU",
		showMode: "off",
		section: "mp_aboutGame"
	};

	$('#mp_aboutGame').show();

	$('header').on('click', function(){
		if (config.showMode == "off") {
			config.showMode = "on";
			$('header').height('auto');
			$('#nav_ul').show();
		} else {
			config.showMode = "off";
			$('header').height('5vh');
			$('#nav_ul').hide();
		};
	});


};
