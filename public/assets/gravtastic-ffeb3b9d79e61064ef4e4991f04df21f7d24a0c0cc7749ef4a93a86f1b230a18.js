!function(r){function t(r){return e(n(a(r)))}function n(r){return u(i(o(r),8*r.length))}function e(r){for(var t,n=h?"0123456789ABCDEF":"0123456789abcdef",e="",a=0;a<r.length;a++)t=r.charCodeAt(a),e+=n.charAt(t>>>4&15)+n.charAt(15&t);return e}function a(r){for(var t,n,e="",a=-1;++a<r.length;)t=r.charCodeAt(a),n=a+1<r.length?r.charCodeAt(a+1):0,55296<=t&&t<=56319&&56320<=n&&n<=57343&&(t=65536+((1023&t)<<10)+(1023&n),a++),t<=127?e+=String.fromCharCode(t):t<=2047?e+=String.fromCharCode(192|t>>>6&31,128|63&t):t<=65535?e+=String.fromCharCode(224|t>>>12&15,128|t>>>6&63,128|63&t):t<=2097151&&(e+=String.fromCharCode(240|t>>>18&7,128|t>>>12&63,128|t>>>6&63,128|63&t));return e}function o(r){for(var t=Array(r.length>>2),n=0;n<t.length;n++)t[n]=0;for(n=0;n<8*r.length;n+=8)t[n>>5]|=(255&r.charCodeAt(n/8))<<n%32;return t}function u(r){for(var t="",n=0;n<32*r.length;n+=8)t+=String.fromCharCode(r[n>>5]>>>n%32&255);return t}function i(r,t){r[t>>5]|=128<<t%32,r[14+(t+64>>>9<<4)]=t;for(var n=1732584193,e=-271733879,a=-1732584194,o=271733878,u=0;u<r.length;u+=16){var i=n,f=e,c=a,h=o;e=d(e=d(e=d(e=d(e=v(e=v(e=v(e=v(e=l(e=l(e=l(e=l(e=g(e=g(e=g(e=g(e,a=g(a,o=g(o,n=g(n,e,a,o,r[u+0],7,-680876936),e,a,r[u+1],12,-389564586),n,e,r[u+2],17,606105819),o,n,r[u+3],22,-1044525330),a=g(a,o=g(o,n=g(n,e,a,o,r[u+4],7,-176418897),e,a,r[u+5],12,1200080426),n,e,r[u+6],17,-1473231341),o,n,r[u+7],22,-45705983),a=g(a,o=g(o,n=g(n,e,a,o,r[u+8],7,1770035416),e,a,r[u+9],12,-1958414417),n,e,r[u+10],17,-42063),o,n,r[u+11],22,-1990404162),a=g(a,o=g(o,n=g(n,e,a,o,r[u+12],7,1804603682),e,a,r[u+13],12,-40341101),n,e,r[u+14],17,-1502002290),o,n,r[u+15],22,1236535329),a=l(a,o=l(o,n=l(n,e,a,o,r[u+1],5,-165796510),e,a,r[u+6],9,-1069501632),n,e,r[u+11],14,643717713),o,n,r[u+0],20,-373897302),a=l(a,o=l(o,n=l(n,e,a,o,r[u+5],5,-701558691),e,a,r[u+10],9,38016083),n,e,r[u+15],14,-660478335),o,n,r[u+4],20,-405537848),a=l(a,o=l(o,n=l(n,e,a,o,r[u+9],5,568446438),e,a,r[u+14],9,-1019803690),n,e,r[u+3],14,-187363961),o,n,r[u+8],20,1163531501),a=l(a,o=l(o,n=l(n,e,a,o,r[u+13],5,-1444681467),e,a,r[u+2],9,-51403784),n,e,r[u+7],14,1735328473),o,n,r[u+12],20,-1926607734),a=v(a,o=v(o,n=v(n,e,a,o,r[u+5],4,-378558),e,a,r[u+8],11,-2022574463),n,e,r[u+11],16,1839030562),o,n,r[u+14],23,-35309556),a=v(a,o=v(o,n=v(n,e,a,o,r[u+1],4,-1530992060),e,a,r[u+4],11,1272893353),n,e,r[u+7],16,-155497632),o,n,r[u+10],23,-1094730640),a=v(a,o=v(o,n=v(n,e,a,o,r[u+13],4,681279174),e,a,r[u+0],11,-358537222),n,e,r[u+3],16,-722521979),o,n,r[u+6],23,76029189),a=v(a,o=v(o,n=v(n,e,a,o,r[u+9],4,-640364487),e,a,r[u+12],11,-421815835),n,e,r[u+15],16,530742520),o,n,r[u+2],23,-995338651),a=d(a,o=d(o,n=d(n,e,a,o,r[u+0],6,-198630844),e,a,r[u+7],10,1126891415),n,e,r[u+14],15,-1416354905),o,n,r[u+5],21,-57434055),a=d(a,o=d(o,n=d(n,e,a,o,r[u+12],6,1700485571),e,a,r[u+3],10,-1894986606),n,e,r[u+10],15,-1051523),o,n,r[u+1],21,-2054922799),a=d(a,o=d(o,n=d(n,e,a,o,r[u+8],6,1873313359),e,a,r[u+15],10,-30611744),n,e,r[u+6],15,-1560198380),o,n,r[u+13],21,1309151649),a=d(a,o=d(o,n=d(n,e,a,o,r[u+4],6,-145523070),e,a,r[u+11],10,-1120210379),n,e,r[u+2],15,718787259),o,n,r[u+9],21,-343485551),n=C(n,i),e=C(e,f),a=C(a,c),o=C(o,h)}return Array(n,e,a,o)}function f(r,t,n,e,a,o){return C(c(C(C(t,r),C(e,o)),a),n)}function g(r,t,n,e,a,o,u){return f(t&n|~t&e,r,t,a,o,u)}function l(r,t,n,e,a,o,u){return f(t&e|n&~e,r,t,a,o,u)}function v(r,t,n,e,a,o,u){return f(t^n^e,r,t,a,o,u)}function d(r,t,n,e,a,o,u){return f(n^(t|~e),r,t,a,o,u)}function C(r,t){var n=(65535&r)+(65535&t);return(r>>16)+(t>>16)+(n>>16)<<16|65535&n}function c(r,t){return r<<t|r>>>32-t}var h=0;r.MD5=t}(window),function(){var i;i={size:"s","default":"d",rating:"r"},window.Gravtastic=function(r,t){var n,e,a,o,u;for(e in null==t&&(t={}),n=MD5(r.toString().toLowerCase()),a={},o=Gravtastic.defaults)u=o[e],a[e]=u;for(e in t)u=t[e],a[e]=u;return(a.secure?"https://secure.gravatar.com/avatar":"http://gravatar.com/avatar")+("/"+n+"."+(a.filetype||"png"))+("?"+function(){var r;for(e in r=[],a)u=a[e],"secure"!==e&&"filetype"!==e&&r.push((i[e]||e)+"="+u);return r}().join("&"))},window.Gravtastic.defaults={rating:"PG",secure:!0,filetype:"png"}}.call(this);