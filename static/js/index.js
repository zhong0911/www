$(document).ready(function () {
    initIndexPage();
});

function initIndexPage() {
    $("#query").keyup(function () {
        checkKeyWord();
    });
    initDarkMode();
    initLanguage();
    initFooter();
    initUser();
    initMessage();
    initChangLanguage();
}

function initDarkMode() {
    if ($.cookie('dark_mode') === 'on') {
        $("body").addClass("dark-mode");
    } else {
        $.cookie('dark_mode', 'off', {expires: 30, path: "/"});
    }
}

languages = ['zh-cn', 'en-us', 'fr-fr'];


function initLanguage() {
    let lang = $.url.param("lang");
    if (lang) {
        if (languages.includes(lang)) {
            $.cookie('lang', lang, {expires: 30, path: "/"});
            changLang(lang);
        } else {
            $.cookie('lang', 'zh-cn', {expires: 30, path: "/"});
            into("https://www.antx.cc/");
        }
    } else {
        lang = $.cookie('lang');
        if (lang) {
            changLang(lang);
        } else {
            $.cookie('lang', 'zh-cn', {expires: 30, path: "/"});
            into("https://www.antx.cc/");
        }
    }
}

function changLang(lang) {
    switch (lang) {
        case "zh-cn": {
            changLanguage(lang);
            break;
        }
        case "en-us": {
            changLanguage(lang);
            break;
        }
        default: {
            $.cookie('lang', 'zh-cn', {expires: 30, path: "/"});
            into("https://www.antx.cc/");
            break;
        }
    }
}

function initFooter() {
    $("#footer").load("https://www.antx.cc/static/html/footer/footer.html");
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
            case "zh-cn":
                $(".text-search").text("访问");
                break;
            case"en-us":
                $(".text-search").text("Visit");
                break;
            default:
                refresh();
                break;
        }
    } else {
        switch (lang) {
            case "zh-cn":
                $(".text-search").text("搜索");
                break;
            case"en-us":
                $(".text-search").text("Search");
                break;
            default:
                refresh();
                break;
        }
    }
}