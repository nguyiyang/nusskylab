/**
 * Timeago is a jQuery plugin that makes it easy to support automatically
 * updating fuzzy timestamps (e.g. "4 minutes ago" or "about 1 day ago").
 *
 * @name timeago
 * @version 1.5.3
 * @requires jQuery v1.2.3+
 * @author Ryan McGeary
 * @license MIT License - http://www.opensource.org/licenses/mit-license.php
 *
 * For usage and examples, visit:
 * http://timeago.yarp.com/
 *
 * Copyright (c) 2008-2015, Ryan McGeary (ryan -[at]- mcgeary [*dot*] org)
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"==typeof module&&"object"==typeof module.exports?require("jquery"):jQuery)}(function(t){function e(){var e=r.settings;if(e.autoDispose&&!t.contains(document.documentElement,this))return t(this).timeago("dispose"),this;var o=i(this);return isNaN(o.datetime)||(0===e.cutoff||Math.abs(n(o.datetime))<e.cutoff?t(this).text(a(o.datetime,t(this).attr("lang")?t(this).attr("lang"):r.settings.lang)):t(this).attr("title").length>0&&t(this).text(t(this).attr("title"))),this}function i(e){if(e=t(e),!e.data("timeago")){e.data("timeago",{datetime:r.datetime(e)});var i=t.trim(e.text());r.settings.localeTitle?e.attr("title",e.data("timeago").datetime.toLocaleString()):!(i.length>0)||r.isTime(e)&&e.attr("title")||e.attr("title",i)}return e.data("timeago")}function a(t,e){return r.inWords(n(t),e)}function n(t){return(new Date).getTime()-t.getTime()}t.timeago=function(e){return a(e instanceof Date?e:"string"==typeof e?t.timeago.parse(e):"number"==typeof e?new Date(e):t.timeago.datetime(e))};var r=t.timeago;t.extend(t.timeago,{settings:{refreshMillis:6e4,allowPast:!0,allowFuture:!1,localeTitle:!1,cutoff:0,autoDispose:!0,lang:"en",strings:{en:{prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",inPast:"any moment now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years",wordSeparator:" ",numbers:[]}}},inWords:function(e,i){function a(i,a){var r=t.isFunction(i)?i(a,e):i,o=n.numbers&&n.numbers[a]||a;return r.replace(/%d/i,o)}if(!this.settings.allowPast&&!this.settings.allowFuture)throw"timeago allowPast and allowFuture settings can not both be set to false.";var n=this.settings.strings[i]||this.settings.strings[this.settings.lang]||this.settings.strings.en,r=n.prefixAgo,o=n.suffixAgo;if(this.settings.allowFuture&&0>e&&(r=n.prefixFromNow,o=n.suffixFromNow),!this.settings.allowPast&&e>=0)return n.inPast;var s=Math.abs(e)/1e3,u=s/60,l=u/60,m=l/24,d=m/365,h=45>s&&a(n.seconds,Math.round(s))||90>s&&a(n.minute,1)||45>u&&a(n.minutes,Math.round(u))||90>u&&a(n.hour,1)||24>l&&a(n.hours,Math.round(l))||42>l&&a(n.day,1)||30>m&&a(n.days,Math.round(m))||45>m&&a(n.month,1)||365>m&&a(n.months,Math.round(m/30))||1.5>d&&a(n.year,1)||a(n.years,Math.round(d)),f=n.wordSeparator||"";return void 0===n.wordSeparator&&(f=" "),t.trim([r,h,o].join(f))},parse:function(e){var i=t.trim(e);return i=i.replace(/\.\d+/,""),i=i.replace(/-/,"/").replace(/-/,"/"),i=i.replace(/T/," ").replace(/Z/," UTC"),i=i.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),i=i.replace(/([\+\-]\d\d)$/," $100"),new Date(i)},datetime:function(e){var i=r.isTime(e)?t(e).attr("datetime"):t(e).attr("title");return r.parse(i)},isTime:function(e){return"time"===t(e).get(0).tagName.toLowerCase()}});var o={init:function(){var i=t.proxy(e,this);i();var a=r.settings;a.refreshMillis>0&&(this._timeagoInterval=setInterval(i,a.refreshMillis))},update:function(i){var a=i instanceof Date?i:r.parse(i);t(this).data("timeago",{datetime:a}),r.settings.localeTitle&&t(this).attr("title",a.toLocaleString()),e.apply(this)},updateFromDOM:function(){t(this).data("timeago",{datetime:r.parse(r.isTime(this)?t(this).attr("datetime"):t(this).attr("title"))}),e.apply(this)},dispose:function(){this._timeagoInterval&&(window.clearInterval(this._timeagoInterval),this._timeagoInterval=null)}};t.fn.timeago=function(t,e){var i=t?o[t]:o.init;if(!i)throw new Error("Unknown function name '"+t+"' for timeago");return this.each(function(){i.call(this,e)}),this},document.createElement("abbr"),document.createElement("time")});