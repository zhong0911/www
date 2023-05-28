<?php
require './php/Utils.php';

error_reporting(E_ERROR | E_PARSE);
/**
 * @param mixed $query
 * @param mixed $engine
 * @return void
 */
function search( $query,  $engine): void
{
    if (isUrl($query)) {
        Header("Location: $query");
    } else if ($engine === "baidu") {
        Header("Location: https://www.baidu.com/s?wd=" . urlencode($query));
    } elseif ($engine === "bing") {
        Header("Location: https://cn.bing.com/search?q=" . urlencode($query));
    } elseif ($engine === "sogou") {
        Header("Location: https://www.sogou.com/web?query=" . urlencode($query));
    } elseif ($engine === "s360") {
        Header("Location: https://www.so.com/s?q=" . urlencode($query));
    } elseif ($engine === "google") {
        Header("Location: https://www.google.com/search?q=" . urlencode($query));
    } else {
        Header("Location: https://www.baidu.com/s?wd=" . urlencode($query));
    }
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $query = isset($_POST['query']) ? htmlspecialchars($_POST['query']) : '';
    $engine = isset($_COOKIE['engine']) ? htmlspecialchars($_COOKIE['engine']) : 'baidu';
    if ($query === "") {
        back();
    } else {
        search($query, $engine);
    }
} else {
    $query = isset($_GET['query']) ? htmlspecialchars($_GET['query']) : '';
    $engine = isset($_COOKIE['engine']) ? htmlspecialchars($_COOKIE['engine']) : 'baidu';
    if ($query === "") {
        back();
    }
    search($query, $engine);
}