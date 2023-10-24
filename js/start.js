$(function () {
    'use strict';

    const setTilesAreaSize = function () {
        const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        const groups = $(".tiles-group");
        let tileAreaWidth = 80;
        $.each(groups, function () {
            if (width <= Metro.media_sizes.LD) {
                tileAreaWidth = width;
            } else {
                tileAreaWidth += $(this).outerWidth() + 80;
            }
        });

        $(".tiles-area").css({
            width: tileAreaWidth
        });

        if (width > Metro.media_sizes.LD) {
            $(".start-screen").css({
                overflow: "auto"
            })
        }
    };

    setTilesAreaSize();

    $.each($('[class*=tile-]'), function () {
        const tile = $(this);
        setTimeout(function () {
            tile.css({
                opacity: 1,
                "transform": "scale(1)",
                "transition": ".3s"
            }).css("transform", false);

        }, Math.floor(Math.random() * 500));
    });

    $(".tiles-group").animate({
        left: 0
    });

    $(window).on(Metro.events.resize + "-start-screen-resize", function () {
        setTilesAreaSize();
    });
})
