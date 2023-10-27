window.onload = function() {
	var langList = ["RU", "ENG"];
	var config = {
		lang: "RU",
		showMode: "off"
	};

	$('header').on('click', function(){
		if (config.showMode == "off") {
			config.showMode = "on";
			$('#nav_ul').show();
		} else {
			config.showMode = "off";
			$('#nav_ul').hide();
		};
	});
};
