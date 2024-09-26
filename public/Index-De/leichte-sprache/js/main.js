

$(document).ready(function() {
    
    $('body').on('click', '.hamburger', function() {
        $('body, .main-nav, .nav-options').toggleClass('open-mobile-nav');
        $('.hamburger').toggleClass('is-active');
    });  
    
    $('body').on('click', '.theme-switch', function() {
        $('body').toggleClass('dark');
        if($('body').hasClass('dark')) {
            setCookie('theme', 'dark', 365);
        } else {
            setCookie('theme', 'light', 365);
        }
    });  
    
    $('.accordeon-hdg-items--content').hide();
    $('body').on('click', '.accordeon-hdg-items--title', function() {
        $(this).next().stop(true,false).slideToggle();
        $(this).toggleClass('open');
    });  
    
    $('.header .search svg').click(function() {
        $('.tx-indexedsearch-searchbox.header').toggleClass('show');
        $(this).toggleClass('show');
        if($('.tx-indexedsearch-searchbox.header').hasClass('show')) {
            $('.tx-indexedsearch-searchbox.header .tx-indexedsearch-searchbox-sword').get(0).focus();
        }
    });
    
    $('.read-more-button').click(function() {
        $(this).parent().next().slideDown();
        $(this).parent().slideUp();
    });
    $('.read-more-container').hide();

    checkScrollPositionForIndicator();
    
    $('.pin-karte-pins--pin').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        if($(e.target).hasClass('btn-red')) {
            window.location.href = $(e.target).attr('href');
        }
    });
    
    $('.pin-karte-pins--pin-marker').on('mouseover', function() {
        if($(this).parent().parent().parent().hasClass('zoomed')) {
            $('body').append($(this).prev().clone().addClass('absolute-marker-content'));
            $('.absolute-marker-content').css('left', $(this).offset().left);
            $('.absolute-marker-content').css('top', $(this).offset().top);
            $('.absolute-marker-content').css('opacity', 1);
        }
    });
    $('.pin-karte-pins--pin-marker').on('mouseout', function() {
        if($(this).parent().parent().parent().hasClass('zoomed')) {
            $('.absolute-marker-content').remove();
        }
    });
    
    $('.karte-year-filter select').on('change', function() {
        var yearToShow = $(this).val();
        if(yearToShow == "*") {
            $('.pin-karte-pins--pin').removeClass('pin-hidden-hidden');
        } else {
            $('.pin-karte-pins--pin').addClass('pin-hidden-hidden');
            $('.pin-karte-pins--pin[data-year="' + yearToShow + '"]').removeClass('pin-hidden-hidden');
        }
    });
    
    $('.zoomTarget').click(function(e) {
        if(!$(this).hasClass('selectedZoomTarget')) {
            $(this).addClass('zoomed');
            var object = $(this);
            var parentOffset = $(this).parent().offset(); 
            lastZoomX = e.pageX - parentOffset.left;
            lastZoomY = e.pageY - parentOffset.top;
            $(object).parent().css('transform-origin', lastZoomX + 'px ' + lastZoomY + 'px');
        } else {
            $(this).removeClass('zoomed');
            $('.absolute-marker-content').remove();
        }
    });
    
});

var lastZoomX = 0;
var lastZoomY = 0;

$(window).scroll(function() {
    checkScrollPositionForIndicator();
});

function checkScrollPositionForIndicator() {
    var docHeight = parseInt($('body').height() - $(window).height());
    var scrolledPosition = parseInt($('html,body').scrollTop());
    var percentOfBody = (100 / docHeight) * scrolledPosition;
    var indicatorBarHeight = $('.vertical-scroll-indicator').height();
    var indicatorHeight = (indicatorBarHeight / 100) * percentOfBody;
    $('.vertical-scroll-indicator span').height(indicatorHeight);
}

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}







/*
 *
 *    ANCHOR ANIMATION
 *
 */

if (location.hash) {
    setTimeout(function() {
        window.scrollTo(0, 0);
    }, 1);
}

var hashtarget = window.location.hash,
    hashtarget = hashtarget.replace('#', '');

$(window).on('load', function() {
    if (location.hash) {
        window.scrollTo(0, 0);
    }
    setTimeout(function() {
        scrollToAnchor(hashtarget);
    }, 500);
});

$(window).on('hashchange', function(e){
    e.preventDefault();
    var hash = location.hash.replace( /^#/, '' );
    scrollToAnchor(hash);
});

$(document).ready(function() {
    $('a[href^="#"], a[href^="'+window.location.pathname+'#"]').click(function(e){
        e.preventDefault();
        var hash = $(this).attr('href').match(/^[^#]*#(.*)/)[1];
        scrollToAnchor(hash);
        return false;
    });
});

function scrollToAnchor(anchor) {
    if(anchor == '') {
        return false;
    }
    if($('#' + anchor).length != 1) {
        return false;
    }
    var diffTop = $('.header').height() - 1;
    $('body, html').animate({ scrollTop:$('#' + anchor).offset().top - diffTop }, 500);
}





