"use strict";$(document).ready(function(){$("body").on("click",".button_team",function(o){var e=$(o.target);console.log(e);var n=e.data("team-id");console.log(n);var t="#modal_"+n,c=$(t);console.log(t),console.log(c);document.getElementById("button_".concat(n));var l=document.getElementsByClassName("close")[0];console.log("Success!"),c.show(),l.onclick=function(){c.hide()},window.onclick=function(o){o.target==c&&c.hide()}})});