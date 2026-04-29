$(document).ready(function(){
	
	$(".mobile_hamburger_button").toggle(view_Mobile_Menu, close_Mobile_Menu);
	function view_Mobile_Menu(){
		$(":root").css({"overflow-y":"hidden"});
        $(".mobile_menu_section").css({"display":"block"});
	}
	
	function close_Mobile_Menu(){
		$(":root").css({"overflow-y":"visible"});
        $(".mobile_menu_section").css({"display":"none"});
	}
	
});