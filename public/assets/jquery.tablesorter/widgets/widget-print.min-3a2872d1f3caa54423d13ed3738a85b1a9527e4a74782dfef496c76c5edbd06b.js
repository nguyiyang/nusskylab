!function(t){"use strict";var e=t.tablesorter,i=e.printTable={event:"printTable",basicStyle:"table, tr, td, th { border : solid 1px black; border-collapse : collapse; } td, th { padding: 2px; }",init:function(t){t.$table.unbind(i.event).bind(i.event,function(){i.process(t,t.widgetOptions)})},process:function(e,n){var r,l=t("<div/>").append(e.$table.clone()),o=i.basicStyle+"table { width: 100% }.tablesorter-filter-row { display: none }.tablesorter-header { background-image: none !important; }";l.find("["+n.print_dataAttrib+"]").each(function(){r=t(this),r.text(r.attr(n.print_dataAttrib))}),/a/i.test(n.print_rows)?o+="tbody tr { display: table-row !important; }":/f/i.test(n.print_rows)&&(o+="tbody tr:not(."+(n.filter_filteredRow||"filtered")+") { display: table-row !important; }"),/s/i.test(n.print_columns)&&e.selector&&e.widgets.indexOf("columnSelector")>=0?o+=n.columnSelector_mediaquery&&e.selector.auto?"":e.selector.$style.text():/a/i.test(n.print_columns)&&(o+="td, th { display: table-cell !important; }"),o+=n.print_extraCSS,t.isFunction(n.print_callback)?n.print_callback(e,l,o):i.printOutput(e,l.html(),o)},printOutput:function(t,e,i){var n=t.widgetOptions,r=window.open("",n.print_title,"width=500,height=300"),l=n.print_title||t.$table.find("caption").text()||t.$table[0].id||document.title||"table";return r.document.write("<html><head><title>"+l+"</title>"+(n.print_styleSheet?'<link rel="stylesheet" href="'+n.print_styleSheet+'">':"")+"<style>"+i+"</style></head><body>"+e+"</body></html>"),r.document.close(),r.print(),r.close(),!0},remove:function(t){t.$table.off(i.event)}};e.addWidget({id:"print",options:{print_title:"",print_dataAttrib:"data-name",print_rows:"filtered",print_columns:"selected",print_extraCSS:"",print_styleSheet:"",print_callback:null},init:function(t,e,n){i.init(n)},remove:function(t,e){i.remove(e)}})}(jQuery);