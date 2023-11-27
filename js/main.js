var mDATA = mainData;

function ShowLog(strVal, evalVal) {
	console.log('' + strVal);
	console.log(evalVal);
};

window.onload = function() {
	const MDops = mDATA.dops;
	const MHero = mDATA.hero;
	const MQuest = mDATA.quest;
	const MGoods = mDATA.goods;
	const MGoodsType = mDATA.goodsType;
	const MLocations = mDATA.locations;

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
		$('#mp_location').hide();
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
		} else if (elemId == 'mp_heroes') {
			$('#nav_header').html("| Герои");
		} else {
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
	$('#bttn_heroes').on('click', function(){
		add_hideAll_MP($('#mp_heroes'));
	});
	$('#bttn_location').on('click', function(){
		add_hideAll_MP($('#mp_location'));
	})

	function byField(fieldName) {
		return (a, b) => a[fieldName] < b[fieldName] ? 1 : -1;
	};

	// наполнение списка героев для выбора
	let heroSortList = MHero.sort(byField('name'));
	for (var i = heroSortList.length - 1; i >= 0; i--) {
		let newOption = new Option(heroSortList[i].name, heroSortList[i].id);
  		document.getElementById('heroes').append(newOption);
		
	};	

	function handleHeroChange() {
		let selectHeroId = $('#heroes').val();
		let selectHeroData;
		
		for (var i = MHero.length - 1; i >= 0; i--) {
			if (MHero[i].id == selectHeroId) {
				selectHeroData = MHero[i];
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
		$(".hero_dopName").html("«"+ MDops[dopId] + "»");
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

	// наполняем форму выбора заданий
	let questsKeyList = Object.keys(MQuest);
	let questsPrepData = [];
	for (var i = questsKeyList.length - 1; i >= 0; i--) {
		questsPrepData[i] = {
			id: questsKeyList[i],
			name: MDops[((questsKeyList[i]).split('d_'))[1]],
			qList: MQuest[questsKeyList[i]]
		};
	};
	for (var i = questsPrepData.length - 1; i >= 0; i--) {
		let newOptgrStart = '<optgroup label="' + questsPrepData[i].name + '">';
		for (var j = (questsPrepData[i].qList).length - 1; j >= 0; j--) {
			let qSortList = questsPrepData[i].qList.sort(byField('name'));
			newOptgrStart += "<option value='" + qSortList[j].id + '_' + questsPrepData[i].id + "'>" + qSortList[j].name + "</option>";			
		};
		let newOptgrEnd = '</optgroup>';
		$('#quests_name').append(jQuery(newOptgrStart), jQuery(newOptgrEnd));
	};

	// функция выбора задания
    function handleQuestChange() {
    	let selectQuestVal = $('#quests_name').val();
    	let selectQuestId = selectQuestVal.split('_')[0];
    	let dopId = selectQuestVal.split('_')[2];
    	let questData = {};
    	for (var i = MQuest['d_' + dopId].length - 1; i >= 0; i--) {
    		if (MQuest['d_' + dopId][i].id == selectQuestId) {
    			questData = MQuest['d_' + dopId][i];
    		};    		
    	};
    	$('#quests_category').html('Категория: «' + questData.category + '»');
    	$('.quests_condition').html('<b>Описание:</b><p>' + questData.condition + '</p>');
    	$("#quests_face_img").attr("src", ("./img/quest_" + selectQuestId + ".jpeg"));
    	$('#quests_place').html(questData.location.join(' - '));
    	let selectedMonster = questData.monster;
    	if (selectedMonster !== null) {
    		let attckType = selectedMonster.attck
    		function attckPreor(arr, value) {
    			for (var i = arr.length - 1; i >= 0; i--) {
    				if (arr[i] === value) {
    					return '🔴';
    				};
    			};
    			return '💠';
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

    handleQuestChange();

    // обрабатываем выбор задания
	$('#quests_name').change(function(){
    	handleQuestChange();
    });

	// наполняем форму выбора "типа" предметов на странице просмотра предметов
	let goodsTypeList = [];
	for (var i = Object.keys(MGoodsType).length - 1; i >= 0; i--) {
		goodsTypeList[i] = {id: Object.keys(MGoodsType)[i], name: MGoodsType[Object.keys(MGoodsType)[i]]};
	};
	let goodsTypeSortList = goodsTypeList.sort(byField('name'));
	for (var i = goodsTypeSortList.length - 1; i >= 0; i--) {
		let newOption = new Option(goodsTypeSortList[i].name, goodsTypeSortList[i].id);
  		document.getElementById('goods_type').append(newOption);		
	};

	// функция выбора "типа" для предметов
	function handleGoodsTypeChange() {
		$('#goods_select').empty();
		let selectGoodsTypeId = $('#goods_type').val();
		let goodsList = [];
		for (var i = MGoods.length - 1; i >= 0; i--) {
			goodsList[i] = {id: MGoods[i].id, name: MGoods[i].name};
		};
		let sortGoodsList = goodsList.sort(byField('name'));
		for (var i = sortGoodsList.length - 1; i >= 0; i--) {
			let newOption = new Option(sortGoodsList[i].name, sortGoodsList[i].id);
			document.getElementById('goods_select').append(newOption);
		};
	};

	handleGoodsTypeChange();

	// обрабатываем выбор типа предмета
    $('#goods_type').change(function(){
    	handleGoodsTypeChange();
    });
	
	// функция выбора предметов
	function handleGoodsChange() {
    	let selectGoodsId = $('#goods_select').val();
    	let typeId = $('#goods_type').val();
    	let goodsData = {};
    	for (var i = MGoods.length - 1; i >= 0; i--) {
    		if (MGoods[i].id == selectGoodsId) {
    			goodsData = MGoods[i];
    		};    		
    	};
    	let goodsName = goodsData.name;
    	$('#goods_name').html(goodsName + '<br><small>(' + MGoodsType[typeId] + ')</small>');
    	$('#goods_dop_name').html('Дополнение: «' + MDops[goodsData.dop] + '»');
    	$('#goods_text').html(goodsData.text);
    	$('#goods_face_img').attr("src", ("./img/goods_" + selectGoodsId + ".jpeg"));
    	$('#goods_price').html(goodsData.price);
    	$('#goods_phaze').html(goodsData.phaze);
    	$('#goods_gtype').html(goodsData.gtype);
    	$('#goods_duration').html(goodsData.duration);
    	
	};

	handleGoodsChange()

	// обрабатываем выбор предмета
    $('#goods_select').change(function(){
    	handleGoodsChange();
    });

    // наполняем форму выбора локации
    let dopsKeyList = Object.keys(MDops);
    ShowLog("dopsKeyList", dopsKeyList);
    ShowLog("MLocations", MLocations);
    let locationsPrepData = [];
    for (var i = dopsKeyList.length - 1; i >= 0; i--) {
    	let localRes = [];
    	ShowLog('localRes.length + 1', (localRes.length + 1));
    	for (var j = MLocations.length - 1; j >= 0; j--) {
    		if (MLocations[j].dop == dopsKeyList[i]) {
    			localRes[localRes.length] = MLocations[j];
    		};
    	};
    	locationsPrepData[i] = {
    		id: dopsKeyList[i],
    		dopName: MDops[(dopsKeyList[i])],
    		lList: localRes
    	};
    };
    ShowLog('locationsPrepData', locationsPrepData);
    for (var i = locationsPrepData.length - 1; i >= 0; i--) {
    	let newOptgrStart = '<optgroup label="' + locationsPrepData[i].dopName + '">';
    	for (var j = (locationsPrepData[i].lList).length - 1; j >= 0; j--) {
    		let lSortList = locationsPrepData[i].lList.sort(byField('name'));
    		ShowLog('asdasdasdasdasdasd', lSortList[j]);
    		newOptgrStart += "<option value='" + lSortList[j].id + "'>" + lSortList[j].name + "</option>";			
    	};
    	let newOptgrEnd = '</optgroup>';
    	$('#location_name').append(jQuery(newOptgrStart), jQuery(newOptgrEnd));
    };

    // функция выбора локации
    function handleLocationChange() {
    	let selectLocationId = $('#location_name').val();
    	let locationData = {};
    	for (var i = MLocations.length - 1; i >= 0; i--) {
    		if (MLocations[i].id == selectLocationId) {
    			locationData = MLocations[i];
    		};
    	};
    	$('.location_str_name').html('«' + locationData.name + '»');
    	$("#location_face_img").attr("src", ("./img/location_" + selectLocationId + ".jpeg"));
    	$('#location_honor').html(locationData.honor);
    	$('#location_risk').html(locationData.risk);
    	$('.location_text').html(locationData.text);
    };

    handleLocationChange();
    // обрабатываем выбор локации
	$('#location_name').change(function(){
    	handleLocationChange();
    });
};
