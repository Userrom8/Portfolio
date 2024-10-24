var light = false;

var remSize = document.getElementById('github_button').offsetWidth / 2.25;


var menuElems = document.getElementsByClassName('menu_content');
var socialElems = document.getElementsByClassName('socials_container');
var tLayer = document.getElementById('transparent_layer');
var sectionLight = document.getElementsByClassName('section_light');
var header = document.getElementsByClassName('header_text');
var para = document.getElementsByClassName('para_text');
var glow = document.getElementsByClassName('glow');
var nav = document.getElementById('navbar');
var toggleButtons = document.getElementsByClassName('btn_ptr');
var toggleButtonsContainer = document.getElementsByClassName('btn_ptr_container');
var downloadButtons = document.getElementsByClassName('download_button');
var sun = document.getElementsByClassName('lucide-sun');
var moon = document.getElementsByClassName('lucide-moon-star');
var HTML = document.documentElement;
var scrollWidth = 17;
var menuWidth = remSize * 20;

for (i = 0; i < moon.length; i++) {
    moon[i].classList.add('hide');
}

setTimeout(() => {
    document.getElementById('watermark_part2').classList.remove('hide');
    document.getElementById('watermark_part1').style.borderColor = 'transparent';
}, 2000);

function cpy_email() {
    navigator.clipboard.writeText(document.getElementById('email').innerHTML);
}
function cpy_num() {
    navigator.clipboard.writeText(document.getElementById('number').innerHTML);
}



function openMenu() {
    for (k = 0; k < socialElems.length; k++) socialElems[k].classList.remove('socials_hover');
    document.body.classList.add('noScroll');
    const elem = document.getElementById('menu_list');
    elem.classList.remove('defocus');
    elem.classList.add('focus');
    if (!light) {
        elem.classList.add('menu_bg-dark');
        elem.classList.remove('menu_bg-light');
    }
    else {
        elem.classList.add('menu_bg-light');
        elem.classList.remove('menu_bg-dark');
    }
    scrollWidth = window.outerWidth - document.body.offsetWidth + 1;
    document.getElementById('main').style.marginRight = scrollWidth + 'px';    //scrollbar width
    elem.id = 'opened_menu';
    tLayer.classList.add('show_layer');
    document.body.addEventListener('click', function event(ev) {
        const ham_menu = document.getElementById('hamburger_menu');
        const close_button = document.getElementById('close_menu');
        for (j = 0; j < menuElems.length; j++) {
            if (menuElems[j].contains(ev.target)) {
                closeMenu();
                document.body.removeEventListener('click', event);
            }
        }
        if (close_button.contains(ev.target) || tLayer.contains(ev.target) && !ham_menu.contains(ev.target)) {
            closeMenu();
            document.body.removeEventListener('click', event);
        }
    });
}
function closeMenu() {
    document.body.classList.remove('noScroll');
    const elem = document.getElementById('opened_menu');
    if (window.outerWidth <= 320) menuWidth = remSize * 18;
    else menuWidth = remSize * 20;
    elem.style.width = menuWidth - scrollWidth + 'px';
    elem.classList.add('defocus');
    elem.classList.remove('focus');
    document.getElementById('navbar').classList.remove('shrink');
    document.getElementById('main').style.marginRight = '0';
    elem.id = 'menu_list';
    for (k = 0; k < socialElems.length; k++) socialElems[k].classList.add('socials_hover');
    tLayer.classList.remove('show_layer');
    setTimeout(function () {
        elem.style.width = menuWidth + 'px';
        elem.classList.remove('defocus');
    }, 200);
}

