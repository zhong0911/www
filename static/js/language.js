function changLanguage(lang) {
    switch (lang) {
        case "zh-cn": {
            changToZhCn();
            break;
        }
        case "en-us": {
            changToEnUs();
            break;
        }
        default: {
            $.cookie('lang', 'zh-cn', {expires: 30, path: "/"});
            break;
        }
    }
}

function initChangLanguage() {
    $('#zh-cn').click(function () {
        changToZhCn();
    });
    $('#en-us').click(function () {
        changToEnUs();
    });
}


function changToZhCn() {
    $.cookie('lang', 'zh-cn', {expires: 30, path: "/"});
    $(".text-api").text("API");
    $(".text-blog").text("博客");
    $(".text-image").text("图片");
    $(".text-video").text("视频");
    $(".text-tools").text("工具");
    $(".text-translate").text("翻译");
    $(".text-about").text("关于");
    $(".text-language").text("语言");
    $(".text-more").text("更多");
    $(".text-partners").text("合作伙伴");
    $(".text-friendly-links").text("友情链接");
    $(".text-settings").text("设置");
    $(".text-search-settings").text("搜索设置");
    $(".text-display-settings").text("显示设置");
    $(".text-advanced-settings").text("高级设置");
    $(".text-login").text("登录");
    $(".text-search").text("搜索");
    $(".text-short-link").text("短链接");
    $(".text-developer").text("开发者");
    $(".query").attr("placeholder", "输入关键词或者输入网址");
    $(".header-search").attr("placeholder", "在本站上搜索");
}

function changToEnUs() {
    $.cookie('lang', 'en-us', {expires: 30, path: "/"});
    $(".text-api").text("API");
    $(".text-blog").text("Blog");
    $(".text-image").text("Images");
    $(".text-video").text("Videos");
    $(".text-tools").text("Tools");
    $(".text-translate").text("Translate");
    $(".text-about").text("About");
    $(".text-language").text("Languages");
    $(".text-more").text("More");
    $(".text-short-link").text("Short Link");
    $(".text-partners").text("Partners");
    $(".text-friendly-links").text("Friendly Links");
    $(".text-settings").text("Settings");
    $(".text-search-settings").text("Search Settings");
    $(".text-display-settings").text("Display Settings");
    $(".text-advanced-settings").text("Advanced settings");
    $(".text-login").text("Login");
    $(".text-search").text("Search");
    $(".text-developer").text("Developer");
    $(".query").attr("placeholder", "Enter keywords or enter website address");
    $(".header-search").attr("placeholder", "Search on this website");
}