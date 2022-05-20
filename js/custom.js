$(function() {


    /*loadSvg*/
    $('[data-svg]').each(function() {
        var $this = $(this);
        var $svg = $this.data('svg');
        var $filename = $svg.split('\\').pop().split('/').pop().replace(".svg", "");

        $this.load($svg, function(responseTxt, statusTxt) {
            if (statusTxt == "success") {
                $this.find('svg').addClass('svg svg-' + $filename + '');
            }
        });

        $('.about--options').on('mousemove', function(e) {
            canScroll = false;
        });

        $('.about--options').on('mouseleave', function(e) {
            canScroll = true;
        });
    });

    // AOS
    AOS.init({
        once: true,
        duration: 1000,
        offset: 0,
    })

    $(window).on('resize load', function() {
        AOS.refreshHard()
    })

    $(window).on('scroll load', function() {
            AOS.refresh()
        })
        // eof

    $('.magnific-popup').magnificPopup({
        fixedContentPos: false,
        callbacks: {
            open: function() {
                $('body').addClass('scroll_disabled')
            },
            close: function() {
                $('body').removeClass('scroll_disabled')
            },
        },
    })



    $(function() {
        $('.popup-modal').magnificPopup({
            type: 'inline',
            modal: true,
            callbacks: {
                open: function() {
                    $('body').addClass('scroll_disabled')
                },
                close: function() {
                    $('body').removeClass('scroll_disabled')
                },
            },
        });
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            callbacks: {
                open: function() {
                    $('body').addClass('scroll_disabled')
                },
                close: function() {
                    $('body').removeClass('scroll_disabled')
                },
            },
            image: {
                markup: '<div class="mfp-figure mfp-figure-costumer">' +
                    '<div class="mfp-close"></div>' +
                    '<div class="mfp-img"></div>' +
                    '</div>',
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',

            }
        });
    });




    let header = $('.header')
    let hederHeight = header.height() // вычисляем высоту шапки

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1) {
            header.addClass('header_fixed')
            $('body').css({
                paddingTop: hederHeight + 'px', // делаем отступ у body, равный высоте шапки
            })
        } else {
            header.removeClass('header_fixed')
            $('body').css({
                paddingTop: 0, // удаляю отступ у body, равный высоте шапки
            })
        }
    })

    function ibg() {
        let ibg = document.querySelectorAll('.ibg')
        for (var i = 0; i < ibg.length; i++) {
            if (ibg[i].querySelector('img')) {
                ibg[i].style.backgroundImage =
                    'url(' + ibg[i].querySelector('img').getAttribute('src') + ')'
            }
        }
    }
    ibg()

    if ($(window).width() < 992) {
        $('.hamburger-menu__dropdown-heading').on('click', function() {
            $(this).toggleClass('active').next().slideToggle()
            $('.hamburger-menu__dropdown-heading')
                .not(this)
                .removeClass('active')
                .next()
                .slideUp()
        })
    }

    const swiper = new Swiper('.SingleObjects__photos_list', {
        loop: true,
        lidesPerView: 3,
        spaceBetween: 20,

        navigation: {
            nextEl: '.reght-buttons__button-next',
            prevEl: '.reght-buttons__button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 3,
            },
        },
    })

    const Gallery = new Swiper('.gallery-swiper', {
        loop: true,
        slidesPerView: 1,
        navigation: {
            nextEl: '.reght-buttons__button-next',
            prevEl: '.reght-buttons__button-prev',
        },

    })

    const NewsSlider = new Swiper('.MainNews__slider', {
        loop: true,
        lidesPerView: 1,


        navigation: {
            nextEl: '.reght-buttons__button-next',
            prevEl: '.reght-buttons__button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },


    })








    $('.menu__icon, .hamburger-menu__close').on('click', function() {
        $('.hamburger-menu').fadeToggle()
        $('body').toggleClass('scroll_disabled')
    })
})

$('.labgvidg-header__text').on('click', function() {
    $(this).toggleClass('active').next().slideToggle()
})