function listenScrolldown() {
    window.addEventListener('scroll', function show() {
        if (document.documentElement.scrollTop > 90) {
            if (!light) {
                nav.classList.remove('navbar_dark_border');
                nav.classList.remove('navbar_light_border');
                nav.classList.add('navbar_dark_border_scroll');
                nav.classList.remove('navbar_light_border_scroll');
                nav.style.background = "rgba(3, 7, 18, 0.4)";
            }
            else {
                nav.classList.remove('navbar_dark_border');
                nav.classList.remove('navbar_light_border');
                nav.classList.remove('navbar_dark_border_scroll');
                nav.classList.add('navbar_light_border_scroll');
                nav.style.background = "rgba(255, 255, 255, 0.4)";
            }
            nav.style.backdropFilter = "blur(25px)";
            window.removeEventListener('scroll', show);
            listenScrollup();
        }
    });
}
function listenScrollup() {
    window.addEventListener('scroll', function hide() {
        if (document.documentElement.scrollTop <= 90) {
            if (!light) {
                nav.classList.add('navbar_dark_border');
                nav.classList.remove('navbar_light_border');
                nav.classList.remove('navbar_dark_border_scroll');
                nav.classList.remove('navbar_light_border_scroll');
                nav.style.backgroundColor = "#030712";
            }
            else {
                nav.classList.remove('navbar_dark_border');
                nav.classList.add('navbar_light_border');
                nav.classList.remove('navbar_dark_border_scroll');
                nav.classList.remove('navbar_light_border_scroll');
                nav.style.backgroundColor = "#ffffff";
            }
            window.removeEventListener('scroll', hide);
            listenScrolldown();
        }
    });
}


listenScrolldown();

if (document.documentElement.scrollTop > 90) {
    nav.classList.remove('navbar_dark_border');
    nav.classList.remove('navbar_light_border');
    nav.classList.add('navbar_dark_border_scroll');
    nav.classList.remove('navbar_light_border_scroll');
    nav.style.background = "rgba(3, 7, 18, 0.4)";
    nav.style.backdropFilter = "blur(25px)";
}

document.getElementById('github_button').addEventListener('click', () => {
    window.open("https://github.com/Userrom8")
});
document.getElementById('twitter_button').addEventListener('click', () => {
    window.open("https://x.com/userrom02")
});
document.getElementById('linkedin_button').addEventListener('click', () => {
    window.open("https://www.linkedin.com/in/romit-biswas-709b46252/")
});

document.getElementById('github_footer_button').addEventListener('click', () => {
    window.open("https://github.com/Userrom8")
});
document.getElementById('twitter_footer_button').addEventListener('click', () => {
    window.open("https://x.com/userrom02")
});
document.getElementById('linkedin_footer_button').addEventListener('click', () => {
    window.open("https://www.linkedin.com/in/romit-biswas-709b46252/")
});



