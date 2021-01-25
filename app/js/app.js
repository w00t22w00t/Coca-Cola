window.addEventListener("DOMContentLoaded", function () {
    function showWords() {
        document.querySelector('.santa__santas-words').classList.add('active')
    }

    setTimeout(showWords, 2500);

    let hamburger = document.querySelector('.c-hamburger'),
        header = document.querySelector('.header'),
        sliderBttns = document.querySelectorAll('.about__slider-bttn'),
        sliderItems = document.querySelectorAll('.about__slider-item'),
        sliderImg = document.querySelectorAll('.about__slider-img');

    hamburger.addEventListener('click', function () {
        header.classList.toggle('menu-active')
    })

    sliderBttns.forEach(function (item, index) {
        item.addEventListener('click', function () {
            sliderBttns.forEach(function (el, indexEl) {
                el.classList.remove('active');
                sliderItems[indexEl].classList.remove('active');
                sliderImg[indexEl].classList.remove('active');
            })

            item.classList.add('active');
            sliderItems[index].classList.add('active');
            sliderImg[index].classList.add('active');
        })
    })

    

})

$(function () {
    $.scrollify({
        section: ".section-scroll",
        sectionName: "section-name",
        interstitialSection: "",
        easing: "easeOutExpo",
        scrollSpeed: 1100,
        offset: 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: false,
        overflowScroll: true,
        updateHash: true,
        touchScroll: false,
        before: function () { },
        after: function (index) {
            if (index === 0 || index === 1) {
                document.querySelector('.santa__snowflake').classList.toggle('active')
            } else if (index === 2) {
                document.querySelector('.santa__snowflake').classList.remove('active')
            }
        },
        afterResize: function () { },
        afterRender: function () { }
    });

    document.querySelector('.santa__arrow').addEventListener('click', function () {
        $.scrollify.move(1);
    })


    var browserinfos = navigator.userAgent;
    var ie5 = document.all && document.getElementById && !browserinfos.match(/Opera/);
    var ns6 = document.getElementById && !document.all;
    var opera = browserinfos.match(/Opera/);

    if (ie5 || opera) {

        if (document.body.clientHeight < 620 || document.body.clientWidth < 1200) {
            $.scrollify.disable()
        }
    }

    else if (ns6) {
        if (window.innerHeight < 620 || window.innerWidth < 1200) {
            $.scrollify.disable()
        }
    }

});