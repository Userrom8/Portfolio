let light = false;

let remSize = document.getElementById("github_button").offsetWidth / 2.25;

let menuElems = document.getElementsByClassName("menu_content");
let tLayer = document.getElementById("transparent_layer");
let nav = document.getElementById("navbar");
let sun = document.getElementsByClassName("lucide-sun");
let moon = document.getElementsByClassName("lucide-moon-star");
let skills = document.getElementsByClassName("skill_item");
let HTML = document.documentElement;
let menuWidth = remSize * 20;
let isOpenedMenu = false;

if (document.cookie === "true") {
  HTML.classList.replace("dark", "light");
  if (document.documentElement.scrollTop > 90) {
    nav.classList.replace("navbar_border", "navbar_border_scroll");
  } else {
    nav.classList.replace("navbar_border_scroll", "navbar_border");
  }
  let express = document.getElementById("express_img");
  express.src = "assets/icon-express-dark.svg";
  let three = document.getElementById("three_img");
  three.src = "assets/icon-threejs-dark.svg";
  for (i = 0; i < sun.length; i++) {
    sun[i].classList.add("hide");
  }
  for (i = 0; i < moon.length; i++) {
    moon[i].classList.remove("hide");
  }
}

for (i = 0; i < skills.length; i++) {
  skills[i].classList.add("appear");
  skills[i].style.cssText = `--staggered-entry-start: ${(i % 3) * 10}%; --staggered-entry-start-md: ${(i % 6) * 10}%; --staggered-entry-start-lg: ${(i % 8) * 10}%;`;
}

function cpy_email() {
  navigator.clipboard.writeText(document.getElementById("email").innerHTML);
}
function cpy_num() {
  navigator.clipboard.writeText(document.getElementById("number").innerHTML);
}

function openMenu() {
  isOpenedMenu = true;
  let bodyWidth = document.body.offsetWidth;
  document.body.classList.add("noScroll");
  document.body.style.marginRight =
    document.body.offsetWidth - bodyWidth + "px";
  const elem = document.getElementById("menu_list");
  elem.classList.remove("defocus");
  elem.classList.add("focus");
  elem.classList.add("menu_bg");
  elem.id = "opened_menu";
  tLayer.classList.add("show_layer");
  document.body.addEventListener("click", function event(ev) {
    const ham_menu = document.getElementById("hamburger_menu");
    const close_button = document.getElementById("close_menu");
    for (j = 0; j < menuElems.length; j++) {
      if (menuElems[j].contains(ev.target)) {
        if (isOpenedMenu) closeMenu();
        document.body.removeEventListener("click", event);
      }
    }
    if (
      close_button.contains(ev.target) ||
      (tLayer.contains(ev.target) && !ham_menu.contains(ev.target))
    ) {
      if (isOpenedMenu) closeMenu();
      document.body.removeEventListener("click", event);
    }
  });
}
function closeMenu() {
  isOpenedMenu = false;
  let bodyWidth = HTML.offsetWidth;
  const elem = document.getElementById("opened_menu");
  if (HTML.offsetWidth <= 320) menuWidth = remSize * 18;
  else menuWidth = remSize * 20;
  document.body.classList.remove("noScroll");
  document.body.style.marginRight = "0";
  let scrollWidth = bodyWidth - document.body.offsetWidth;
  elem.style.width = menuWidth - scrollWidth + "px";
  elem.classList.replace("focus", "defocus");
  document.getElementById("main").style.marginRight = "0";
  elem.id = "menu_list";
  tLayer.classList.remove("show_layer");
}

function listenScrolldown() {
  window.addEventListener("scroll", function show() {
    if (document.documentElement.scrollTop > 90) {
      nav.classList.replace("navbar_border", "navbar_border_scroll");
      window.removeEventListener("scroll", show);
      listenScrollup();
    }
  });
}
function listenScrollup() {
  window.addEventListener("scroll", function hide() {
    if (document.documentElement.scrollTop <= 90) {
      nav.classList.replace("navbar_border_scroll", "navbar_border");
      window.removeEventListener("scroll", hide);
      listenScrolldown();
    }
  });
}

listenScrolldown();

if (document.documentElement.scrollTop > 90) {
  nav.classList.replace("navbar_border", "navbar_border_scroll");
}

document.getElementById("github_button").addEventListener("click", () => {
  window.open("https://github.com/Userrom8");
});
document.getElementById("twitter_button").addEventListener("click", () => {
  window.open("https://x.com/userrom02");
});
document.getElementById("linkedin_button").addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/romit-biswas-709b46252/");
});

document
  .getElementById("github_footer_button")
  .addEventListener("click", () => {
    window.open("https://github.com/Userrom8");
  });
document
  .getElementById("twitter_footer_button")
  .addEventListener("click", () => {
    window.open("https://x.com/userrom02");
  });
document
  .getElementById("linkedin_footer_button")
  .addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/romit-biswas-709b46252/");
  });

function toggle() {
  if (HTML.classList.contains("dark")) {
    light = true;
    document.cookie = true;
    HTML.classList.replace("dark", "light");
    if (document.documentElement.scrollTop > 90) {
      nav.classList.replace("navbar_border", "navbar_border_scroll");
    } else {
      nav.classList.replace("navbar_border_scroll", "navbar_border");
    }
    let express = document.getElementById("express_img");
    express.src = "assets/icon-express-dark.svg";
    let three = document.getElementById("three_img");
    three.src = "assets/icon-threejs-dark.svg";
    for (i = 0; i < sun.length; i++) {
      sun[i].classList.add("hide");
    }
    for (i = 0; i < moon.length; i++) {
      moon[i].classList.remove("hide");
    }
    //more lightmode codes
  } else {
    light = false;
    document.cookie = false;
    HTML.classList.replace("light", "dark");
    if (document.documentElement.scrollTop > 90) {
      nav.classList.replace("navbar_border", "navbar_border_scroll");
    } else {
      nav.classList.replace("navbar_border_scroll", "navbar_border");
    }
    let express = document.getElementById("express_img");
    express.src = "assets/icon-express-light.svg";
    let three = document.getElementById("three_img");
    three.src = "assets/icon-threejs-light.svg";
    for (i = 0; i < sun.length; i++) {
      sun[i].classList.remove("hide");
    }
    for (i = 0; i < moon.length; i++) {
      moon[i].classList.add("hide");
    }
    //more darkmode codes
  }
}

document.getElementById("mode_toggle").addEventListener("click", toggle);
document.getElementById("menu_mode_toggle").addEventListener("click", toggle);

window.addEventListener("resize", () => {
  if (window.innerWidth > 768 && document.documentElement.scrollTop < 90) {
    nav.classList.replace("navbar_border_scroll", "navbar_border");
  } else {
    nav.classList.replace("navbar_border", "navbar_border_scroll");
  }
  if (isOpenedMenu) {
    if (HTML.offsetWidth > 768) {
      closeMenu();
    }
  }
});

document.body.classList.replace("no_transition", "transition");