function toggle() {
    if (HTML.classList.contains('dark')) {
        light = true;
        document.cookie = true;
        HTML.classList.add('light');
        HTML.classList.remove('dark');
        document.body.style.backgroundColor = "#ffffff"
        for (i = 0; i < sectionLight.length; i++) sectionLight[i].style.backgroundColor = "#f9fafb";
        for (i = 0; i < header.length; i++) {
            header[i].classList.add('text_heading_dark');
            header[i].classList.remove('text_heading_light');
        }
        for (i = 0; i < para.length; i++) {
            para[i].classList.add('text_para_dark');
            para[i].classList.remove('text_para_light');
        }
        var opmen = document.getElementById('opened_menu');
        if (opmen) {
            opmen.classList.add('menu_bg-light');
            opmen.classList.remove('menu_bg-dark');
        }
        for (i = 0; i < glow.length; i++) {
            glow[i].classList.add('glow_dark');
            glow[i].classList.remove('glow_light');
        }
        if (document.documentElement.scrollTop > 90) {
            nav.classList.remove('navbar_dark_border_scroll');
            nav.classList.remove('navbar_dark_border');
            nav.classList.add('navbar_light_border_scroll');
            nav.classList.remove('navbar_light_border');
            nav.style.background = "rgba(255, 255, 255, 0.4)";
        }
        else {
            nav.classList.remove('navbar_dark_border_scroll');
            nav.classList.remove('navbar_dark_border');
            nav.classList.remove('navbar_light_border_scroll');
            nav.classList.add('navbar_light_border');
            nav.style.background = "rgba(255, 255, 255)";
        }
        for (i = 0; i < toggleButtons.length; i++) {
            toggleButtons[i].classList.add('glow_button_toggle_light');
        }
        var dynBorder = document.getElementsByClassName('dynamic_border');
        for (i = 0; i < dynBorder.length; i++) {
            dynBorder[i].classList.add('border_light');
            dynBorder[i].classList.remove('border_dark');
        }
        var stickers = document.getElementsByClassName('sticker_container');
        for (i = 0; i < stickers.length; i++) {
            stickers[i].classList.add('sticker_light');
            stickers[i].classList.remove('sticker_dark');
        }
        document.getElementById('nav_image').classList.add('img_hero_light');
        document.getElementById('nav_image').classList.remove('img_hero_dark');
        document.getElementById('about_image').classList.add('img_about_light');
        document.getElementById('about_image').classList.remove('img_about_dark');
        document.getElementById('nav_backdrop').classList.add('backdrop_light');
        document.getElementById('nav_backdrop').classList.remove('backdrop_dark');
        document.getElementById('about_backdrop').classList.add('backdrop_light');
        document.getElementById('about_backdrop').classList.remove('backdrop_dark');
        for (i = 0; i < downloadButtons.length; i++) {
            downloadButtons[i].classList.add('light_button');
            downloadButtons[i].classList.remove('dark_button');
            downloadButtons[i].classList.add('lighten');
            downloadButtons[i].classList.remove('darken');
        }
        for (i = 0; i < toggleButtonsContainer.length; i++) {
            toggleButtonsContainer[i].classList.add('btn_ptr_container_dark');
            toggleButtonsContainer[i].classList.remove('btn_ptr_container_light');
        }
        var express = document.getElementById('express');
        express.classList.add('express_dark');
        express.classList.remove('express_light');
        var three = document.getElementById('three');
        three.classList.add('three_dark');
        three.classList.remove('three_light');
        for (i = 0; i < sun.length; i++) {
            sun[i].classList.add('hide');
        }
        for (i = 0; i < moon.length; i++) {
            moon[i].classList.remove('hide')
        }
        //more lightmode codes
    }
    else {
        light = false;
        document.cookie = false;
        HTML.classList.add('dark');
        HTML.classList.remove('light');
        document.body.style.backgroundColor = "#030712"
        for (i = 0; i < sectionLight.length; i++) sectionLight[i].style.backgroundColor = "#111827";
        for (i = 0; i < header.length; i++) {
            header[i].classList.add('text_heading_light');
            header[i].classList.remove('text_heading_dark');
        }
        for (i = 0; i < para.length; i++) {
            para[i].classList.add('text_para_light');
            para[i].classList.remove('text_para_dark');
        }
        var opmen = document.getElementById('opened_menu');
        if (opmen) {
            opmen.classList.add('menu_bg-dark');
            opmen.classList.remove('menu_bg-light');
        }
        for (i = 0; i < glow.length; i++) {
            glow[i].classList.add('glow_light');
            glow[i].classList.remove('glow_dark');
        }
        if (document.documentElement.scrollTop > 90) {
            nav.classList.add('navbar_dark_border_scroll');
            nav.classList.remove('navbar_dark_border');
            nav.classList.remove('navbar_light_border_scroll');
            nav.classList.remove('navbar_light_border');
            nav.style.background = "rgba(3, 7, 18, 0.4)";
        }
        else {
            nav.classList.remove('navbar_dark_border_scroll');
            nav.classList.add('navbar_dark_border');
            nav.classList.remove('navbar_light_border_scroll');
            nav.classList.remove('navbar_light_border');
            nav.style.background = "rgba(3, 7, 18)";
        }
        for (i = 0; i < toggleButtons.length; i++) {
            toggleButtons[i].classList.remove('glow_button_toggle_light');
        }
        var dynBorder = document.getElementsByClassName('dynamic_border');
        for (i = 0; i < dynBorder.length; i++) {
            dynBorder[i].classList.remove('border_light');
            dynBorder[i].classList.add('border_dark');
        }
        var stickers = document.getElementsByClassName('sticker_container');
        for (i = 0; i < stickers.length; i++) {
            stickers[i].classList.remove('sticker_light');
            stickers[i].classList.add('sticker_dark');
        }
        document.getElementById('nav_image').classList.remove('img_hero_light');
        document.getElementById('nav_image').classList.add('img_hero_dark');
        document.getElementById('about_image').classList.remove('img_about_light');
        document.getElementById('about_image').classList.add('img_about_dark');
        document.getElementById('nav_backdrop').classList.remove('backdrop_light');
        document.getElementById('nav_backdrop').classList.add('backdrop_dark');
        document.getElementById('about_backdrop').classList.remove('backdrop_light');
        document.getElementById('about_backdrop').classList.add('backdrop_dark');
        for (i = 0; i < downloadButtons.length; i++) {
            downloadButtons[i].classList.remove('light_button');
            downloadButtons[i].classList.add('dark_button');
            downloadButtons[i].classList.remove('lighten');
            downloadButtons[i].classList.add('darken');
        }
        for (i = 0; i < toggleButtonsContainer.length; i++) {
            toggleButtonsContainer[i].classList.remove('btn_ptr_container_dark');
            toggleButtonsContainer[i].classList.add('btn_ptr_container_light');
        }
        var express = document.getElementById('express');
        express.classList.remove('express_dark');
        express.classList.add('express_light');
        var three = document.getElementById('three');
        three.classList.remove('three_dark');
        three.classList.add('three_light');
        for (i = 0; i < sun.length; i++) {
            sun[i].classList.remove('hide');
        }
        for (i = 0; i < moon.length; i++) {
            moon[i].classList.add('hide')
        }
        //more darkmode codes
    }
}


