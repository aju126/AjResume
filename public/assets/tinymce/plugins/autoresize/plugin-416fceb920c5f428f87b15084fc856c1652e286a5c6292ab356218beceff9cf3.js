!function(){var e={},t=function(t){for(var n=e[t],o=n.deps,r=n.defn,a=o.length,u=new Array(a),d=0;d<a;++d)u[d]=i(o[d]);var s=r.apply(null,u);if(void 0===s)throw"module ["+t+"] returned undefined";n.instance=s},n=function(t,n,i){if("string"!=typeof t)throw"module id must be a string";if(void 0===n)throw"no dependencies for "+t;if(void 0===i)throw"no definition function for "+t;e[t]={deps:n,defn:i,instance:void 0}},i=function(n){var i=e[n];if(void 0===i)throw"module ["+n+"] was undefined";return void 0===i.instance&&t(n),i.instance},o=function(e,t){for(var n=e.length,o=new Array(n),r=0;r<n;++r)o.push(i(e[r]));t.apply(null,t)},r={};r.bolt={module:{api:{define:n,require:o,demand:i}}};var a=n,u=function(e,t){a(e,[],function(){return t})};u("5",tinymce.util.Tools.resolve),a("1",["5"],function(e){return e("tinymce.dom.DOMUtils")}),a("2",["5"],function(e){return e("tinymce.Env")}),a("3",["5"],function(e){return e("tinymce.PluginManager")}),a("4",["5"],function(e){return e("tinymce.util.Delay")}),a("0",["1","2","3","4"],function(e,t,n,i){var o=e.DOM;return n.add("autoresize",function(e){function n(){return e.plugins.fullscreen&&e.plugins.fullscreen.isFullscreen()}function r(i){var a,s,l,f,g,m,c,h,p,y,v,_;if(s=e.getDoc()){if(l=s.body,f=s.documentElement,g=u.autoresize_min_height,!l||i&&"setcontent"===i.type&&i.initial||n())return void(l&&f&&(l.style.overflowY="auto",f.style.overflowY="auto"));c=e.dom.getStyle(l,"margin-top",!0),h=e.dom.getStyle(l,"margin-bottom",!0),p=e.dom.getStyle(l,"padding-top",!0),y=e.dom.getStyle(l,"padding-bottom",!0),v=e.dom.getStyle(l,"border-top-width",!0),_=e.dom.getStyle(l,"border-bottom-width",!0),m=l.offsetHeight+parseInt(c,10)+parseInt(h,10)+parseInt(p,10)+parseInt(y,10)+parseInt(v,10)+parseInt(_,10),(isNaN(m)||m<=0)&&(m=t.ie?l.scrollHeight:t.webkit&&0===l.clientHeight?0:l.offsetHeight),m>u.autoresize_min_height&&(g=m),u.autoresize_max_height&&m>u.autoresize_max_height?(g=u.autoresize_max_height,l.style.overflowY="auto",f.style.overflowY="auto"):(l.style.overflowY="hidden",f.style.overflowY="hidden",l.scrollTop=0),g!==d&&(a=g-d,o.setStyle(e.iframeElement,"height",g+"px"),d=g,t.webKit&&a<0&&r(i))}}function a(t,n,o){i.setEditorTimeout(e,function(){r({}),t--?a(t,n,o):o&&o()},n)}var u=e.settings,d=0;e.settings.inline||(u.autoresize_min_height=parseInt(e.getParam("autoresize_min_height",e.getElement().offsetHeight),10),u.autoresize_max_height=parseInt(e.getParam("autoresize_max_height",0),10),e.on("init",function(){var t,n;t=e.getParam("autoresize_overflow_padding",1),n=e.getParam("autoresize_bottom_margin",50),t!==!1&&e.dom.setStyles(e.getBody(),{paddingLeft:t,paddingRight:t}),n!==!1&&e.dom.setStyles(e.getBody(),{paddingBottom:n})}),e.on("nodechange setcontent keyup FullscreenStateChanged",r),e.getParam("autoresize_on_init",!0)&&e.on("init",function(){a(20,100,function(){a(5,1e3)})}),e.addCommand("mceAutoResize",r))}),function(){}}),i("0")()}();