$(document).ready(function () {
    initSearchSettings();
    $("#save").click(function () {
        saveSearchSettings();
    });
    $("#back").click(function () {
        into("/");
    });
});


function initSearchSettings() {
    $("#search-settings").click(function () {
        $("#search-settings-modal-div").load("/static/html/settings/search-settings.html", function () {
            $("#search-settings-modal").modal("show");
            $("#engine").val($.cookie("engine") ? $.cookie("engine") : 'baidu');
            $("#save-search-settings").click(function () {
                saveSearchSettings();
            });
        });
    });
    $("#display-settings").click(function () {
        $("#display-settings-modal-div").load("/static/html/settings/display-settings.html", function () {
            $("#display-settings-modal").modal("show");
            if ($.cookie('dark_mode') === 'on') $('#dark-mode').prop("checked", true);
            $("#save-display-settings").click(function () {
                saveDisplaySettings();
            });
        });
    });
    $("#advanced-settings").click(function () {
        $("#advanced-settings-modal-div").load("/static/html/settings/advanced-settings.html", function () {
            $("#advanced-settings-modal").modal("show");
        });
    });
}


function saveSearchSettings() {
    let engine = $("#engine").val();
    $.cookie('engine', engine, {expires: 30, path: "/"});
    $prompt.success("保存成功");
    setTimeout(function () {
        $("#search-settings-modal").modal("hide");
    }, 500);
}

function saveDisplaySettings() {
    if ($("#dark-mode").is(":checked")) {
        $("body").addClass("dark-mode");
        $.cookie('dark_mode', 'on', {expires: 30, path: "/"});
    }else {
        $("body").removeClass("dark-mode");
        $.cookie('dark_mode', 'off', {expires: 30, path: "/"});
    }
    $prompt.success("保存成功");
    setTimeout(function () {
        $("#display-settings-modal").modal("hide");
    }, 500);
}