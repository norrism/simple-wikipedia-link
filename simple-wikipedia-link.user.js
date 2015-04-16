// ==UserScript==
// @name       Simple Wikipedia Link
// @author     Michael Norris
// @namespace  http://norrism.com
// @version    1.0.1
// @description Provides a link to the Simple English Wikipedia version of the current Wikipedia article being browsed
// @match      http://en.wikipedia.org/wiki/*
// @match      https://en.wikipedia.org/wiki/*
// @require    http://code.jquery.com/jquery-latest.js
// ==/UserScript==

var url = window.location.href;
var subdir = "/wiki/";

// Parse name of article and protocol
var article = url.substring(url.indexOf(subdir) + subdir.length);
var protocol = url.substring(0, url.indexOf(":"));

// Remove article subsection from Simple URL as page contents may differ
if(article.indexOf("#") != -1){
    article = article.substring(0, article.indexOf("#"));
}

var link = '<li><span><a href="' + protocol + '://simple.wikipedia.org/wiki/' + article + '" title="Read the Simple English version of this article">Simple</a></span></li>';

$("#p-namespaces ul").append(link);