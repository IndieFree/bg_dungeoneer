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

	function byField(fieldName) {
		return (a, b) => a[fieldName] < b[fieldName] ? 1 : -1;
	};

	// наполнение списка героев для выбора
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
		for (var i = str_val.length - 1; i >= 0; i--) {
			$("#hero_str_" + i).html(str_val[i]);
		};
		let mana_val = selectHeroData.mana;
		for (var i = mana_val.length - 1; i >= 0; i--) {
		  	$("#hero_mana_" + i).html(mana_val[i]);
		};
		let agil_val = selectHeroData.agil;
		for (var i = agil_val.length - 1; i >= 0; i--) {
		 	$("#hero_agil_" + i).html(agil_val[i]);
		};
		let race_val = selectHeroData.race;
		let spell_val = selectHeroData.spell;
		let limG_val = selectHeroData.limG;
		let limM_val = selectHeroData.limM;
		$(".hero_dopName").html("«"+ mDATA.dops[dopId] + "»");
		$(".hero_race").html(race_val[0] + "<br>" + race_val[1]);
		$(".hero_spell").html(spell_val);
		$("#hero_slotG").html(limG_val);
		$("#hero_slotS").html(limM_val);							
	};

	handleHeroChange();

    $('#heroes').change(function(){
    	handleHeroChange();
    });
    
    // $('heroes').change(handleHeroChange());
    // $('.heroSelect_button').on('click', handleHeroChange());

    // скрыть/показать раздел правил
    function chngShowParamRulPart(targetVal){
    	targetVal.show();
    };

    // раскрытие блоков правил
	$("#rules_h_1").on('click', function() {
		chngShowParamRulPart($("#rules_pc_1"));
	});
	$("#rules_h_2").on('click', function() {
		chngShowParamRulPart($("#rules_pc_2"));
	});
	$("#rules_h_3").on('click', function() {
		chngShowParamRulPart($("#rules_pc_3"));
	});
	$("#rules_h_4").on('click', function() {
		chngShowParamRulPart($("#rules_pc_4"));
	});
	$("#rules_h_5").on('click', function() {
		chngShowParamRulPart($("#rules_pc_5"));
	});
	$("#rules_h_6").on('click', function() {
		chngShowParamRulPart($("#rules_pc_6"));
	});
	$("#rules_h_7").on('click', function() {
		chngShowParamRulPart($("#rules_pc_7"));
	});
	$("#rules_h_8").on('click', function() {
		chngShowParamRulPart($("#rules_pc_8"));
	});
	$("#rules_h_9").on('click', function() {
		chngShowParamRulPart($("#rules_pc_9"));
	});
	$("#rules_h_10").on('click', function() {
		chngShowParamRulPart($("#rules_pc_10"));
	});
	$("#rules_h_11").on('click', function() {
		chngShowParamRulPart($("#rules_pc_11"));
	});
	$("#rules_h_12").on('click', function() {
		chngShowParamRulPart($("#rules_pc_12"));
	});
	$("#rules_h_13").on('click', function() {
		chngShowParamRulPart($("#rules_pc_13"));
	});

	// наполняем форму выбора "дополнение" на странице просмотра заданий
	let dopsDataList = [];
	for (var i = Object.keys(mDATA.dops).length - 1; i >= 0; i--) {
		dopsDataList[i] = {id: Object.keys(mDATA.dops)[i], name: mDATA.dops[Object.keys(mDATA.dops)[i]]};
	};
	let dopsSortList = dopsDataList.sort(byField('name'));
	for (var i = dopsSortList.length - 1; i >= 0; i--) {
		let newOption = new Option(dopsSortList[i].name, dopsSortList[i].id);
  		document.getElementById('quests_dop').append(newOption);		
	};	
	
	// функция выбора дополнения для задания
	function handleQuestDopChange() {
		$('#quests_name').empty();
		let selectDopId = $('#quests_dop').val();
    	let questsList = [];
    	for (var i = mDATA.quest['d_' + selectDopId].length - 1; i >= 0; i--) {
    		questsList[i] = {id: mDATA.quest['d_' + selectDopId][i].id, name: mDATA.quest['d_' + selectDopId][i].name};
    	};
    	let questsSortList = questsList.sort(byField('name'));
    	for (var i = questsSortList.length - 1; i >= 0; i--) {
    		let newOption = new Option(questsSortList[i].name, questsSortList[i].id);
  			document.getElementById('quests_name').append(newOption);
    	};
	};

	handleQuestDopChange();

	// обрабатываем выбор дополнения
	$('#quests_dop').change(function(){
    	handleQuestDopChange();
    });

	// функция выбора задания
    function handleQuestChange() {
    	let selectQuestId = $('#quests_name').val();
    	console.log('selectQuestId:: ' + selectQuestId);
    	let dopId = $('#quests_dop').val()
    	let questData = {};
    	for (var i = mDATA.quest['d_' + dopId].length - 1; i >= 0; i--) {
    		if (mDATA.quest['d_' + dopId][i].id == selectQuestId) {
    			questData = mDATA.quest['d_' + dopId][i];
    		};    		
    	};
    	console.log('questData');
    	console.log(questData);
    	$('#quests_category').html('Категория: «' + questData.category + '»');
    	$('.quests_condition').html('<b>Описание:</b><p>' + questData.condition + '</p>');
    	$("#quests_face_img").attr("src", ("./img/quest_" + selectQuestId + ".jpeg"));
    	$('#quests_place').html(questData.location.join(' - '));
    	let selectedMonster = questData.monster;
    	console.log('selectedMonster');
    	console.log(selectedMonster);
    	if (selectedMonster !== null) {
    		$('#quests_monster_name').html('<b>«' + selectedMonster.name + '»</b>');
    		$('#quests_monster_class').html(selectedMonster.class.join(' / '));
    		$('#quests_monster_hp').html('Здоровье: ' + selectedMonster.hp);
    		$('#quests_monster_str').html(selectedMonster.str);
			$('#quests_monster_mana').html(selectedMonster.mana);
			$('#quests_monster_agil').html(selectedMonster.agil);
    		$('.quests_monster').show();
    	} else {
    		$('.quests_monster').hide();
    	};
    	$('.quests_prize').html('<b>Награда:</b><ul><li>' + questData.prize.join ('</li><li>') + '</ul>');
    };

    handleQuestChange();

    // обрабатываем выбор задания
	$('#quests_name').change(function(){
    	handleQuestChange();
    });
	

	// $('#quests_dop').change(function(){
 //    	handleQuestDopChange();
 //    });
};
