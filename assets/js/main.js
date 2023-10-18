$(document).ready(function () {

    var isMiniSidebar = localStorage.getItem('isMiniSidebar');

    if (isMiniSidebar === 'true') {
        $(".main-sidebar").addClass("main-sidebar-deactive");
        $(".mini-main-sidebar").removeClass("mini-main-sidebar-deactive");
        $("#Close_mini_sidebar").show();
    } else {
        $(".main-sidebar").removeClass("main-sidebar-deactive");
        $(".mini-main-sidebar").addClass("mini-main-sidebar-deactive");
        $("#Close_mini_sidebar").hide();
    }

    $("#Open_mini_sidebar").click(function () {
        $(".main-sidebar").addClass("main-sidebar-deactive");
        $(".mini-main-sidebar").removeClass("mini-main-sidebar-deactive");
        $("#Close_mini_sidebar").show();

        localStorage.setItem('isMiniSidebar', true);
    })

    $("#Close_mini_sidebar").click(function () {
        $(this).hide();
        $(".main-sidebar").removeClass("main-sidebar-deactive");
        $(".mini-main-sidebar").addClass("mini-main-sidebar-deactive");

        localStorage.setItem('isMiniSidebar', false);
    })


    $("#Responsive_Open_sidebar").click(function () {
        $(".main-sidebar").addClass("responsive-main-sidebar");
        $("#overlay").fadeIn("show");
    })

    $("#Responsive_Close_sidebar").click(function () {
        $(".main-sidebar").removeClass("responsive-main-sidebar");
        $("#overlay").hide();
    })

    $("#overlay").click(function () {
        $(".main-sidebar").removeClass("responsive-main-sidebar");
        $(this).hide();
    })

})

