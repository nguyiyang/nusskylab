!function(){function n(n,i,t){var u=n%10;return u>1&&u<5&&(n>20||n<10)?i:t}jQuery.timeago.settings.strings.pl={prefixAgo:null,prefixFromNow:"za",suffixAgo:"temu",suffixFromNow:null,seconds:"mniej ni\u017c minut\u0119",minute:"minut\u0119",minutes:function(i){return n(i,"%d minuty","%d minut")},hour:"godzin\u0119",hours:function(i){return n(i,"%d godziny","%d godzin")},day:"dzie\u0144",days:"%d dni",month:"miesi\u0105c",months:function(i){return n(i,"%d miesi\u0105ce","%d miesi\u0119cy")},year:"rok",years:function(i){return n(i,"%d lata","%d lat")}}}();