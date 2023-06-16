$(document).ready(function () {
    let lang = $.url.param("lang") ?? $.cookie('lang') ?? '';
    if (languages.includes(lang)) {
        $.cookie('lang', lang, {expires: 30, path: "/"});
        $("#app").load(`/static/html/homepage/${lang}.html`, function () {
            initIndexPage();
        })
    } else {
        $.cookie('lang', 'zh_CN', {expires: 30, path: "/"});
        into("https://www.antx.cc/");
    }
});

function initIndexPage() {
    initFooter();
    initPageEvent();
    initDarkMode();
    initUser();
    initMessage();
    initSearchSettings();
    initChangeLang();
}

function initDarkMode() {
    if ($.cookie('dark_mode') === 'on') {
        $("body").addClass("dark-mode");
    } else {
        $.cookie('dark_mode', 'off', {expires: 30, path: "/"});
    }
}

languages = ['zh_CN', 'en_US', 'fr_FR'];


function initPageEvent() {
    $("#query").keyup(function () {
        checkKeyWord();
    });
    let query = $.url.param('q');
    if (query) {
        let engine = $.url.param('e') ? $.url.param('e') : 'baidu';
        search(query, engine);
    }
    $("#search-form").submit(
        function (event) {
            search2();
            event.preventDefault();
        }
    );
    $("#go").click(function () {
        search2();
    });
    $("#save").click(function () {
        saveSearchSettings();
    });
    $("#back").click(function () {
        into("/");
    });
}

function initFooter() {
    $.get("https://www.antx.cc/static/html/footer/footer.html", function (data) {
        $("footer").append(data);
    });
}

function initUser() {
    if (getLoginStatus()) {
        let info = getUserInfo();
        if (info['success']) {
            let avatar = info['avatar'];
            $("#user").html(`<a href="https://passport.antx.cc/home" target="_blank"><img class="img-circle rounded-circle" src="${avatar}" width="25" height="25" alt="个人中心"></a>`);
        }
    } else {
        $("#login").click(function () {
            into("https://passport.antx.cc/login/?target=" + encodeURIComponent("https://www.antx.cc/"));
        });
    }
}

function initMessage() {
    let isDisplay = $.cookie('display_notice');
    if (isDisplay) {
        if (isDisplay !== 'off') {
            $.get('/notice/new/index.html', function (data) {
                $('body').prepend(data);
            });
        }
    } else {
        $.cookie('display_notice', 'on', {expires: 30, path: "/"});
    }
}

function offDisplayMessage() {
    $.cookie('display_notice', 'off', {expires: 30, path: "/"});
}

function checkKeyWord() {
    let keyword = $("#query").val();
    let lang = $.cookie('lang');
    if (isUrl(keyword)) {
        switch (lang) {
            case "zh_CN":
                $(".text-search").text("访问");
                break;
            case"en_US":
                $(".text-search").text("Visit");
                break;
            default:
                refresh();
                break;
        }
    } else {
        switch (lang) {
            case "zh_CN":
                $(".text-search").text("搜索");
                break;
            case"en_US":
                $(".text-search").text("Search");
                break;
            default:
                refresh();
                break;
        }
    }
}

function search(query, engine) {
    if (query) {
        if (isUrl(query)) {
            if (!query.startsWith("https:??") || !query.startsWith("http://")) into("http://" + query);
            else into(query);
        } else if (engine === "baidu") {
            into("https://www.baidu.com/s?wd=" + encodeURIComponent(query));
        } else if (engine === "bing") {
            into("https://cn.bing.com/search?q=" + encodeURIComponent(query));
        } else if (engine === "sogou") {
            into("https://www.sogou.com/web?query=" + encodeURIComponent(query));
        } else if (engine === "360" || engine === "s360") {
            into("https://www.so.com/s?q=" + encodeURIComponent(query));
        } else if (engine === "google") {
            into("https://www.google.com/search?q=" + encodeURIComponent(query));
        } else {
            into("https://www.baidu.com/s?wd=" + encodeURIComponent(query));
        }
    }
}

function search2() {
    let query = $("#query").val();
    let engine = $.cookie("engine") ? $.cookie("engine") : 'baidu';
    search(query, engine);
}

function submit() {
    search2()
    return false;
}

function initChangeLang() {
    $("#zh_CN").click(function () {
        into('/index.html?lang=zh_CN')
    });
    $("#en_US").click(function () {
        into('/index.html?lang=en_US')
    });
}

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
    } else {
        $("body").removeClass("dark-mode");
        $.cookie('dark_mode', 'off', {expires: 30, path: "/"});
    }
    $prompt.success("保存成功");
    setTimeout(function () {
        $("#display-settings-modal").modal("hide");
    }, 500);
}