document.getElementById('mode_toggle').addEventListener('click', toggle);
document.getElementById('menu_mode_toggle').addEventListener('click', toggle);


if (document.cookie === 'true') toggle();

window.addEventListener('resize', () => {
    if (window.outerWidth > 768) {
        if (document.documentElement.scrollTop < 90) {
            if (!light) {
                nav.classList.add('navbar_dark_border');
                nav.classList.remove('navbar_dark_border_scroll');
                nav.classList.remove('navbar_light_border_scroll');
                nav.classList.remove('navbar_light_border');
            }
            else {
                nav.classList.add('navbar_light_border');
                nav.classList.remove('navbar_dark_border_scroll');
                nav.classList.remove('navbar_light_border_scroll');
                nav.classList.remove('navbar_dark_border');
            }
        }
        else {
            if (!light) {
                nav.classList.add('navbar_dark_border_scroll');
                nav.classList.remove('navbar_dark_border');
                nav.classList.remove('navbar_light_border_scroll');
                nav.classList.remove('navbar_light_border');
            }
            else {
                nav.classList.add('navbar_light_border_scroll');
                nav.classList.remove('navbar_dark_border_scroll');
                nav.classList.remove('navbar_dark_border');
                nav.classList.remove('navbar_light_border');
            }
        }
    }
    else {
        if (!light) {
            nav.classList.add('navbar_dark_border_scroll');
            nav.classList.remove('navbar_dark_border');
            nav.classList.remove('navbar_light_border_scroll');
            nav.classList.remove('navbar_light_border');
        }
        else {
            nav.classList.add('navbar_light_border_scroll');
            nav.classList.remove('navbar_dark_border_scroll');
            nav.classList.remove('navbar_dark_border');
            nav.classList.remove('navbar_light_border');
        }
    }
});