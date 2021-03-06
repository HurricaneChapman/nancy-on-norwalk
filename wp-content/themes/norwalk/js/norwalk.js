// JavaScript Document

function initGoogleTag() {
    window.googletag = window.googletag || {cmd: []};
}

//
// 	Chapman Hyperlocal Media Google ad tags
//
initGoogleTag();
let googletag = window.googletag;
googletag.cmd.push(function () {

    googletag.defineSlot('/1732998/Nancy_on_Norwalk_bottom_sidebar_large_rectangle_ad', [300, 250], 'div-gpt-ad-1595436397658-0').addService(googletag.pubads());
    googletag.defineSlot('/1732998/Nancy_on_Norwalk_top_sidebar_large_rectangle_ad', [300, 250], 'div-gpt-ad-1595436601812-0').addService(googletag.pubads());
    googletag.defineSlot('/1732998/Nancy-On-Norwalk-upper-sidebar', [300, 250], 'div-gpt-ad-1595436720369-0').addService(googletag.pubads());
    googletag.defineSlot('/1732998/NancyOnNorwalk-lower-sidebar', [300, 250], 'div-gpt-ad-1595436967495-0').addService(googletag.pubads());
    googletag.defineSlot('/1732998/NancyOnNorwalk-middle-sidebar', [300, 250], 'div-gpt-ad-1595437541250-0').addService(googletag.pubads());

    googletag.defineSlot('/1732998/NancyOnNorwalk_extra_300x250_ad_1', [300, 250], 'div-gpt-ad-1595436863008-0').addService(googletag.pubads());
    googletag.defineSlot('/1732998/NancyOnNorwalk_extra_300x250_ad_2', [300, 250], 'div-gpt-ad-1595437678377-0').addService(googletag.pubads());
    googletag.defineSlot('/1732998/NancyOnNorwalk_extra_300x250_ad_3', [300, 250], 'div-gpt-ad-1595437714045-0').addService(googletag.pubads());
    googletag.defineSlot('/1732998/NancyOnNorwalk_extra_300x250_ad_4', [300, 250], 'div-gpt-ad-1595437821604-0').addService(googletag.pubads());
    googletag.defineSlot('/1732998/NancyOnNorwalk_extra_300x250_ad_5', [300, 250], 'div-gpt-ad-1595437870353-0').addService(googletag.pubads());

    googletag.pubads().enableSingleRequest();
    googletag.pubads().collapseEmptyDivs();
});

