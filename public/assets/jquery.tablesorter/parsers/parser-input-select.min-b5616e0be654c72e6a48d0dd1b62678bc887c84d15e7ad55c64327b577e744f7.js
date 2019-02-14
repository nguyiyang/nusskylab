!function(e){"use strict";var t=function(){};e.tablesorter.addParser({id:"inputs",is:function(){return!1},format:function(t,a,r){var n=e(r).find("input");return n.length?n.val():t},parsed:!0,type:"text"}),e.tablesorter.addParser({id:"inputs-numeric",is:function(){return!1},format:function(t,a,r){var n=e(r).find("input"),i=n.length?n.val():t,s=e.tablesorter.formatFloat((i||"").replace(/[^\w,. \-()]/g,""),a);return t&&"number"==typeof s?s:t?e.trim(t&&a.config.ignoreCase?t.toLocaleLowerCase():t):t},parsed:!0,type:"numeric"}),e.tablesorter.addParser({id:"checkbox",is:function(){return!1},format:function(t,a,r,n){var i=e(r),s=i.closest("tr"),o=a.config.widgetOptions,l=a.config.checkboxClass||"checked",c=o.group_checkbox?o.group_checkbox:["checked","unchecked"],u=i.find('input[type="checkbox"]'),d=u.length?u[0].checked:"";return s.toggleClass(l+"-"+n,d),d?s.addClass(l):s.length&&!(s[0].className||"").match(l+"-")&&s.removeClass(l),u.length?c[d?0:1]:t},parsed:!0,type:"text"}),e.tablesorter.addParser({id:"select",is:function(){return!1},format:function(t,a,r){var n=e(r).find("select");return n.length?n.val():t},parsed:!0,type:"text"}),e.tablesorter.addParser({id:"select-text",is:function(){return!1},format:function(t,a,r){var n=e(r).find("select");return n.length?n.find("option:selected").text()||"":t},parsed:!0,type:"text"}),e.tablesorter.addParser({id:"textarea",is:function(){return!1},format:function(t,a,r){var n=e(r).find("textarea");return n.length?n.val():t},parsed:!0,type:"text"}),e(function(){e("table").on("tablesorter-initialized updateComplete",function(){var a=".parser-forms",r=function(t){t&&e(":focus").blur()};e(this).children("tbody").off(a).on("mouseleave"+a,function(e){r("TBODY"===e.target.nodeName)}).on("focus"+a,"select, input, textarea",function(){e(this).data("ts-original-value",this.value)}).on("blur"+a,"input, textarea",function(){this.value=e(this).data("ts-original-value")}).on("change keyup ".split(" ").join(a+" "),"select, input, textarea",function(a){if(27===a.which)return void(this.value=e(this).data("ts-original-value"));if("change"===a.type||"keyup"===a.type&&13===a.which&&("INPUT"===a.target.nodeName||"TEXTAREA"===a.target.nodeName&&a.altKey)){var r,n=e(a.target),i=n.closest("td"),s=i.closest("table"),o=i[0].cellIndex,l=s[0].config||!1,c=l&&l.$headerIndexed&&l.$headerIndexed[o]||[],u=n.val();if(c.length&&(c.hasClass("parser-false")||c.hasClass("sorter-false")&&c.hasClass("filter-false")))return;(u!==n.data("ts-original-value")||"checkbox"===a.target.type)&&(n.data("ts-original-value",u),s.trigger("updateCell",[i,r,function(){t(a,s,n)}]))}})})})}(jQuery);