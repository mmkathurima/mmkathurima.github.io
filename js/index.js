let technologiesIsShown = false, identityIsShown = false, resumeIsShown = false,
    job1IsShown = false, miscIsShown = false;

$(".window").draggable({handle: ".window-titlebar"}).resizable();

$('html').bind('mousedown', function () {
    $('.window').addClass('deactive');
});

$('.window').bind('mousedown', function (event) {
    event.stopPropagation();
    $(this).removeClass('deactive');
});

$("#technologies-tile").on("click", function (ev) {
    if (!technologiesIsShown) {
        $("#technologies").css("display", "block").toggleClass("animate__flipInY").toggleClass("deactive");
        technologiesIsShown = !technologiesIsShown;
    }
});

$("#technologies-window-close").on("click", function (ev) {
    if (technologiesIsShown) {
        $("#technologies").toggleClass("animate__flipInY").css("display", "none");
        technologiesIsShown = !technologiesIsShown;
    }
});

$("#identity-tile").on("click", function (ev) {
    if (!identityIsShown) {
        $("#identity").css("display", "block").toggleClass("animate__flipInY").toggleClass("deactive");
        identityIsShown = !identityIsShown;
    }
});
$("#identity-window-close").on("click", function (ev) {
    if (identityIsShown) {
        $("#identity").toggleClass("animate__flipInY").css("display", "none");
        identityIsShown = !identityIsShown;
    }
});

$("#resume-tile").on("click", function (ev) {
    if (!resumeIsShown) {
        $("#resume").css("display", "block").toggleClass("animate__flipInY").toggleClass("deactive");
        resumeIsShown = !resumeIsShown;
    }
});
$("#resume-window-close").on("click", function (ev) {
    if (resumeIsShown) {
        $("#resume").toggleClass("animate__flipInY").css("display", "none");
        resumeIsShown = !resumeIsShown;
    }
});

$("#job1-tile").on("click", function (ev) {
    if (!job1IsShown) {
        $("#job1").css("display", "block").toggleClass("animate__flipInY").toggleClass("deactive");
        job1IsShown = !job1IsShown;
    }
});
$("#job1-window-close").on("click", function (ev) {
    if (job1IsShown) {
        $("#job1").toggleClass("animate__flipInY").css("display", "none");
        job1IsShown = !job1IsShown;
    }
});

$("#misc-tile").on("click", function (ev) {
    if (!miscIsShown) {
        $("#misc").css("display", "block").toggleClass("animate__flipInY").toggleClass("deactive");
        miscIsShown = !miscIsShown;
    }
});
$("#misc-window-close").on("click", function (ev) {
    if (miscIsShown) {
        $("#misc").toggleClass("animate__flipInY").css("display", "none");
        miscIsShown = !miscIsShown;
    }
});

document.body.onwheel = function (e) {
    if (e.target.closest(".window"))
        return;
    //console.log(e.target);
    const up = e.deltaY < 0 ? -1 : 1;
    const scrollStep = 50;
    $(".start-screen")[0].scrollLeft += scrollStep * up;
};