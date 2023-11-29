"use strict";
let mDATA = mainData;

function ShowLog(strVal, evalVal) {
	console.log('' + strVal);
	console.log(evalVal);
};

window.onload = function() {
	const MDOPS = mDATA.dops;
	const MHERO = mDATA.hero;
	const MQUEST = mDATA.quest;
	const MGOODS = mDATA.goods;
	const MADVANTAGE = mDATA.advantage;
	const MGOODSTYPE = mDATA.goodsType;
	const MLOCATIONS = mDATA.locations;
	const MBG = mDATA.bg;
	let config = {
		lang: "RU",
		showMode: "off",
		section: "mp_aboutGame"
	};
	let dopsKeyList = Object.keys(MDOPS);

	// на старте отображаем форму "об игре"
	$('#mp_aboutGame').show();

	// скрыть все контейнеры, отобразить только "нужный"
	function add_hideAll_MP(showElem) {
		$('#mp_aboutGame').hide();
		$('#mp_helper').hide();
		$('#mp_rules').hide();
		$('#mp_quest').hide();
		$('#mp_goods').hide();
		$('#mp_advantage').hide();
		$('#mp_heroes').hide();
		$('#mp_location').hide();
		let elemId = showElem.attr('id');

		switch (elemId) {
			case 'mp_aboutGame':
				$('#nav_header').html("| Об игре");
				break;
			case 'mp_helper':
				$('#nav_header').html("| Карта помощи");
				break;
			case 'mp_rules':
				$('#nav_header').html("| Правила игры");
				break;
			case 'mp_quest':
				$('#nav_header').html("| Задания");
				break;
			case 'mp_goods':
				$('#nav_header').html("| Сокровища");
				break;
			case 'mp_advantage':
				$('#nav_header').html("| Преимущества");
				break;
			case 'mp_heroes':
				$('#nav_header').html("| Герои");
				break;
			default:
				$('#nav_header').html("| Локации");
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
	$('#bttn_advantage').on('click', function(){
		add_hideAll_MP($('#mp_advantage'));
	});
	$('#bttn_heroes').on('click', function(){
		add_hideAll_MP($('#mp_heroes'));
	});
	$('#bttn_location').on('click', function(){
		add_hideAll_MP($('#mp_location'));
	})

	// сортировка по ключу
	function byField(fieldName) {
		return (a, b) => a[fieldName] < b[fieldName] ? 1 : -1;
	};

	// наполнение "Состав игры"
	for (var i = MBG.content.length - 1; i >= 0; i--) {
		let li = document.createElement("li");
		li.appendChild(document.createTextNode(MBG.content[i]));
		document.getElementById('bgcontent').append(li);
	};	

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

	// поиск по id
	function findDataById(soursData, idVal) {
		for (var i = soursData.length - 1; i >= 0; i--) {
    		if (soursData[i].id == idVal) {
    			return soursData[i];
    		};
    	};
	};

	// функция наполнения формы выбора
	function addNewForm(targetElem, soursData) {
		let prepData = [];
		for (var i = dopsKeyList.length - 1; i >= 0; i--) {
			let preRes = [];
			for (var j = soursData.length - 1; j >= 0; j--) {
				if (soursData[j].dop == dopsKeyList[i]) {
					preRes[preRes.length] = soursData[j];
				};
			};
			prepData[i] = {
				id: dopsKeyList[i],
				dopName: MDOPS[(dopsKeyList[i])],
				lList: preRes
			};
		};
		for (var i = prepData.length - 1; i >= 0; i--) {
			let newOptgrStart = '<optgroup label="' + prepData[i].dopName + '">';
			for (var j = (prepData[i].lList).length - 1; j >= 0; j--) {
	    		let lSortList = prepData[i].lList.sort(byField('name'));
	    		newOptgrStart += "<option value='" + lSortList[j].id + "'>" + lSortList[j].name + "</option>";			
	    	};	
			let newOptgrEnd = '</optgroup>';
			$(targetElem).append(jQuery(newOptgrStart), jQuery(newOptgrEnd));
		};
		console.log('From ' + targetElem + ' add new form`s elements.');
	};

	addNewForm('#quests_name', MQUEST);	// наполняем форму выбора задания
	addNewForm('#heroes', MHERO);	// наполняем форму выбора героя
    addNewForm('#goods_name', MGOODS);	// наполняем форму выбора сокровищ
    addNewForm('#location_name', MLOCATIONS);	// наполняем форму выбора локации
    addNewForm('#advantage_name', MADVANTAGE);	// наполняем форму выбора преимущества

    // функция выбора героя
	function handleHeroChange() {
		let selectHeroId = $('#heroes').val();
		let selectHeroData = findDataById(MHERO, selectHeroId);
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
		$("#hero_face_img").attr("src", ("./img/face_" + selectHeroId + ".jpeg"));
		$(".hero_dopName").html("«"+ MDOPS[dopId] + "»");
		$(".hero_race").html(selectHeroData.race[0] + "<br>" + selectHeroData.race[1]);
		$(".hero_spell").html(selectHeroData.spell);
		$("#hero_slotG").html(selectHeroData.limG);
		$("#hero_slotS").html(selectHeroData.limM);
	};
    // функция выбора сокровища
    function handleGoodsChange() {
    	let selectGoodsId = $('#goods_name').val();
    	let goodsData = findDataById(MGOODS, selectGoodsId);
    	$('#goods_nameStr').html(goodsData.name);
    	$('#goods_face_img').attr("src", ("./img/goods_" + selectGoodsId + ".jpeg"));
    	$('#goods_price').html(goodsData.price);
    	$('#goods_phaze').html(goodsData.phaze);
    	$('#goods_gtype').html(goodsData.gtype);
    	$('#goods_duration').html(goodsData.duration);
    	$('#goods_text').html(goodsData.text);
    };
	// функция выбора локации
    function handleLocationChange() {
    	let selectLocationId = $('#location_name').val();
    	let locationData = findDataById(MLOCATIONS, selectLocationId);
    	let locationType = locationData.type;
    	let locationTypeStr = '';
    	for (var i = locationType.length - 1; i >= 0; i--) {
    		locationTypeStr = (locationTypeStr + locationType[i] + '<br>');
    	};
    	$('.location_str_name').html('«' + locationData.name + '»');
    	$("#location_face_img").attr("src", ("./img/location_" + selectLocationId + ".jpeg"));
    	$('#location_honor').html(locationData.honor);
    	$('#location_risk').html(locationData.risk);
    	$('.location_text').html(locationData.text);
    	$('#location_typeText').html(locationTypeStr);
    };
    // функция выбора преимущества
    function handleAdvantageChange() {
    	let selectAdvantageId = $('#advantage_name').val();
    	let advantageData = findDataById(MADVANTAGE, selectAdvantageId);
    	$('.advantage_strName').html('«' + advantageData.name + '»');
    	$("#advantage_face_img").attr("src", ("./img/advant_" + selectAdvantageId + ".jpeg"));
    	$('#advantage_priceVal').html(advantageData.price);
    	$('#advantage_phazeVal').html(advantageData.phaze);
    	$('#advantage_gtypeVal').html(advantageData.gtype);
    	$('#advantage_durationVal').html(advantageData.duration);
    	$('.advantage_text').html(advantageData.text);    	
    };
    // функция выбора задания
    function handleQuestChange() {
    	let selectQuestId = $('#quests_name').val();
    	let questData = findDataById(MQUEST, selectQuestId);
    	let selectedMonster = questData.monster;
    	$("#quests_face_img").attr("src", ("./img/quest_" + selectQuestId + ".jpeg"));
    	$('#quests_category').html('Категория: «' + questData.category + '»');
    	$('#quests_place').html(questData.location.join(' - '));
    	$('.quests_condition').html('<b>Описание:</b><p>' + questData.condition + '</p>');
    	if (selectedMonster !== null) {
    		let attckType = selectedMonster.attck;
    		function attckPreor(arr, value) {
    			for (var i = arr.length - 1; i >= 0; i--) {
    				if (arr[i] === value) {
    					return '🔴';
    				} else {
    					return '💠'
    				};
    			};
    		};
    		$('#quests_monster_name').html('<b>«' + selectedMonster.name + '»</b>');
    		$('#quests_monster_class').html(selectedMonster.class.join(' / '));
    		$('#quests_monster_hp').html('Здоровье: ' + selectedMonster.hp);
    		$('#quests_monster_str').html('<b>Физ.</b><hr>' + (attckPreor(attckType, "str")) + selectedMonster.str);
    		$('#quests_monster_mana').html('<b>Маг.</b><hr>' + (attckPreor(attckType, "mana")) + selectedMonster.mana);
    		$('#quests_monster_agil').html('<b>Скор.</b><hr>' + (attckPreor(attckType, "agil")) + selectedMonster.agil);
    		$("#quests_monster_text").html(selectedMonster.text);
    		$('.quests_monster').show();
    	} else {
    		$('.quests_monster').hide();
    	};
    	$('.quests_prize').html('<b>Награда:</b><ul><li>' + questData.prize.join ('</li><li>') + '</ul>');
    };

    handleHeroChange();	//инициируем "первое нажатие" (герои) 
    handleGoodsChange();	//инициируем "первое нажатие" (сокровища) 
    handleLocationChange();	//инициируем "первое нажатие" (локации)
    handleAdvantageChange();	//инициируем "первое нажатие" (преимущества)
    handleQuestChange();	//инициируем "первое нажатие" (задания)

    // обработчик выбора (героя)
    $('#heroes').change(function(){
    	handleHeroChange();
    });
    // обработчик выбора (сокровища)
	$('#goods_name').change(function(){
    	handleGoodsChange();
    });
    // обработчик выбора (локации)
	$('#location_name').change(function(){
    	handleLocationChange();
    });
    // обрабатываем выбор преимущества
	$('#advantage_name').change(function(){
    	handleAdvantageChange();
    });
    // обрабатываем выбор задания
	$('#quests_name').change(function(){
    	handleQuestChange();
    });

};