/* $(document).mouseup(function(e) {
    let container = $(".labgvidg-header__dropdown");
    if (container.has(e.target).length === 0) {
        container.slideUp();
        $('.labgvidg-header__text').removeClass('active');
    }
}); */

$(document).mouseup(function(e) {
    let lang = $(".labgvidg-header__text");
    let childs = $('.has-childs');
    if (e.target != lang[0] && !lang.has(e.target).length && (lang.hasClass('active'))) {
        $('.labgvidg-header__dropdown').slideUp();
        lang.removeClass('active');
    }
    if (e.target != childs[0] && !childs.has(e.target).length && childs.hasClass('active')) {
        $(childs).toggleClass('active').find('.childs').slideUp()
    }

});

$('.has-childs > a').on('click', function() {

        $(this).parent().toggleClass('active').find('.childs').slideToggle()
    })
    /* $('.institutTabs__nav-link').on('click', function() {
        $(this).parent().find('.tab-active').removeClass('tab-active');
        $(this).toggleClass('tab-active');
    })
     */


$(function() {
    var tab = $('.documents__list > div');
    tab.hide().filter(':first').show();

    // Клики по вкладкам.
    $('.sidebar a').click(function() {
        tab.hide();
        tab.filter(this.hash).show();
        $('.sidebar a').removeClass('active');
        $(this).addClass('active');
        return false;
    }).filter(':first').click();



    // Отрытие вкладки из хеша URL
    if (window.location.hash) {
        $('.sidebar a[href="' + window.location.hash + '"]').click();
        window.scrollTo(0, $("#".window.location.hash).offset().top);
    }
});

$('.top-header__colour-heading').on('click', function() {
    $('.top-header__colour-dropdown').slideToggle()
})



$(document).mouseup(function(e) {
    let container = $(".top-header__colour-dropdown");
    if (container.has(e.target).length === 0) {
        container.slideUp();
    }
});


/* $(document).mouseup(function(e) {
    let container = $(".labgvidg-header__dropdown");
    if (container.has(e.target).length === 0) {
        container.slideUp();
        $('.labgvidg-header__text').removeClass('active');
    }
}); */



$('body').on('click', '.link_move', function(event) {
    event.preventDefault()
    var id = $(this).attr('href'),
        top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 1500)
})


///
///
///

// Карта стран

// Kz
$('.kz-link').on('mouseover', function() {
    $('.projects__info.kz').show()
    $('.projects__map a.kz').addClass('active')
})

$('.kz-link').on('mouseleave', function() {
    $('.projects__info.kz').hide()
    $('.projects__map a.kz').removeClass('active')
})

// Tj
$('.tj-link').on('mouseover', function() {
    $('.projects__info.tj').show()
    $('.projects__map a.tj').addClass('active')
})

$('.tj-link').on('mouseleave', function() {
    $('.projects__info.tj').hide()
    $('.projects__map a.tj').removeClass('active')
})

// Uz
$('.uz-link').on('mouseover', function() {
    $('.projects__info.uz').show()
    $('.projects__map a.uz').addClass('active')
})

$('.uz-link').on('mouseleave', function() {
    $('.projects__info.uz').hide()
    $('.projects__map a.uz').removeClass('active')
})

// Tk
$('.tk-link').on('mouseover', function() {
    $('.projects__info.tk').show()
    $('.projects__map a.tk').addClass('active')
})

$('.tk-link').on('mouseleave', function() {
    $('.projects__info.tk').hide()
    $('.projects__map a.tk').removeClass('active')
})

// Af
$('.af-link').on('mouseover', function() {
    $('.projects__info.af').show()
    $('.projects__map a.af').addClass('active')
})

$('.af-link').on('mouseleave', function() {
    $('.projects__info.af').hide()
    $('.projects__map a.af').removeClass('active')
})

// Krgz
$('.krgz-link').on('mouseover', function() {
    $('.projects__info.krgz').show()
    $('.projects__map a.krgz').addClass('active')
})

$('.krgz-link').on('mouseleave', function() {
    $('.projects__info.krgz').hide()
    $('.projects__map a.krgz').removeClass('active')
})

// Viet
$('.viet-link').on('mouseover', function() {
    $('.projects__info.viet').show()
    $('.projects__map a.viet').addClass('active')
})

