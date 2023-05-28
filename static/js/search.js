$(document).ready(function () {
    init();
    $("#go").click(function () {
        search2();
    });
});

function init() {
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
}

function search(query, engine) {
    if (query) {
        if (isUrl(query)) {
            if (!query.startsWith("https:??") || !query.startsWith("http://"))into("http://"+query);
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

function submit(){
    search2()
    return false;
}