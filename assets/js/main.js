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
        $(".drawer").removeClass("drawer-show");
        $(".full-screen-model").fadeOut("slow")
        $(this).hide();
    })




    $(".dropdown-link").click(function () {
        $(this).parent().siblings().children().removeClass("selected-dropdown-option")
        $(this).addClass("selected-dropdown-option");
    })





    $('.val_clear').hide();

    $('.enter_val').on('input', function () {
        if ($(this).val().length > 0) {
            $(this).siblings('.val_clear').show();
        } else {
            $(this).siblings('.val_clear').hide();
        }
    });

    $('.val_clear').on('click', function () {
        $(this).siblings('.enter_val').val('');
        $(this).hide();
    });




    $('.enter_Adjust').val(0);

    $('.val_increase').on('click', function () {
        var currentVal = parseInt($(this).parent().siblings(".enter_Adjust").val());
        if (currentVal < 999) {
            $(this).parent().siblings(".enter_Adjust").val(currentVal + 1);
        }
    });


    $('.val_decrease').on('click', function () {
        var currentVal = parseInt($(this).parent().siblings(".enter_Adjust").val());
        if (currentVal > 0) {
            $(this).parent().siblings(".enter_Adjust").val(currentVal - 1);
        }
    });






    $(".available-section").click(function () {
        $(".drawer").addClass("drawer-show")
        $("#overlay").fadeIn("show");
    })

    $(".close-icon").click(function () {
        $(".drawer").removeClass("drawer-show")
        $("#overlay").hide();
    })



    $('.tab-button').on('click', function () {
        $('.tab-button').removeClass('active-tab-button');
        $(this).addClass('active-tab-button');


        $('.tab-pane').removeClass('active-tab-content');

        var tabId = $(this).data('tab');

        $('#' + tabId).addClass('active-tab-content');

    });



    $(".accordion-header").click(function () {
        $(this).parent().siblings().removeClass("active-accordion")
        $(this).parent().toggleClass("active-accordion");
    })


    $("#Open_Add_location-model").click(function () {
        $(".full-screen-model").fadeIn("slow")
        $("#overlay").show("slow");
    })


    $("#Model_Close_btn").click(function () {
        $(".full-screen-model").fadeOut()
        $("#overlay").hide();
    })


    $("#show_SearchBar").click(function (event) {
        event.stopPropagation();
        $(this).children(".searchBar").fadeIn();
        $(document).on("click", function (event) {
            if (!$(event.target).closest(".searchBar").length) {
                $(".searchBar").fadeOut();
            }
        });
    });

})

function OpenDropDown(dropdownId) {
    $(".custom-dropdown-list").removeClass("show-dropdown");
    $("#" + dropdownId).toggleClass("show-dropdown");
}

$(document).on("click", function (e) {
    if (!$(e.target).closest(".custom-dropdown").length && !$(e.target).hasClass("dropdown-link")) {
        $(".custom-dropdown-list").removeClass("show-dropdown");
    }
});