!function(f,O,b){"use strict";(f.tablesorter||{}).storage=function(e,t,r,o){var a,s,i,n=!1,g={},p=(e=f(e)[0]).config,l=p&&p.widgetOptions,u=o&&o.useSessionStorage||l&&l.storage_useSessionStorage?"sessionStorage":"localStorage",d=f(e),S=o&&o.id||d.attr(o&&o.group||l&&l.storage_group||"data-table-group")||l&&l.storage_tableId||e.id||f(".tablesorter").index(d),c=o&&o.url||d.attr(o&&o.page||l&&l.storage_page||"data-table-page")||l&&l.storage_fixedUrl||p&&p.fixedUrl||O.location.pathname;if(u in O)try{O[u].setItem("_tmptest","temp"),n=!0,O[u].removeItem("_tmptest")}catch(m){p&&p.debug&&console.warn(u+" is not supported in this browser")}return f.parseJSON&&(n?g=f.parseJSON(O[u][t]||"null")||{}:(s=b.cookie.split(/[;\s|=]/),g=0!==(a=f.inArray(t,s)+1)&&f.parseJSON(s[a]||"null")||{})),(r||""===r)&&O.JSON&&JSON.hasOwnProperty("stringify")?(g[c]||(g[c]={}),g[c][S]=r,void(n?O[u][t]=JSON.stringify(g):((i=new Date).setTime(i.getTime()+31536e6),b.cookie=t+"="+JSON.stringify(g).replace(/\"/g,'"')+"; expires="+i.toGMTString()+"; path=/"))):g&&g[c]?g[c][S]:""}}(jQuery,window,document);