$('.viet-link').on('mouseleave', function() {
        $('.projects__info.viet').hide()
        $('.projects__map a.viet').removeClass('active')
    })
    // eof

$('.custom-scroll').mCustomScrollbar()

if ($(window).width() < 992) {
    $('.custom-scroll').mCustomScrollbar('destroy')
    $('.custom-scroll').css('overflow-y', 'auto')
}

$('.popup__list-item').hover(function() {
    $(this).closest('.popup').find('.popup__map-info').hide().eq($(this).index()).show()
})


// Cookie start


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


// Cookie ends


////Скрипт для слабовидящих////

$("input#colour__site-Off").on('click', function() {
    $("body").css("filter", "grayscale(100%) invert(100%)");
});
$("input#colour__site-On").on('click', function() {
    $("body").css("filter", "grayscale(0%)");
});


$("button#fontsSite-plus").on('click', function() {
    var zoom_site = $(this).css("zoom") / 1;
    var z = zoom_site + 0.1;
    $("button, a, p, h1, h2, h3, h4, h5, li, span").css("zoom", z);
});
$("button#fontsSite-minus").on('click', function() {
    var zoom_site = $(this).css("zoom");
    var z = zoom_site - 0.1;
    $("button, a, p, h1, h2, h3, h4, h5, li, span").css("zoom", z);
});

$("button#fontsSite-normal").on('click', function() {
    $("button, a, p, h1, h2, h3, h4, h5, li, span").css("zoom", 1);
});


var voice = getCookie("voice");
if (voice == "yes") {
    $("button#siteVoice").removeClass("filter-none");
} else {
    $("button#siteVoice").addClass("filter-none");
}
$("button#siteVoice").on('click', function() {
    var clases = $("button#siteVoice").attr('class');
    if (clases.indexOf("filter-none") > 0) {
        $("button#siteVoice").removeClass("filter-none");
        setCookie("voice", "yes");
        location.reload();

    } else {
        $("button#siteVoice").addClass("filter-none");
        setCookie("voice", "not");
        location.reload();
    }
});

$("a").on('mouseenter', function() {
    if (voice == "yes") {
        var text = $(this).text();
        var range = String(text);
        responsiveVoice.setDefaultVoice("Russian Female");
        responsiveVoice.speak(range);
    }

});

$("p").on('mouseenter', function() {
    if (voice == "yes") {
        var text = $(this).text();
        var range = String(text);
        responsiveVoice.setDefaultVoice("Russian Female");
        responsiveVoice.speak(range);
    }

});
$('body').on('mouseup', function(e) {
    if (voice == "yes") {

        var selectedText = window.getSelection().toString();
        responsiveVoice.setDefaultVoice("Russian Female");
        responsiveVoice.speak(selectedText);
    }
});



var acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            panel.style.marginTop = '-1px';
        }
    });
}

jQuery(($) => {
    $('.select').on('click', '.select__head', function() {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select').on('click', '.select__item', function() {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function(e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });
});


$(function() {
    var wrapper = $(".file_upload"),
        inp = wrapper.find("input"),
        btn = wrapper.find("button"),
        lbl = wrapper.find("div");

    btn.focus(function() {
        inp.focus()
    });
    // Crutches for the :focus style:
    inp.focus(function() {
        wrapper.addClass("focus");
    }).blur(function() {
        wrapper.removeClass("focus");
    });

    var file_api = (window.File && window.FileReader && window.FileList && window.Blob) ? true : false;

    inp.change(function() {
        var file_name;
        if (file_api && inp[0].files[0])
            file_name = inp[0].files[0].name;
        else
            file_name = inp.val().replace("C:\\fakepath\\", '');

        if (!file_name.length)
            return;

        if (lbl.is(":visible")) {
            lbl.text(file_name);
            /* btn.text("Выбрать"); */
        } else
            btn.text(file_name);
    }).change();

});
$(window).resize(function() {
    $(".file_upload input").triggerHandler("change");
});


function openSearch() {
    document.getElementById("myOverlay").style.display = "block";

}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";

}