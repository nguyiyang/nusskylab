(function(){var n;n=function(n,d,e,u){var t;return t=n%10,1===t&&(1===n||n>20)?d:t>1&&5>t&&(n>20||10>n)?e:u},jQuery.timeago.settings.strings.hr={prefixAgo:"prije",prefixFromNow:"za",suffixAgo:null,suffixFromNow:null,second:"sekundu",seconds:function(d){return n(d,"%d sekundu","%d sekunde","%d sekundi")},minute:"oko minutu",minutes:function(d){return n(d,"%d minutu","%d minute","%d minuta")},hour:"oko jedan sat",hours:function(d){return n(d,"%d sat","%d sata","%d sati")},day:"jedan dan",days:function(d){return n(d,"%d dan","%d dana","%d dana")},month:"mjesec dana",months:function(d){return n(d,"%d mjesec","%d mjeseca","%d mjeseci")},year:"prije godinu dana",years:function(d){return n(d,"%d godinu","%d godine","%d godina")},wordSeparator:" "}}).call(this);