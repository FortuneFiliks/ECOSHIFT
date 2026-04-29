// =========================
// SAFE DOCUMENT READY BLOCK
// =========================
$(document).ready(function () {

  // ---------- LEFT MENU TOGGLE ----------
  let isMenuOpen = false;

  $(".hamburger_button").on("click", function () {
    if (!isMenuOpen) {
      $(".left_menu_section").css({
        display: "block",
        transform: "translateX(0)"
      });
      $("body").css({ "overflow-y": "hidden" });
    } else {
      $("body").css({ "overflow-y": "visible" });
      $(".left_menu_section").css({
        transform: "translateX(-100%)"
      });
    }
    isMenuOpen = !isMenuOpen;
  });

  // ---------- MOBILE MENU ----------
let isMobileMenuOpen = false;

$(document).on("click", ".mobile_hamburger_button", function () {
  if (!isMobileMenuOpen) {
    $("body").css({ "overflow-y": "hidden" });
    $(".mobile_menu_section").css({ display: "block" });
  } else {
    $("body").css({ "overflow-y": "visible" });
    $(".mobile_menu_section").css({ display: "none" });
  }
  isMobileMenuOpen = !isMobileMenuOpen;
});


});

// =========================
// SLIDER (SAFE)
// =========================
let slide_Index = 1;

function show_Slides(n) {
  const slides = document.getElementsByClassName("slide_item");
  if (!slides.length) return;

  if (n > slides.length) slide_Index = 1;
  if (n < 1) slide_Index = slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slide_Index - 1].style.display = "inline-block";
}

function plus_Slides(n) {
  show_Slides(slide_Index += n);
}

show_Slides(slide_Index);


// =========================
// INTERSECTION OBSERVERS (SAFE)
// =========================
function safeObserve(element, callback, options = {}) {
  if (!element) return;
  const observer = new IntersectionObserver(callback, options);
  observer.observe(element);
}


// ---------- BUTTON ANIMATION ----------
const get_Button = document.querySelector(".gallery_button");

safeObserve(get_Button, (entries) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("animate_Button", entry.isIntersecting);
  });
}, { root: null, rootMargin: "200px", threshold: 0 });


// ---------- HERE HEADER ----------
const get_Here_Header = document.querySelector(".here_header");

safeObserve(get_Here_Header, (entries) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("animate_Here_Header", entry.isIntersecting);
  });
}, { root: null, rootMargin: "200px", threshold: 0.2 });


// =========================
// SOLUTIONS SECTION (SAFE)
// =========================
function safeClick(element, handler) {
  if (element) element.addEventListener("click", handler);
}

function toggleFlex(active, all) {
  all.forEach(el => {
    if (el) el.style.display = "none";
  });
  if (active) active.style.display = "flex";
}

// Elements
const careBtn = document.querySelector(".care_facility");
const libraryBtn = document.querySelector(".books");
const transportBtn = document.querySelector(".transport");
const healthBtn = document.querySelector(".health");
const sol5Btn = document.querySelector(".solution5");
const sol6Btn = document.querySelector(".solution6");

const careFlex = document.querySelector(".care_flex");
const libraryFlex = document.querySelector(".library_flex");
const transportFlex = document.querySelector(".transport_flex");
const healthFlex = document.querySelector(".health_flex");
const sol5Flex = document.querySelector(".solution5_flex");
const sol6Flex = document.querySelector(".solution6_flex");

const allFlex = [careFlex, libraryFlex, transportFlex, healthFlex, sol5Flex, sol6Flex];

// Bind safely
safeClick(careBtn, () => toggleFlex(careFlex, allFlex));
safeClick(libraryBtn, () => toggleFlex(libraryFlex, allFlex));
safeClick(transportBtn, () => toggleFlex(transportFlex, allFlex));
safeClick(healthBtn, () => toggleFlex(healthFlex, allFlex));
safeClick(sol5Btn, () => toggleFlex(sol5Flex, allFlex));
safeClick(sol6Btn, () => toggleFlex(sol6Flex, allFlex));


