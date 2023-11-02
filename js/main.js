var mDATA = mainData;

window.onload = function() {
	var langList = ["RU", "ENG"];
	var config = {
		lang: "RU",
		showMode: "off",
		section: "mp_aboutGame"
	};

	// на старте отображаем форму "об игре"
	$('#mp_aboutGame').show();

	// скрыть все контейнеры, отобразить только "нужный"
	function add_hideAll_MP(showElem) {
		$('#mp_aboutGame').hide();
		$('#mp_helper').hide();
		$('#mp_rules').hide();
		$('#mp_quest').hide();
		$('#mp_goods').hide();
		$('#mp_heroes').hide();
		let elemId = showElem.attr('id');
		if (elemId == 'mp_aboutGame') {
			$('#nav_header').html("| Об игре");
		} else if (elemId == 'mp_helper') {
			$('#nav_header').html("| Карта помощи");
		} else if (elemId == 'mp_rules') {
			$('#nav_header').html("| Правила игры");
		} else if (elemId == 'mp_quest') {
			$('#nav_header').html("| Задания");
		} else if (elemId == 'mp_goods') {
			$('#nav_header').html("| Предметы");
		} else {
			$('#nav_header').html("| Герои");
		};
		
		showElem.show();
	};	

	// скрыть/показать шапку
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

	// обработчики нажатия на кнопки в шапке
	$('#bttn_aboutGame').on('click', function(){
		add_hideAll_MP($('#mp_aboutGame'));
	});	
	$('#bttn_helper').on('click', function(){
		add_hideAll_MP($('#mp_helper'));
	});	
	$('#bttn_rules').on('click', function(){
		add_hideAll_MP($('#mp_rules'));
	});	
	$('#bttn_quest').on('click', function(){
		add_hideAll_MP($('#mp_quest'));
	});	
	$('#bttn_goods').on('click', function(){
		add_hideAll_MP($('#mp_goods'));
	});	
	$('#bttn_heroes').on('click', function(){
		add_hideAll_MP($('#mp_heroes'));
	});

	// console.log("mDATA");
	// console.log(mDATA.hero);
	// console.log(mDATA.hero.length);
	function byField(fieldName) {
		return (a, b) => a[fieldName] < b[fieldName] ? 1 : -1;
	};

	let heroSortList = mDATA.hero.sort(byField('name'));
	for (var i = heroSortList.length - 1; i >= 0; i--) {
		let newOption = new Option(heroSortList[i].name, heroSortList[i].id);
  		document.getElementById('heroes').append(newOption);
		
	};	

	function handleHeroChange() {
		let selectHeroId = $('#heroes').val();
		let selectHeroData;
		
		for (var i = mDATA.hero.length - 1; i >= 0; i--) {
			if (mDATA.hero[i].id == selectHeroId) {
				selectHeroData = mDATA.hero[i];
			};
		};

		 $("#hero_face_img").attr("src", ("./img/face_" + selectHeroId + ".jpeg"));
		 let dopId = selectHeroData.dop;
		 let str_val = selectHeroData.str;
		 let mana_val = selectHeroData.mana;
		 let agil_val = selectHeroData.agil;
		 let race_val = selectHeroData.race;
		 let spell_val = selectHeroData.spell;
		 $(".hero_dopName").html("«"+ mDATA.dops[dopId] + "»");
		 $("#hero_str").html("Сил.: " + str_val[0] + " | " + str_val[1] + " | " + str_val[2] + " | " + str_val[3]);
		 $("#hero_mana").html("Маг.: " + mana_val[0] + " | " + mana_val[1] + " | " + mana_val[2] + " | " + mana_val[3]);
		 $("#hero_agil").html("Лов.: " + agil_val[0] + " | " + agil_val[1] + " | " + agil_val[2] + " | " + agil_val[3]);
		 $(".hero_race").html(race_val[0] + "<br>" + race_val[1]);
		 $(".hero_spell").html(spell_val);
	};

    $('#heroes').change(function(){
    	handleHeroChange();
    });
    // $('heroes').change(handleHeroChange());

    $('.heroSelect_button').on('click', handleHeroChange());

};
