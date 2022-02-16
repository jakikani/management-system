if (typeof jQuery === "undefined") {
    throw new Error("jQuery plugins need to be before this file");
}

$(function() {
    "use strict";

    // main sidebar toggle js
    $('.menu-toggle').on('click', function() {
        $('.sidebar').toggleClass('open');
        $('.open').removeClass('sidebar-mini');
    });

    // layout a sidebar mini version
    $('.sidebar-mini-btn').on('click', function() {
        $('.sidebar').toggleClass('sidebar-mini');
        $('.sidebar-mini').removeClass('open');
    });

    // chat page chatlist toggle js
    $('.chatlist-toggle').on('click', function() {
        $('.card-chat').toggleClass('open');
    });

    $(".theme-rtl input").on('change', function() {
        if (this.checked) {
            $("body").addClass('rtl_mode');
        } else {
            $("body").removeClass('rtl_mode');
        }

    });

    // cSidebar overflow daynamic height

    overFlowDynamic();

    $(window).resize(function() {
        overFlowDynamic();
    });

    function overFlowDynamic() {
        var sideheight = $(".sidebar.sidebar-mini").height() + 48;

        if (sideheight <= 760) {
            $(".sidebar.sidebar-mini").css("overflow", "scroll");
        } else {
            $(".sidebar.sidebar-mini").css("overflow", "visible");
        }
    }


    // Dropdown scroll hide using table responsive

    $('.table-responsive').on('show.bs.dropdown', function() {
        $('.table-responsive').css("overflow", "inherit");
    });

    $('.table-responsive').on('hide.bs.dropdown', function() {
        $('.table-responsive').css("overflow", "auto");
    })

});

// live support team js
var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date();
(function() {
    var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/6051a040f7ce18270930e55a/1f3d4os21';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();