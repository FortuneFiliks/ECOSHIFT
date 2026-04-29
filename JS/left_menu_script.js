//*****LEFT MENU SECTION*****//

console.log("left menu script loaded");

document.addEventListener("includesLoaded", () => {
  console.log("includesLoaded event caught");
});


document.body.innerHTML.includes("hamburger_button")
//TEAM DROPDOWN

document.addEventListener("includesLoaded", function () {


let get_Team_Object = document.getElementById("team_object");
let get_Team_Dropdown = document.getElementById("team_dropdown");


function view_Team_Dropdown(){
	get_Team_Dropdown.style.display = "block";
	
}
function close_Team_Dropdown(){
	get_Team_Dropdown.style.display = "none";
}

get_Team_Object.addEventListener("mouseover", view_Team_Dropdown, console.log(document.getElementById("team_object")));
get_Team_Object.addEventListener("mouseout", close_Team_Dropdown);
get_Team_Dropdown.addEventListener("mouseover", view_Team_Dropdown);
get_Team_Dropdown.addEventListener("mouseout", close_Team_Dropdown);




//LIBERIA DROPDOWN


let get_Liberia_Object = document.getElementById("liberia_object");
let get_Liberia_Dropdown = document.getElementById("liberia_dropdown");


function view_Liberia_Dropdown(){
	get_Liberia_Dropdown.style.display = "block";
}
function close_Liberia_Dropdown(){
	get_Liberia_Dropdown.style.display = "none";
}

get_Liberia_Object.addEventListener("mouseover", view_Liberia_Dropdown);
get_Liberia_Object.addEventListener("mouseout", close_Liberia_Dropdown);
get_Liberia_Dropdown.addEventListener("mouseover", view_Liberia_Dropdown);
get_Liberia_Dropdown.addEventListener("mouseout", close_Liberia_Dropdown);




//NIGERIA DROPDOWN


let get_Nigeria_Object = document.getElementById("nigeria_object");
let get_Nigeria_Dropdown = document.getElementById("nigeria_dropdown");


function view_Nigeria_Dropdown(){
	get_Nigeria_Dropdown.style.display = "block";
}
function close_Nigeria_Dropdown(){
	get_Nigeria_Dropdown.style.display = "none";
}

get_Nigeria_Object.addEventListener("mouseover", view_Nigeria_Dropdown);
get_Nigeria_Object.addEventListener("mouseout", close_Nigeria_Dropdown);
get_Nigeria_Dropdown.addEventListener("mouseover", view_Nigeria_Dropdown);
get_Nigeria_Dropdown.addEventListener("mouseout", close_Nigeria_Dropdown);




//CARBON DROPDOWN


let get_Carbon_Object = document.getElementById("carbon_object");
let get_Carbon_Dropdown = document.getElementById("carbon_dropdown");


function view_Carbon_Dropdown(){
	get_Carbon_Dropdown.style.display = "block";
}
function close_Carbon_Dropdown(){
	get_Carbon_Dropdown.style.display = "none";
}

get_Carbon_Object.addEventListener("mouseover", view_Carbon_Dropdown);
get_Carbon_Object.addEventListener("mouseout", close_Carbon_Dropdown);
get_Carbon_Dropdown.addEventListener("mouseover", view_Carbon_Dropdown);
get_Carbon_Dropdown.addEventListener("mouseout", close_Carbon_Dropdown);



//AGRICULTURE DROPDOWN


let get_Agriculture_Object = document.getElementById("security_object");
let get_Agriculture_Dropdown = document.getElementById("security_dropdown");


function view_Agriculture_Dropdown(){
	get_Agriculture_Dropdown.style.display = "block";
}
function close_Agriculture_Dropdown(){
	get_Agriculture_Dropdown.style.display = "none";
}

get_Agriculture_Object.addEventListener("mouseover", view_Agriculture_Dropdown);
get_Agriculture_Object.addEventListener("mouseout", close_Agriculture_Dropdown);
get_Agriculture_Dropdown.addEventListener("mouseover", view_Agriculture_Dropdown);
get_Agriculture_Dropdown.addEventListener("mouseout", close_Agriculture_Dropdown);



//SECURITY DROPDOWN


let get_Security_Object = document.getElementById("agriculture_object");
let get_Security_Dropdown = document.getElementById("agriculture_dropdown");


function view_Security_Dropdown(){
	get_Security_Dropdown.style.display = "block";
}
function close_Security_Dropdown(){
	get_Security_Dropdown.style.display = "none";
}

get_Security_Object.addEventListener("mouseover", view_Security_Dropdown);
get_Security_Object.addEventListener("mouseout", close_Security_Dropdown);
get_Security_Dropdown.addEventListener("mouseover", view_Security_Dropdown);
get_Security_Dropdown.addEventListener("mouseout", close_Security_Dropdown);





//PRESS DROPDOWN


let get_Press_Object = document.getElementById("press_object");
let get_Press_Dropdown = document.getElementById("press_dropdown");


function view_Press_Dropdown(){
	get_Press_Dropdown.style.display = "block";
}
function close_Press_Dropdown(){
	get_Press_Dropdown.style.display = "none";
}

get_Press_Object.addEventListener("mouseover", view_Press_Dropdown);
get_Press_Object.addEventListener("mouseout", close_Press_Dropdown);
get_Press_Dropdown.addEventListener("mouseover", view_Press_Dropdown);
get_Press_Dropdown.addEventListener("mouseout", close_Press_Dropdown);




//CLIMATE DROPDOWN


let get_Climate_Object = document.getElementById("climate_object");
let get_Climate_Dropdown = document.getElementById("climate_dropdown");


function view_Climate_Dropdown(){
	get_Climate_Dropdown.style.display = "block";
}
function close_Climate_Dropdown(){
	get_Climate_Dropdown.style.display = "none";
}

get_Climate_Object.addEventListener("mouseover", view_Climate_Dropdown);
get_Climate_Object.addEventListener("mouseout", close_Climate_Dropdown);
get_Climate_Dropdown.addEventListener("mouseover", view_Climate_Dropdown);
get_Climate_Dropdown.addEventListener("mouseout", close_Climate_Dropdown);



});