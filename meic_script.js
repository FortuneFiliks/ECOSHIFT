$(document).ready(function(){
	$(window).scroll(function(){
		if($(document).scrollTop() > 500){
		    $(".nav_menu").css({"display":"block"});			
		}else{
		    $(".nav_menu").css({"display":"none"});	
		}
	});
	
	// $(".hamburger_button").toggle(view_Left_Menu, close_Left_Menu);
	
	// function view_Left_Menu(){
        // $(".left_menu_section").css({"display":"block"});
        // $(".left_menu_section").css({"transform":"translateX(0)"});	
		// $("body").css({"overflow-y":"hidden"});
	// }
	
	// function close_Left_Menu(){
		// $("body").css({"overflow-y":"visible"});
        // $(".left_menu_section").css({"transform":"translateX(-100%)"});
	// }
	
	

	// $(".mobile_hamburger_button").toggle(view_Mobile_Menu, close_Mobile_Menu);
	// function view_Mobile_Menu(){
		// $(":root").css({"overflow-y":"hidden"});
        // $(".mobile_menu_section").css({"display":"block"});
	// }
	
	// function close_Mobile_Menu(){
		// $(":root").css({"overflow-y":"visible"});
        // $(".mobile_menu_section").css({"display":"none"});
	// }	
	
	
});

function view_Menu(){
	$(":root").css({"overflow-y":"hidden"});
	$(".mobile_menu_section").css({"transform" : "translateY(0%)"});
}

function hide_Menu(){
	$(":root").css({"overflow-y":"visible"});
	$(".mobile_menu_section").css({"transform" : "translateY(-100vh)"});
}

let menuOpen = false;

$(document).on("click", "#menu_bars", function () {
	if (!menuOpen) {
		view_Menu();
	} else {
		hide_Menu();
	}
	menuOpen = !menuOpen;
});


// Close menu when ANY link inside menu is clicked
$(document).on("click", ".mobile_menu_section a", function () {
	hide_Menu();
});



let get_Pie_Btn = document.querySelector("#first_pie_shaped_btn");
let get_Enabler_Container = document.querySelector("#first_enabler_heading_container");
get_Pie_Btn.addEventListener("click", 
    () => {
		get_Enabler_Container.classList.add("animate_enabler_heading_container");
	}
);


let get_Second_Pie_Btn = document.querySelector("#second_pie_shaped_btn");
let get_Second_Enabler_Container = document.querySelector("#second_enabler_heading_container");
get_Second_Pie_Btn.addEventListener("click", 
    () => {
		get_Second_Enabler_Container.classList.add("animate_enabler_heading_container");
	}
);



let get_Third_Pie_Btn = document.querySelector("#third_pie_shaped_btn");
let get_Third_Enabler_Container = document.querySelector("#third_enabler_heading_container");
get_Third_Pie_Btn.addEventListener("click", 
    () => {
		get_Third_Enabler_Container.classList.add("animate_enabler_heading_container");
	}
);


let get_Fourth_Pie_Btn = document.querySelector("#fourth_pie_shaped_btn");
let get_Fourth_Enabler_Container = document.querySelector("#fourth_enabler_heading_container");
get_Fourth_Pie_Btn.addEventListener("click", 
    () => {
		get_Fourth_Enabler_Container.classList.add("animate_enabler_heading_container");
	}
);


let get_Fifth_Pie_Btn = document.querySelector("#fifth_pie_shaped_btn");
let get_Fifth_Enabler_Container = document.querySelector("#fifth_enabler_heading_container");
get_Fifth_Pie_Btn.addEventListener("click", 
    () => {
		get_Fifth_Enabler_Container.classList.add("animate_enabler_heading_container");
	}
);


let get_Sixth_Pie_Btn = document.querySelector("#sixth_pie_shaped_btn");
let get_Sixth_Enabler_Container = document.querySelector("#sixth_enabler_heading_container");
get_Sixth_Pie_Btn.addEventListener("click", 
    () => {
		get_Sixth_Enabler_Container.classList.add("animate_enabler_heading_container");
	}
);


let get_Seventh_Pie_Btn = document.querySelector("#seventh_pie_shaped_btn");
let get_Seventh_Enabler_Container = document.querySelector("#seventh_enabler_heading_container");
get_Seventh_Pie_Btn.addEventListener("click", 
    () => {
		get_Seventh_Enabler_Container.classList.add("animate_enabler_heading_container");
	}
);


let get_Eight_Pie_Btn = document.querySelector("#eight_pie_shaped_btn");
let get_Eight_Enabler_Container = document.querySelector("#eight_enabler_heading_container");
get_Eight_Pie_Btn.addEventListener("click", 
    () => {
		get_Eight_Enabler_Container.classList.add("animate_enabler_heading_container");
	}
);