jQuery(function ($) {

    // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
    // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

    // requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

    // MIT license

    (function () {
        var lastTime = 0;
        var vendors = ['ms', 'moz', 'webkit', 'o'];
        for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame']
                || window[vendors[x] + 'CancelRequestAnimationFrame'];
        }

        if (!window.requestAnimationFrame)
            window.requestAnimationFrame = function (callback) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = window.setTimeout(function () {
                    callback(currTime + timeToCall);
                }, timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };

        if (!window.cancelAnimationFrame)
            window.cancelAnimationFrame = function (id) {
                clearTimeout(id);
            };
    }());

    ////////////////////////

    (function ($, sr) {

        // debouncing function from John Hann
        // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
        var debounce = function (func, threshold, execAsap) {
            var timeout;

            return function debounced() {
                var obj = this, args = arguments;

                function delayed() {
                    if (!execAsap)
                        func.apply(obj, args);
                    timeout = null;
                }

                if (timeout)
                    clearTimeout(timeout);
                else if (execAsap)
                    func.apply(obj, args);

                timeout = setTimeout(delayed, threshold || 100);
            };
        };
        // smartresize
        jQuery.fn[sr] = function (fn) {
            return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);
        };
    })(jQuery, 'smartresize');

    ////////////////////////

    var $window = $(window),
        $mainNav = $('#main-nav'),
        $document = $(document),
        $mainContent = $('#main-content'),
        $sidebar = $mainContent.find('aside.sidebar'),
        $adSlots = $sidebar.find('li.widget.goog-ad'),
        $ads = $adSlots.find('div.goog-ad'),
        $mobileAdSlots = $mainContent.find('div.content > div.mobile-ad-slot'),
        currentMode = false;

    $window.scroll(function () {
        $mainNav.toggleClass('addLogo', $window.scrollTop() >= 195);
    });

    var hideNav = function (e) {

        var keepGoing = true;

        for (var i in e.target.parentElement.classList) {
            if (e.target.parentElement.classList[i] == 'menu-item') keepGoing = false;
        }

        if (e.target.id != 'nav-label' && keepGoing) {
            $mainNav.removeClass('expand');
            $(e.data).off('click tap touchstart', null, null, hideNav);
            $('#nav-label, #nav-label > object').on('click tap', null, null, showNav);
        }
    };

    var showNav = function () {
        $mainNav.addClass('expand');
        var args = "#main-content, #mainhead, #mainfoot";
        $('#nav-label, #nav-label > object').off('click tap', null, null, showNav);
        $(args).on('click tap touchstart', null, args, hideNav);
    };

    function norwalkTabsInit() {
        var $tabGroups = $('div.norwalk-tabs');
        $tabGroups.each(function () {
            var $tabs = $(this);
            $tabs.find('.tab-title').each(function () {
                var $title = $(this),
                    target = $title.data('tab'),
                    text = $title.html(),
                    isDefault = $title.parent().hasClass('default') ? true : false,
                    buttonClass = isDefault ? 'tab-button active' : 'tab-button';
                $('<div class="' + buttonClass + '" data-target="' + target + '">' + text + '</div>').insertBefore($title.closest('div.norwalk-tabs').children('.norwalk-tab.first'));
            });
            $tabs.find('.default').addClass('active');
            var $tabButtons = $tabs.find('div.tab-button');
            $tabButtons.click(function () {
                var $button = $(this),
                    $target = $button.parent().find('div.' + $button.data('target'));
                if (!$target.hasClass('active')) {
                    $tabs.children('div.norwalk-tab, div.tab-button').removeClass('active');
                    $target.add($button).addClass('active');
                }
            });
        });
    }

    let adsInitialized = false;
    var mobileAdCheck = function () {
        var documentWidth = $document.width();
        var slotNum = 0;
        if (currentMode === false) {
            currentMode = !($document.width() >= 801) ? 'desktop' : 'mobile';
        }

        var googTimer;

        function refreshGoog(count = 0) {
            var timeout = count === 0 ? 0 : 1000;
            googTimer = setTimeout(function () {
                clearTimeout(googTimer);
                if (typeof googletag !== undefined && typeof googletag.pubads === 'function') {
                    googletag.pubads().refresh();
                } else if (count <= 9) {
                    refreshGoog(count + 1);
                }
            }, timeout);
        }

        if (documentWidth < 801 && currentMode === 'desktop') {
            var newSlot = false;

            $ads.each(function () {
                $(this).appendTo($mobileAdSlots[slotNum]);
                ////
                ////	check to see if element is filled and mark it if so.
                ////
                var $thisSlot = $mobileAdSlots.eq(slotNum),
                    slotEmpty = true;
                $thisSlot.find('.goog-ad').each(function () {
                    if ($.trim($(this).html()) == '') {
                        slotEmpty = true;
                    } else {
                        slotEmpty = false;
                        return;
                    }
                });

                if (!slotEmpty && !$thisSlot.hasClass('filled')) {
                    $thisSlot.addClass('filled');
                }
                if (newSlot) {
                    slotNum++;
                    newSlot = false;
                } else newSlot = true;
            });

            if (adsInitialized) refreshGoog();
            else {
                initGoogleTag();
                adsInitialized = true;
                googletag.cmd.push(function () {
                    googletag.enableServices();
                    googletag.pubads().refresh();
                });
            }
        } else if (documentWidth >= 801 && currentMode === 'mobile') {
            ///
            ///		Remove the filled marker
            ///
            $ads.each(function () {
                $(this).appendTo($adSlots[slotNum]);
                var $thisSlot = $mobileAdSlots.eq(slotNum);

                if ($thisSlot.hasClass('filled')) {
                    $thisSlot.removeClass('filled');
                }
                slotNum++;
            });

            if (adsInitialized) refreshGoog();
            else {
                initGoogleTag();
                adsInitialized = true;
                googletag.cmd.push(function () {
                    googletag.enableServices();
                    googletag.pubads().refresh();
                });
            }
        }

        currentMode = $document.width() >= 801 ? 'desktop' : 'mobile';
    };

    function initNorwalkModal($modals) {
        var modalCookies = [];
        var $activeModal = false;
        var cookies = decodeURIComponent(document.cookie).split(';');
        for (var i = 0; i < cookies.length; i += 1) {
            if (cookies[i].indexOf('norwalk-modal') !== -1) {
                var cookieId = cookies[i].split('=').shift().replace(/\D/g, '');
                modalCookies.push(parseInt(cookieId, 10));
            }
        }
        $modals.each(function (i, el) {
            var $this = $(el);
            if (modalCookies.indexOf($this.data('id')) === -1 && !$activeModal) {
                $activeModal = $this;
            }
        });

        if (!$activeModal) {
            return;
        }

        var modalId = $activeModal.data('id');
        var $closeButton = $activeModal.find('.norwalk-polite-modal__close');
        var $submitButton = $activeModal.find('button[name=submit], input[name=subscribe]');
        var $otherDismissals = $activeModal.find('[data-dismiss-modal]');
        var $textInputs = $activeModal.find('input[type=text], input[type=email]');

        $activeModal.addClass('norwalk-polite-modal--active');
        setTimeout(function () {
            $activeModal.addClass('norwalk-polite-modal--show');
        }, 3000);

        $textInputs.on('keyup', function (e) {
            var $input = $(e.target);
            var $fieldGroup = $input.closest('.norwalk-polite-modal__field-group');
            if ($input.val() !== '') {
                $fieldGroup.addClass('dirty');
            } else {
                $fieldGroup.removeClass('dirty');
            }
        });

        $closeButton
            .add($submitButton)
            .add($otherDismissals)
            .on('click tap', function () {
                $activeModal.removeClass('norwalk-polite-modal--show');
                var cookie = 'norwalk-modal-' + modalId + '=dismissed';
                var hostname = window.location.hostname.split('.').splice(-2, 2).join('.');
                cookie += ';domain=' + hostname;
                cookie += ';samesite=strict';
                cookie += ';max-age=' + (parseFloat($activeModal.data('expiration')) * 24 * 60 * 60);
                document.cookie = cookie;
            });
    }

    $(document).ready(function () {

        if ($('html').hasClass('wallpaper-ad')) {
            var contentWidth = $document.width() - 400;
            $('#NoN-content').css({width: contentWidth});

            $window.smartresize(function () {
                var contentWidth = $document.width() - 400;
                $('#NoN-content').css({width: contentWidth});
            });
        }
        /*
         *	Mobile ad placement code
         *
         *	Inserts mobile-ad-slots in between paragraphs on single story pages
         *
         */
        if ($('body').hasClass('single')) {
            var $content = $('#main-content div.the-content'),
                storyHeight = 0,
                i = 1;

            $content.find('p').each(function () {
                storyHeight += $(this).outerHeight();

                if (storyHeight > 500) {		// spacing the ads apart a bit
                    $(this).after('<div id="mobile-ad-slot-' + i + '" class="mobile-ad-slot"><p class="ad-label">Advertisement</p></div>');
                    storyHeight = 0;
                    i++;
                }
            });
            $('#comments-section').find('article.comment.odd').each(function () {
                $(this).after('<div id="mobile-ad-slot-' + i + '" class="mobile-ad-slot comment"><p class="ad-label">Advertisement</p></div>');
                i++;
            });
            $mobileAdSlots = $mainContent.find('div.content div.the-content > div.mobile-ad-slot, #comments-section > div.comments > div.mobile-ad-slot');
        }

        //	Move the ads from the sidebar into mobile ad slots when appropriate.
        //
        if ($document.width() < 801) {
            let tLimit = 0;
            let t = setInterval(function () {

                mobileAdCheck();
                if (tLimit >= 5000) {
                    clearInterval(t);
                    googletag.pubads().refresh();
                }
                tLimit += 500;
            }, 500);
        } else {
            mobileAdCheck();
        }

        $window.smartresize(function (e) {
            mobileAdCheck(e);
        });

        $('#nav-logo, #nav-label').prependTo('#main-nav').attr('style', '');

        $('#main-nextprev').appendTo('#main-nav').attr('style', '');

        $('#nav-label, #nav-label > object').on('click tap', null, null, showNav);

        if ($('div.norwalk-tabs').length > 0) {
            norwalkTabsInit();
        } else {
            // console.log('no tabs found');
        }

        $('button.sc-payment-btn.stripe-button-el').click(function () {
            var $this = $(this);
            if (!$this.parents('html').hasClass('cssanimations')) {
                //skip this whole thing if the browser can't do a css animation
                return;
            }
            $(this).addClass('stripe-on');

            function stripeCheck(el) {
                if (!$('.stripe_checkout_app').is(":visible")) {
                    el.removeClass('stripe-on');
                    return;
                }
                setTimeout(stripeCheck, 500, $this);
            }

            stripeCheck();
        });

        var $modals = $('.norwalk-polite-modal');

        if ($modals.length) {
            initNorwalkModal($modals);
        }
    });

}); // jQuery encapsulation

//
//	Quantcast Analytics
//

var _qevents = _qevents || [];

(function () {
    var elem = document.createElement('script');
    elem.src = (document.location.protocol == "https:" ? "https://secure" : "http://edge") + ".quantserve.com/quant.js";
    elem.async = true;
    elem.type = "text/javascript";
    var scpt = document.getElementsByTagName('script')[0];
    scpt.parentNode.insertBefore(elem, scpt);
})();

_qevents.push({
    qacct: "p-7GR1A7wZbYvVp"
});
