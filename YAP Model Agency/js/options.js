jQuery(document).ready(function() {
    'use strict';
    // SwipeBox start
    var $swipeBox = jQuery('.swipebox');
    $swipeBox.swipebox();
    // SwipeBox end

    // isotope start
    jQuery(window).load(function() {
        let $portContainer = jQuery('.isotope-container');
        $portContainer.isotope({
            itemSelector: '.isotopeItem',
            filter: '*'
        });
    });
    var nex_isotop_filter = jQuery('.isotopeFilter');
    nex_isotop_filter.on('click', 'button', function() {
        var filterValue = jQuery(this).attr('data-filter');
        var isoContainer = jQuery('.isotope-container');
        isoContainer.isotope({
            filter: filterValue
        });
    });
    nex_isotop_filter.each(function(i, buttonGroup) {
        var $buttonGroup = jQuery(buttonGroup);
        $buttonGroup.on('click', 'button', function() {
            $buttonGroup.find('.active').removeClass('active');
            jQuery(this).addClass('active');
        });
    });
    // isotope end

    // navigation start
    var nex_menu_toggle = jQuery('.nex-menu-toggle');
    var nex_menu = jQuery('.nex-vx-main-nav .main-menu');
    nex_menu_toggle.on('click', function() {
        nex_menu.slideToggle(300);
        return false;
    });
    jQuery(window).resize(function() {
        if (jQuery(window).width() > 992) {
            nex_menu.removeAttr('style');
        }
    });
    // navigation end

    // collaps class active start
    var panel_collapse = jQuery('.panel-collapse');
    panel_collapse.on('show.bs.collapse', function() {
        jQuery(this).siblings('.panel-heading').addClass('active');
    });

    panel_collapse.on('hide.bs.collapse', function() {
        jQuery(this).siblings('.panel-heading').removeClass('active');
    });
    // collaps class active end

    // start slick sliders selectors
    var testimonial_v4 = jQuery('.nex-testimonial-v4');
    testimonial_v4.slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });
    var project_slider = jQuery('.nex-project-slider');
    project_slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        asNavFor: '.nex-project-nav'
    });
    var project_nav = jQuery('.nex-project-nav');
    project_nav.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.nex-project-slider',
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true
    });
    var nex_slider = jQuery('.nex-slider');
    nex_slider.slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000
    });
    var nex_slider_service = jQuery('.nex-services-slider');
    nex_slider_service.slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 960,
                settings: {
                    arrows: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    var nex_test_slider = jQuery('.nex-testimonials-slider');
    nex_test_slider.slick({
        centerMode: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        centerPadding: '0',
        slidesToShow: 3,
        responsive: [{
                breakpoint: 960,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0',
                    slidesToShow: 1
                }
            }
        ]
    });
    // end slick sliders selectors


    // start smooth scrolling
    var smothscroll = jQuery('.main-menu a[href*="#"]:not([href="#"])');
    smothscroll.on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = jQuery(this.hash);
            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                jQuery('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
    // end smooth scrolling

    /* start Contact Form ajaxed --- also see php/contact.php */
    var nex_form_contact = jQuery('.contact-form-php');
    nex_form_contact.on('submit', function(e) {
        e.preventDefault();
        let form = $(this);
        let resultContainer = form.find('.result-message');
        $.ajax({
                url: 'php/contact.php',
                type: 'POST',
                data: form.serialize(),
                //dataType: 'json'
            })
            .done(function(response) {
                console.log(response);
                resultContainer.text(response);
            })
            .fail(function(er, err, error) {
                console.log(er, err, error);
            });
        return false;
    });
    /* end Contact Form ajaxed --- also see php/contact.php */

});
