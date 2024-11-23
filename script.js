let light = false;

let remSize = document.getElementById('github_button').offsetWidth / 2.25;


let menuElems = document.getElementsByClassName('menu_content');
let tLayer = document.getElementById('transparent_layer');
let nav = document.getElementById('navbar');
let sun = document.getElementsByClassName('lucide-sun');
let moon = document.getElementsByClassName('lucide-moon-star');
let HTML = document.documentElement;
let scrollWidth = 17;
let menuWidth = remSize * 20;

for (i = 0; i < moon.length; i++) {
    moon[i].classList.add('hide');
}


function cpy_email() {
    navigator.clipboard.writeText(document.getElementById('email').innerHTML);
}
function cpy_num() {
    navigator.clipboard.writeText(document.getElementById('number').innerHTML);
}



function openMenu() {
    document.body.classList.add('noScroll');
    const elem = document.getElementById('menu_list');
    elem.classList.remove('defocus');
    elem.classList.add('focus');
    if (window.outerHeight > 330) {
        elem.classList.replace('menu_scroll', 'menu_noscroll');
    }
    else {
        elem.classList.replace('menu_noscroll', 'menu_scroll');
    }
    elem.classList.add('menu_bg');
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
    elem.classList.replace('focus', 'defocus');
    document.getElementById('main').style.marginRight = '0';
    elem.id = 'menu_list';
    tLayer.classList.remove('show_layer');
}

function listenScrolldown() {
    window.addEventListener('scroll', function show() {
        if (document.documentElement.scrollTop > 90) {
            nav.classList.replace('navbar_border', 'navbar_border_scroll');
            window.removeEventListener('scroll', show);
            listenScrollup();
        }
    });
}
function listenScrollup() {
    window.addEventListener('scroll', function hide() {
        if (document.documentElement.scrollTop <= 90) {
            nav.classList.replace('navbar_border_scroll', 'navbar_border');
            window.removeEventListener('scroll', hide);
            listenScrolldown();
        }
    });
}


listenScrolldown();

if (document.documentElement.scrollTop > 90) {
    nav.classList.replace('navbar_border', 'navbar_border_scroll');

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
        HTML.classList.replace('dark', 'light');
        if (document.documentElement.scrollTop > 90) {
            nav.classList.replace('navbar_border', 'navbar_border_scroll');
        }
        else {
            nav.classList.replace('navbar_border_scroll', 'navbar_border');
        }
        let express = document.getElementById('express');
        express.classList.replace('express_light', 'express_dark');
        let three = document.getElementById('three');
        three.classList.replace('three_light', 'three_dark');
        for (i = 0; i < sun.length; i++) {
            sun[i].classList.add('hide');
        }
        for (i = 0; i < moon.length; i++) {
            moon[i].classList.remove('hide');
        }
        //more lightmode codes
    }
    else {
        light = false;
        document.cookie = false;
        HTML.classList.replace('light', 'dark');
        if (document.documentElement.scrollTop > 90) {
            nav.classList.replace('navbar_border', 'navbar_border_scroll');
        }
        else {
            nav.classList.replace('navbar_border_scroll', 'navbar_border');
        }
        let express = document.getElementById('express');
        express.classList.replace('express_dark', 'express_light');
        let three = document.getElementById('three');
        three.classList.replace('three_dark', 'three_light');
        for (i = 0; i < sun.length; i++) {
            sun[i].classList.remove('hide');
        }
        for (i = 0; i < moon.length; i++) {
            moon[i].classList.add('hide');
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
            nav.classList.replace('navbar_border_scroll', 'navbar_border');
        }
        else {
            nav.classList.replace('navbar_border', 'navbar_border_scroll');
        }
    }
    else {
        nav.classList.replace('navbar_border', 'navbar_border_scroll');
    }
    let menu = document.getElementById('opened_menu');
    if (menu && window.outerHeight > 330) {
        menu.classList.replace('menu_scroll', 'menu_noscroll');
    }
    else if (menu) {
        menu.classList.replace('menu_noscroll', 'menu_scroll');
    }
});