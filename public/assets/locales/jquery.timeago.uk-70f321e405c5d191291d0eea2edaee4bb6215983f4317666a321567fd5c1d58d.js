!function(){function n(n,r,u,t){var o=n%10;return 1===o&&(1===n||n>20)?r:o>1&&5>o&&(n>20||10>n)?u:t}jQuery.timeago.settings.strings.uk={prefixAgo:null,prefixFromNow:"\u0447\u0435\u0440\u0435\u0437",suffixAgo:"\u0442\u043e\u043c\u0443",suffixFromNow:null,seconds:"\u043c\u0435\u043d\u0448\u0435 \u0445\u0432\u0438\u043b\u0438\u043d\u0438",minute:"\u0445\u0432\u0438\u043b\u0438\u043d\u0430",minutes:function(r){return n(r,"%d \u0445\u0432\u0438\u043b\u0438\u043d\u0430","%d \u0445\u0432\u0438\u043b\u0438\u043d\u0438","%d \u0445\u0432\u0438\u043b\u0438\u043d")},hour:"\u0433\u043e\u0434\u0438\u043d\u0430",hours:function(r){return n(r,"%d \u0433\u043e\u0434\u0438\u043d\u0430","%d \u0433\u043e\u0434\u0438\u043d\u0438","%d \u0433\u043e\u0434\u0438\u043d")},day:"\u0434\u0435\u043d\u044c",days:function(r){return n(r,"%d \u0434\u0435\u043d\u044c","%d \u0434\u043d\u0456","%d \u0434\u043d\u0456\u0432")},month:"\u043c\u0456\u0441\u044f\u0446\u044c",months:function(r){return n(r,"%d \u043c\u0456\u0441\u044f\u0446\u044c","%d \u043c\u0456\u0441\u044f\u0446\u0456","%d \u043c\u0456\u0441\u044f\u0446\u0456\u0432")},year:"\u0440\u0456\u043a",years:function(r){return n(r,"%d \u0440\u0456\u043a","%d \u0440\u043e\u043a\u0438","%d \u0440\u043e\u043a\u0456\u0432")}}}();