$(document).ready(function(){
	$(window).scroll(function(){
		if($(document).scrollTop() > 1){
		  		
		    $("nav").css({"border-bottom" : "double 1.5px var(--accent_color)"});			
		    $("nav").css({"border-bottom" : "double 1.5px var(--accent_color)"});			
		    $("nav").css({"box-shadow" : "1px 1px 3px 3px #3e3e3e4C"});			
		   		
		}else{
		   		
		    $("nav").css({"border-bottom" : "none"});			
		    $("nav").css({"box-shadow" : "none"});
		}
	});
	
	$(".hamburger_button").toggle(view_Left_Menu, close_Left_Menu);
	
	function view_Left_Menu(){
        $(".left_menu_section").css({"display":"block"});
        $(".left_menu_section").css({"transform":"translateX(0)"});	
		$("body").css({"overflow-y":"hidden"});
	}
	
	function close_Left_Menu(){
		$("body").css({"overflow-y":"visible"});
        $(".left_menu_section").css({"transform":"translateX(-100%)"});
	}
	
	

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




const get_About_Image = document.querySelectorAll(".about_image, .africa_image");

function about_Image_Animation(entries, target){
	
	entries.forEach( entry => {
		if(entry.isIntersecting){
  
          entry.target.classList.add("animate_about_image"); 
		  entry.target.unobserve	
		}
	});
}


const about_Image_Animation_Root = 
{
	
	root : null,
	rootMargin : "0px",
	threshold : 0.6,

}


const about_Image_Animation_API = new IntersectionObserver(about_Image_Animation, about_Image_Animation_Root);

get_About_Image.forEach( target => {about_Image_Animation_API.observe(target)});



const get_Section_Heading = document.querySelectorAll(".second_section_header, .faq_header");

function animate_Section_Heading(entries, target){
	
	entries.forEach( entry => {
		if(entry.isIntersecting){
			
			entry.target.classList.add("animate_section_heading");
			
		}
		
	});
	
}

const animate_Section_Heading_Root =
{
	root : null,
	rootMargin : "0px",
	threshold : 0.2,
	
}

const animate_Section_Heading_Intersection_API = new IntersectionObserver(animate_Section_Heading, animate_Section_Heading_Root);
get_Section_Heading.forEach( target => {animate_Section_Heading_Intersection_API.observe(target)});




//ECOTOURISM TEXT ANIMATION


const story_Text = document.querySelectorAll('.story_section_content, .message_section_beta_text');

function animate_Story_Text(entries,target){
    entries.forEach(
	    (entry) => {
            if(entry.isIntersecting){
			    entry.target.classList.add("char_animated");
				entry.target.unobserve;
			}
		});
}

const animate_Story_Text_Root = 
{
	root : null,
	rootMargin : "0px",
	threshold : 0.4
	
	
}


const observe_Story_Text = new IntersectionObserver(animate_Story_Text, animate_Story_Text_Root);
story_Text.forEach((target) => observe_Story_Text.observe(target));




const wrapper = document.querySelector('.mobile_slides');
// const nextButton = document.getElementById('next-button');
// const prevButton = document.getElementById('prev-button');

// const slideHeight = window.innerWidth;
const slideHeight = 350;
const actualSlides = 3; // Total number of unique slides (1, 2, 3)
const totalItems = actualSlides + 2; // 5 (Duplicate 3, Real 1, 2, 3, Duplicate 1)

// Start at index 1 (the position of the real Slide 1)
let currentSlideIndex = 1; 

// --- Core Logic ---
function updateSlide(newIndex) {
    currentSlideIndex = newIndex;
    const offset = -currentSlideIndex * slideHeight;
    wrapper.style.transform = `translateX(${offset}px)`;
}

// --- Forward Loop Handler ---
function nextSlide() {
    // 1. Prevent action if already transitioning (optional)
    if (currentSlideIndex === totalItems - 1) { // If on the Duplicate 1, only handle the loop reset
        // The reset logic handles the jump back to 1
    }

    // Move to the next physical item
    updateSlide(currentSlideIndex + 1);

    // Check if we moved to the *duplicate* Slide 1 (index 4)
    if (currentSlideIndex === totalItems - 1) {
        // Wait for the transition to finish
        setTimeout(() => {
            // Instant snap back to REAL Slide 1 (index 1)
            wrapper.style.transition = 'none';
            updateSlide(1); 
            
            // Re-enable transition
            setTimeout(() => {
                wrapper.style.transition = 'transform 0.5s ease-in-out';
            }, 50);
        }, 500); // 0.5s duration
    }
}


// --- Backward Loop Handler ---
function prevSlide() {
    // Move to the previous physical item
    updateSlide(currentSlideIndex - 1);

    // Check if we moved to the *duplicate* Slide 3 (index 0)
    if (currentSlideIndex === 0) {
        // Wait for the transition to finish
        setTimeout(() => {
            // Instant snap back to REAL Slide 3 (index 3)
            wrapper.style.transition = 'none';
            updateSlide(actualSlides); 
            
            // Re-enable transition
            setTimeout(() => {
                wrapper.style.transition = 'transform 0.5s ease-in-out';
            }, 50);
        }, 500); // 0.5s duration
    }
}


// nextButton.addEventListener('click', nextSlide);
// prevButton.addEventListener('click', prevSlide);
// Initial position set outside the functions (or in CSS)
// updateSlide(currentSlideIndex); // Optional: If not set in CSS


let next_Slide_Action = setInterval(nextSlide, 4000);