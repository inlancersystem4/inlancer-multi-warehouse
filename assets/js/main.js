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
        $(".full-screen-model").fadeOut("slow");
        $(".model").hide();
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



    $('.add-custom-option input').on('input', function () {
        if ($(this).val().trim() !== '') {
            $('.add_new-custom-option').addClass('add_new-custom-option-show');
        } else {
            $('.add_new-custom-option').removeClass('add_new-custom-option-show');
        }
    });





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




    $("#show_SearchBar").click(function (event) {
        event.stopPropagation();
        $(this).children(".searchBar").fadeIn();
        $(document).on("click", function (event) {
            if (!$(event.target).closest(".searchBar").length) {
                $(".searchBar").fadeOut();
            }
        });
    });


    $('.disabled-list input').prop('disabled', true);

    $('.areas-list li .custom-checkbox').each(function () {
        if ($(this).is(':checked')) {
            $(this).closest('li').addClass('active-list');
        }
    });

    $('.areas-list li .custom-checkbox').change(function () {
        if ($(this).is(':checked')) {
            $(this).parent().addClass("areas-list-checkbox-show")
            $(this).closest('li').addClass('active-list');
        } else {
            $(this).parent().removeClass("areas-list-checkbox-show")
            $(this).closest('li').removeClass('active-list');
        }
    });

    $('.areas-list .main-areas-list-item .custom-checkbox').change(function () {
        if ($(this).is(':checked')) {
            $(this).parent().parent().siblings().children('.areas-list-checkbox').addClass('areas-list-checkbox-show');
            $(this).parent().parent().siblings().addClass('active-list');
            $(this).parent().parent().siblings().children('.areas-list-checkbox').children('.custom-checkbox').prop('checked', true);
        } else {
            $(this).parent().parent().siblings().children('.areas-list-checkbox').removeClass('areas-list-checkbox-show');
            $(this).parent().parent().siblings().removeClass('active-list');
            $(this).parent().parent().siblings().children('.areas-list-checkbox').children('.custom-checkbox').prop('checked', false);
        }
    });


    $('.main-table .main-checkbox .custom-checkbox').change(function () {
        if ($(this).is(':checked')) {
            $(this).parent().parent().addClass('bg-Grey_5');
            $(this).parent().parent().siblings().addClass('bg-Grey_5');
            $(this).parent().parent().siblings().children('.list-checkbox').addClass("list-checkbox-show");
            $(this).parent().parent().siblings().children('.list-checkbox').children(".custom-checkbox").prop('checked', true);
        } else {
            $(this).parent().parent().removeClass('bg-Grey_5');
            $(this).parent().parent().siblings().removeClass('bg-Grey_5');
            $(this).parent().parent().siblings().children('.list-checkbox').removeClass("list-checkbox-show");
            $(this).parent().parent().siblings().children('.list-checkbox').children('.custom-checkbox').prop('checked', false);
        }
    });




    $('.continents-list li .arrow-icon').click(function () {
        $(this).parent().toggleClass("active-continents-list");
        $(this).parent().siblings().slideToggle();
        $(this).toggleClass("rotage-90")
    })

    $('.toggle_shipping_details').click(function () {
        $(this).parent().parent().siblings('.shipping_details').slideToggle()
        $(this).toggleClass('rotate-180')
    })


    $('.price-accordion .price-list .price-list-details .accordion-icon').click(function () {
        $(this).parent().parent().parent().toggleClass('price-accordion-active');
    })


    $('.add-shipping-option-radio_btn').each(function () {
        if ($(this).is(':checked')) {
            $(this).parent().parent().addClass('border-violet');
        }
    });

    $('.add-shipping-option-radio_btn').change(function () {
        $(this).parent().parent().siblings().removeClass('border-violet');

        if ($(this).is(':checked')) {
            $(this).parent().parent().addClass('border-violet');
        } else {
            $(this).parent().parent().removeClass('border-violet');
        }
    });






    $(".chat_box_Close_btn").hide()

    $(".chat_box_Open_btn").click(function () {
        $(this).hide();
        $(this).siblings(".chat_box_Close_btn").show();
        $(this).parent().siblings(".chat-box").addClass("chat-box_show");
    })

    $(".chat_box_Close_btn").click(function () {
        $(this).hide();
        $(this).siblings(".chat_box_Open_btn").show();
        $(this).parent().siblings(".chat-box").removeClass("chat-box_show");
    })

    $(".open_End_conversation_model").click(function () {
        $(".chat-box-position .chat-box .chat-box-close-model").css("display", "flex");
        $(".chat-box-position .chat-box .OverLay").show();
    })

    $(".Close_End_conversation_model").click(function () {
        $(".chat-box-position .chat-box .chat-box-close-model").hide();
        $(".chat-box-position .chat-box .OverLay").hide();
    })

    $(".Close_chat-box").click(function () {
        $(this).parent().parent().parent(".chat-box").removeClass("chat-box_show");
        $(".chat-box-position .chat-box .chat-box-close-model").hide();
        $(".chat-box-position .chat-box .OverLay").hide();
    })



    $('.open_chat-connectivity').click(function () {
        $('.chat-wrapper .chat-connectivity').addClass('chat-connectivity_show')
    })

    $('.close_chat-connectivity').click(function () {
        $('.chat-wrapper .chat-connectivity').removeClass('chat-connectivity_show')
    })

    $('.togglePassword').click(function () {
        var inputField = $(this).siblings("input");
        if (inputField.attr('type') === 'password') {
            inputField.attr('type', 'text');
            $(this).children(".pass_hide").show();
            $(this).children(".pass_show").hide();
        } else {
            inputField.attr('type', 'password');
            $(this).children(".pass_hide").hide();
            $(this).children(".pass_show").show();
        }
    });

})


$(document).keydown(function (e) {
    if (e.keyCode === 27) {
        $(".full-screen-model").fadeOut();
        $(".drawer").removeClass("drawer-show");
        $(".model").fadeOut();
        $("#overlay").hide();
    }
});



function OpenDrawer(DrawerId) {
    $(".full-screen-model").fadeOut();
    $("#" + DrawerId).addClass("drawer-show")
    $("#overlay").fadeIn("show");
}

function CloseDrawer(DrawerId) {
    $(".full-screen-model").fadeOut();
    $("#" + DrawerId).removeClass("drawer-show")
    $("#overlay").hide();
}



function OpenDropDown(dropdownId) {
    $(".custom-dropdown-list").removeClass("show-dropdown");
    $("#" + dropdownId).toggleClass("show-dropdown");
}


function OpenModel(modelId) {
    $("#" + modelId).fadeIn("show");
    $("#overlay").show("slow");
}

function CloseModel(modelId) {
    $("#" + modelId).fadeOut();
    $("#overlay").hide();
}

// function showPopovers(popoversId) {
//     $("[data-show ]" + popoversId).hide()
// }

function showPopovers(popoversId) {
    $("[data-show='" + popoversId + "']").fadeIn("fast");
}

function hidePopovers(popoversId) {
    $("[data-show='" + popoversId + "']").hide();
}

function ToggleAccordion(accordionId) {
    $("#" + accordionId).slideToggle("slow");
}


$(document).on("click", function (e) {
    if (!$(e.target).closest(".custom-dropdown").length && !$(e.target).hasClass("dropdown-link")) {
        $(".custom-dropdown-list").removeClass("show-dropdown");
    }
});


