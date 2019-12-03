'use strict'


window.onscroll = function showHeader(){

    var header = document.querySelector('.main-header');

    if (window.pageYOffset > 200) {
        header.classList.add('main-header-fixed');
    }else{
        header.classList.remove('main-header-fixed');
    }
}