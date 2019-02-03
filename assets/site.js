$().ready(function () {

    //jquery.visible.min.js
    (function (e) {
        e.fn.visible = function (t, n, r) {
            var i = e(this).eq(0), s = i.get(0), o = e(window), u = o.scrollTop(), a = u + o.height(), f = o.scrollLeft(), l = f + o.width(), c = i.offset().top, h = c + i.height(), p = i.offset().left, d = p + i.width(), v = t === true ? h : c, m = t === true ? c : h, g = t === true ? d : p, y = t === true ? p : d, b = n === true ? s.offsetWidth * s.offsetHeight : true, r = r ? r : "both";
            if (r === "both")return!!b && m <= a && v >= u && y <= l && g >= f; else if (r === "vertical")return!!b && m <= a && v >= u; else if (r === "horizontal")return!!b && y <= l && g >= f
        }
    })(jQuery)


    //breakpointjs
    !function(n){"use strict"
        function t(n){if(!n.condition()){if(c("Exiting breakpoint: "+n),"function"==typeof n.exit)try{n.exit.apply(n)}catch(t){}n.is_active=!1}}function i(n){if(n.condition()){if("function"==typeof n.first_enter){c("Entering breakpoint for the first time: "+n)
            try{n.first_enter.apply(n)}catch(t){}delete n.first_enter}if("function"==typeof n.enter){c("Entering breakpoint: "+n)
            try{n.enter.apply(n)}catch(t){}}n.is_active=!0}}function e(n){n.is_active?t(n):i(n)}function o(){var e=n.grep(r,function(n){return n.is_active}),o=n.grep(r,function(n){return!n.is_active})
            n.each(e,function(n,i){t(i)}),n.each(o,function(n,t){i(t)})}function c(){n.breakpoint.debug&&console&&console.info&&console.info.apply(console,arguments)}var r=[]
        n.breakpoint=function(t,i){i=n.extend(!0,{},n.breakpoint.defaults,i),r.push(t),1===r.length&&n(window).on("resize orientationchange",function(){o()}),e(t)},n.breakpoint.breakpoints=r,n.breakpoint.check=function(n){e(n)},n.breakpoint.defaults={},n.breakpoint.debug=!1}(jQuery)

    //matchmedia polyfill ly ie9
    window.matchMedia||(window.matchMedia=function(){"use strict";var e=window.styleMedia||window.media;if(!e){var t=document.createElement("style"),n=document.getElementsByTagName("script")[0],r=null;t.type="text/css";t.id="matchmediajs-test";n.parentNode.insertBefore(t,n);r="getComputedStyle"in window&&window.getComputedStyle(t,null)||t.currentStyle;e={matchMedium:function(e){var n="@media "+e+"{ #matchmediajs-test { width: 1px; } }";if(t.styleSheet){t.styleSheet.cssText=n}else{t.textContent=n}return r.width==="1px"}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}())


    // Slidebars 0.10.2 (http://plugins.adchsm.me/slidebars/) written by Adam Smith (http://www.adchsm.me/) released under MIT License (http://plugins.adchsm.me/slidebars/license.txt)
    !function (t) {
        t.slidebars = function (s) {
            function e() {
                !c.disableOver || "number" == typeof c.disableOver && c.disableOver >= T ? (y = !0, t("html").addClass("sb-init"), c.hideControlClasses && k.removeClass("sb-hide"), i()) : "number" == typeof c.disableOver && c.disableOver < T && (y = !1, t("html").removeClass("sb-init"), c.hideControlClasses && k.addClass("sb-hide"), g.css("minHeight", ""), (C || w) && a())
            }

            function i() {
                g.css("minHeight", ""), g.css("minHeight", t("html").height() + "px"), m && m.hasClass("sb-width-custom") && m.css("width", m.attr("data-sb-width")), p && p.hasClass("sb-width-custom") && p.css("width", p.attr("data-sb-width")), m && (m.hasClass("sb-style-push") || m.hasClass("sb-style-overlay")) && m.css("marginLeft", "-" + m.css("width")), p && (p.hasClass("sb-style-push") || p.hasClass("sb-style-overlay")) && p.css("marginRight", "-" + p.css("width")), c.scrollLock && t("html").addClass("sb-scroll-lock")
            }

            function n(t, s, e) {
                var n;
                if (n = t.hasClass("sb-style-push") ? g.add(t).add(O) : t.hasClass("sb-style-overlay") ? t : g.add(O), "translate" === x)n.css("transform", "translate(" + s + ")"); else if ("side" === x)"-" === s[0] && (s = s.substr(1)), "0px" !== s && n.css(e, "0px"), setTimeout(function () {
                    n.css(e, s)
                }, 1); else if ("jQuery" === x) {
                    "-" === s[0] && (s = s.substr(1));
                    var o = {};
                    o[e] = s, n.stop().animate(o, 400)
                }
                setTimeout(function () {
                    "0px" === s && (n.removeAttr("style"), i())
                }, 400)
            }

            function o(s) {
                function e() {
                    y && "left" === s && m ? (t("html").addClass("sb-active sb-active-left"), m.addClass("sb-active"), n(m, m.css("width"), "left"), setTimeout(function () {
                        C = !0
                    }, 400)) : y && "right" === s && p && (t("html").addClass("sb-active sb-active-right"), p.addClass("sb-active"), n(p, "-" + p.css("width"), "right"), setTimeout(function () {
                        w = !0
                    }, 400))
                }

                "left" === s && m && w || "right" === s && p && C ? (a(), setTimeout(e, 400)) : e()
            }

            function a(s) {
                (C || w) && (C && (n(m, "0px", "left"), C = !1), w && (n(p, "0px", "right"), w = !1), setTimeout(function () {
                    t("html").removeClass("sb-active sb-active-left sb-active-right"), m && m.removeClass("sb-active"), p && p.removeClass("sb-active"), "undefined" != typeof s && (window.location = s)
                }, 400))
            }

            function l(t) {
                "left" === t && m && (C ? a() : o("left")), "right" === t && p && (w ? a() : o("right"))
            }

            function r(t, s) {
                t.stopPropagation(), t.preventDefault(), "touchend" === t.type && s.off("click")
            }

            var c = t.extend({siteClose: !0, scrollLock: !1, disableOver: !1, hideControlClasses: !1}, s), h = document.createElement("div").style, d = !1, f = !1;
            ("" === h.MozTransition || "" === h.WebkitTransition || "" === h.OTransition || "" === h.transition) && (d = !0), ("" === h.MozTransform || "" === h.WebkitTransform || "" === h.OTransform || "" === h.transform) && (f = !0);
            var u = navigator.userAgent, b = !1, v = !1;
            /Android/.test(u) ? b = u.substr(u.indexOf("Android") + 8, 3) : /(iPhone|iPod|iPad)/.test(u) && (v = u.substr(u.indexOf("OS ") + 3, 3).replace("_", ".")), (b && 3 > b || v && 5 > v) && t("html").addClass("sb-static");
            var g = t("#sb-site, .sb-site-container");
            if (t(".sb-left").length)var m = t(".sb-left"), C = !1;
            if (t(".sb-right").length)var p = t(".sb-right"), w = !1;
            var y = !1, T = t(window).width(), k = t(".sb-toggle-left, .sb-toggle-right, .sb-open-left, .sb-open-right, .sb-close"), O = t(".sb-slide");
            e(), t(window).resize(function () {
                var s = t(window).width();
                T !== s && (T = s, e(), C && o("left"), w && o("right"))
            });
            var x;
            d && f ? (x = "translate", b && 4.4 > b && (x = "side")) : x = "jQuery", this.slidebars = {open: o, close: a, toggle: l, init: function () {
                return y
            }, active: function (t) {
                return"left" === t && m ? C : "right" === t && p ? w : void 0
            }, destroy: function (t) {
                "left" === t && m && (C && a(), setTimeout(function () {
                    m.remove(), m = !1
                }, 400)), "right" === t && p && (w && a(), setTimeout(function () {
                    p.remove(), p = !1
                }, 400))
            }}, t(".sb-toggle-left").on("touchend click", function (s) {
                r(s, t(this)), l("left")
            }), t(".sb-toggle-right").on("touchend click", function (s) {
                r(s, t(this)), l("right")
            }), t(".sb-open-left").on("touchend click", function (s) {
                r(s, t(this)), o("left")
            }), t(".sb-open-right").on("touchend click", function (s) {
                r(s, t(this)), o("right")
            }), t(".sb-close").on("touchend click", function (s) {
                if (t(this).is("a") || t(this).children().is("a")) {
                    if ("click" === s.type) {
                        s.preventDefault();
                        var e = t(this).is("a") ? t(this).attr("href") : t(this).find("a").attr("href");
                        a(e)
                    }
                } else r(s, t(this)), a()
            }), g.on("touchend click", function (s) {
                c.siteClose && (C || w) && (r(s, t(this)), a())
            })
        }
    }(jQuery);

// ******

    // Menu Functions
    /*
     var $window = $(window),
     compressed = false,
     compress_tolerance = 100,
     compress_open_tolerance = 20;
     */
    if ($(".gallery-item").length > 0) {
        $('.gallery-item').magnificPopup({
            type: 'image',
            image: {
                titleSrc: 'title'
            },
            gallery: {
                enabled: true
            }
        });
    }

    $('#icn-menu').bind('click touchstart', function (e) {
        e.preventDefault();
        $('html').toggleClass('nav-open');
    });
    /*
     $window.scroll(function(){
     var s = $window.scrollTop();
     if( s > compress_tolerance ){
     if( ! compressed ){
     $('body').addClass('compressed');
     compressed = true;
     }
     }else if( s < compress_open_tolerance ){
     if( compressed ){
     $('body').removeClass('compressed');
     compressed = false;
     }
     }
     });

     */

    var timeout;
    var windowSize = function (e) {
        if (!timeout) {
            $('body').addClass('stop-transitions');
            console.log('start');
        }
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            $('body').removeClass('stop-transitions');
            console.log('end');
            timeout = null;
        }, 500);
    };

    window.addEventListener('resize', windowSize, false);
    window.addEventListener('orientationchange', windowSize, false);


    // Additional Initializers here.....

    /* menu end */

    /* efects */

    $.fn.visible = function (partial) {

        var $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

    var win = $(window);

    var allMods = $(".effect-flyin");

    allMods.each(function (i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("already-visible");
        }
    });

    win.scroll(function (event) {

        allMods.each(function (i, el) {
            var el = $(el);
            if (el.visible(true)) {
                el.addClass("come-in");
            }
        });

    });


    if ($(".quoteslide").length > 0) {
        $(document).ready(function () {
            $('.bxslider').bxSlider({
                auto: true,
                mode: 'fade',
                adaptiveHeight: true,
                touchEnabled: false,
                controls: false,
                speed: 500,
                pause: 7000
            });
        });
    }

    if ($("a.share").length > 0) {
        $('a.share').click(function (e) {
            var $share = $(this);
            $share.fadeOut(400, function () {
                $share.next().slideDown();
            });
        });
    }


  /* make the boxes on the homepage the same height */

    function ajustHeight(originDiv) {
        targetDiv = $(originDiv.selector+'-target');

        originHeight = originDiv.height();
        targetHeight = targetDiv.height();

        if(originHeight > targetHeight) {
            targetDiv.css("height", originDiv.height(),"overflow","auto");
        }
    }

    function autoHeight(originDiv) {
        $(originDiv.selector+'-target').css("height", "auto");
    }

    var sameHeight = [$('.js-height-col1'), $(".js-height-col3")];

    function matchHeight(resetHeight){

        $.each(sameHeight, function(key, value){

            if (value.length > 0) {

                if(resetHeight) {
                    autoHeight( value );
                }
                if(!resetHeight) {
                    ajustHeight( value );
                }

            }
        });


    }

  //  matchHeight();

    /* breakpoinots */

    $.breakpoint({
        condition: function () {
            return window.matchMedia('only screen and (min-width:768px)').matches;
        },
        first_enter: function () {
            matchHeight();
        },
        enter: function () {
            matchHeight();
        },
        exit: function () {
         //   $(".nav").last().unstick();
            matchHeight(true);

        }
    });



    if ($('.js_showhide').length > 0){

        $('.js_showhide .answer').css({display: 'none'});

        $(".js_showhide").click(function(){
            $(this).find("div.answer").toggle();
            $(this).toggleClass('open');
        });
    }


    /* box height and breakpoint end */


    if ($(".searchbox").length > 0) {
        $('.searchbox').click(function () {
            $('.searchshow').removeClass('hidden-xs hidden-sm downarrow');
        });
    }

    // Slidebars off-canvas menu
    $.slidebars();

// Enable dropdown sub-menus in off-canvas navigation
/*
    $('.js-preventFirstClick').on('click',function(e) {
        e.preventDefault();

        });
*/
    $('.sb-toggle-submenu').off('click') // Stop submenu toggle from closing Slidebars.
        .on('click', function(e) {

            //one click to open sub menu second click to go to root page
            if($(this).is('.js-preventFirstClick')){
                e.preventDefault();
                $(this).removeClass('js-preventFirstClick');
            }

            $submenu = $(this).parent().children('.sb-submenu');
            $(this).add($submenu).toggleClass('sb-submenu-active'); // Toggle active class.

            if ($submenu.hasClass('sb-submenu-active')) {
                $submenu.slideDown(200);
            } else {
                $submenu.slideUp(200);
            }
    });

/*
    $('.').magnificPopup({
        type: 'image',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    */

    $('.imageMagnific').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [3,3] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<br/><a href="'+ item.el.attr('linksrc') + '" target="_blank" style="color: #fff">Download</a>';
            }
        }
    });

    //slider
    if ($(".slide").length > 0){
        $(document).ready(function(){
            $('.slide').bxSlider({
                auto: true,
                mode: 'fade',
                adaptiveHeight: false,
                touchEnabled:true,
                controls:false,
                speed:500,
                pause:7000
            });
        });
    }

    // Homepage start
    var $homePanel = $('#home-panels');
    if( $homePanel.length )
    {
        var homePanels = {
            openLeft: function(){
                $homePanel.removeClass('hover-right').addClass('hover-left');
            },
            openRight: function(){
                $homePanel.removeClass('hover-left').addClass('hover-right');
            },
            close: function(){
                $homePanel.removeClass('hover-left hover-right');
            }
        }


        $homePanel.on('mouseleave', homePanels.close );

        $('#home-panel-left').on('mouseenter', function(e){
            homePanels.openLeft();
            e.preventDefault();
            e.stopPropagation();
        });

        $('#home-panel-right').on('mouseenter', homePanels.openRight );

        // Fix widths to prevent line re-draw
        var $p = $homePanel.find('p'),
            preventLineRedraw = function(){
                var w = $homePanel.width(),
                    w2 = Math.max( w * .3 , 182 ),
                    m = $p.eq(0).position().left * 2;
                ;

                $p.width( w - ( w2 + m ) );
            }
            ;
        $window.on('resize' , $.throttle(250,preventLineRedraw) );
        preventLineRedraw();



        if( $window.width() >= 680 ) {

            $homePanel.on('click touchstart', function (e) {


                var id = $(e.target).closest('.home-panel-link').parent().attr('id');
                console.log(id);
                if ("home-panel-left" === id) {
                    if ($homePanel.hasClass('hover-left'))
                        return true;


                    homePanels.openLeft();
                }
                else if ("home-panel-right" === id) {
                    if ($homePanel.hasClass('hover-right'))
                        return true;

                    homePanels.openRight();
                }

                e.preventDefault();
                e.stopPropagation();
                return false;
            });

        }
    }

    //homepage end


    });