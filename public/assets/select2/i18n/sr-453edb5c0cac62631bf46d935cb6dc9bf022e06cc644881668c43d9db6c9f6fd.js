!function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var n=jQuery.fn.select2.amd;n.define("select2/i18n/sr",[],function(){function t(n,e,r,t){return n%10==1&&n%100!=11?e:2<=n%10&&n%10<=4&&(n%100<12||14<n%100)?r:t}return{errorLoading:function(){return"Preuzimanje nije uspelo."},inputTooLong:function(n){var e=n.input.length-n.maximum,r="Obri\u0161ite "+e+" simbol";return r+=t(e,"","a","a")},inputTooShort:function(n){var e=n.minimum-n.input.length,r="Ukucajte bar jo\u0161 "+e+" simbol";return r+=t(e,"","a","a")},loadingMore:function(){return"Preuzimanje jo\u0161 rezultata\u2026"},maximumSelected:function(n){var e="Mo\u017eete izabrati samo "+n.maximum+" stavk";return e+=t(n.maximum,"u","e","i")},noResults:function(){return"Ni\u0161ta nije prona\u0111eno"},searching:function(){return"Pretraga\u2026"}}}),n.define,n.require}();