// =========================
// MOBILE SOLUTIONS (SAFE)
// =========================
const mCareBtn = document.querySelector(".mobile_care_facility");
const mLibraryBtn = document.querySelector(".mobile_books");
const mTransportBtn = document.querySelector(".mobile_transport");
const mHealthBtn = document.querySelector(".mobile_health");
const mSol5Btn = document.querySelector(".mobile_solution5");
const mSol6Btn = document.querySelector(".mobile_solution6");

const mCare = document.querySelector(".mobile_care_content");
const mLibrary = document.querySelector(".mobile_library_content");
const mTransport = document.querySelector(".mobile_transport_content");
const mHealth = document.querySelector(".mobile_health_content");
const mSol5 = document.querySelector(".mobile_solution5_content");
const mSol6 = document.querySelector(".mobile_solution6_content");

const allMobile = [mCare, mLibrary, mTransport, mHealth, mSol5, mSol6];

safeClick(mCareBtn, () => toggleFlex(mCare, allMobile));
safeClick(mLibraryBtn, () => toggleFlex(mLibrary, allMobile));
safeClick(mTransportBtn, () => toggleFlex(mTransport, allMobile));
safeClick(mHealthBtn, () => toggleFlex(mHealth, allMobile));
safeClick(mSol5Btn, () => toggleFlex(mSol5, allMobile));
safeClick(mSol6Btn, () => toggleFlex(mSol6, allMobile));


// =========================
// GENERIC TEXT OBSERVER
// =========================
document.querySelectorAll(".egi_process_heading").forEach(el => {
  safeObserve(el, (entries) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("animate_Seven", entry.isIntersecting);
    });
  });
});


// =========================
// SECTION ANIMATIONS (SAFE)
// =========================
function animateClass(selector, className, options = {}) {
  const el = document.querySelector(selector);
  safeObserve(el, (entries) => {
    entries.forEach(entry => {
      entry.target.classList.toggle(className, entry.isIntersecting);
    });
  }, options);
}

animateClass(".third_section_first_flex", "animate_Third_Section_First_Flex", { threshold: 0.2 });
animateClass(".third_section_second_flex", "animate_Third_Section_Second_Flex", { threshold: 0.2 });
animateClass(".fourth_section_content", "animate_Fourth_Section", { threshold: 0.5 });
animateClass(".fifth_section_right_flex", "animate_fifth_section_right_flex");
animateClass(".fifth_section_left_flex", "animate_fifth_section_left_flex");


// =========================
// TEXT SPLIT ANIMATION (SAFE)
// =========================
function splitTextAnimation(id) {
  const el = document.getElementById(id);
  if (!el) return;

  safeObserve(el, (entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const text = el.innerText;
      let newDom = "";

      for (let i = 0; i < text.length; i++) {
        newDom += `<div class="char">${text[i] === " " ? "&nbsp;" : text[i]}</div>`;
      }

      el.innerHTML = newDom;

      Array.from(el.children).forEach((child, i) => {
        child.style.animationDelay = `${6 * i}ms`;
      });
    });
  });
}

splitTextAnimation("text");
splitTextAnimation("innovative_text");
splitTextAnimation("industrial_text");


// =========================
// SIXTH SECTION SLIDER (SAFE)
// =========================
let sixth_Index = 1;

function sixth_Show_Slides(n) {
  const slides = document.getElementsByClassName("sixth_section_slide_item");
  if (!slides.length) return;

  if (n > slides.length) sixth_Index = 1;
  if (n < 1) sixth_Index = slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[sixth_Index - 1].style.display = "inline-block";
}

function sixth_Plus_Slides(n) {
  sixth_Show_Slides(sixth_Index += n);
}

sixth_Show_Slides(sixth_Index);


// =========================
// FINAL TEXT ANIMATION
// =========================
document.querySelectorAll('.ecotourism_text, .ecotourism2_text, .ecotourism3_text, .care_content, .library_content, .transport_content, .health_content, .solution5_content, .solution6_content')
.forEach(el => {
  safeObserve(el, (entries) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("char_animated", entry.isIntersecting);
    });
  });
});