!function(){var n={},e=function(e){for(var t=n[e],o=t.deps,i=t.defn,r=o.length,d=new Array(r),c=0;c<r;++c)d[c]=a(o[c]);var u=i.apply(null,d);if(void 0===u)throw"module ["+e+"] returned undefined";t.instance=u},t=function(e,t,a){if("string"!=typeof e)throw"module id must be a string";if(void 0===t)throw"no dependencies for "+e;if(void 0===a)throw"no definition function for "+e;n[e]={deps:t,defn:a,instance:void 0}},a=function(t){var a=n[t];if(void 0===a)throw"module ["+t+"] was undefined";return void 0===a.instance&&e(t),a.instance},o=function(n,e){for(var t=n.length,o=new Array(t),i=0;i<t;++i)o.push(a(n[i]));e.apply(null,e)},i={};i.bolt={module:{api:{define:t,require:o,demand:a}}};var r=t,d=function(n,e){r(n,[],function(){return e})};d("5",tinymce.util.Tools.resolve),r("1",["5"],function(n){return n("tinymce.PluginManager")}),r("2",["5"],function(n){return n("tinymce.dom.DOMUtils")}),r("3",["5"],function(n){return n("tinymce.EditorManager")}),r("4",["5"],function(n){return n("tinymce.util.Tools")}),r("0",["1","2","3","4"],function(n,e,t,a){return n.add("save",function(n){function o(){var a;if(a=e.DOM.getParent(n.id,"form"),!n.getParam("save_enablewhendirty",!0)||n.isDirty())return t.triggerSave(),n.getParam("save_onsavecallback")?(n.execCallback("save_onsavecallback",n),void n.nodeChanged()):void(a?(n.setDirty(!1),a.onsubmit&&!a.onsubmit()||("function"==typeof a.submit?a.submit():i(n.translate("Error: Form submit field collision."))),n.nodeChanged()):i(n.translate("Error: No form element found.")))}function i(e){n.notificationManager.open({text:e,type:"error"})}function r(){var e=a.trim(n.startContent);return n.getParam("save_oncancelcallback")?void n.execCallback("save_oncancelcallback",n):(n.setContent(e),n.undoManager.clear(),void n.nodeChanged())}function d(){var e=this;n.on("nodeChange dirty",function(){e.disabled(n.getParam("save_enablewhendirty",!0)&&!n.isDirty())})}n.addCommand("mceSave",o),n.addCommand("mceCancel",r),n.addButton("save",{icon:"save",text:"Save",cmd:"mceSave",disabled:!0,onPostRender:d}),n.addButton("cancel",{text:"Cancel",icon:!1,cmd:"mceCancel",disabled:!0,onPostRender:d}),n.addShortcut("Meta+S","","mceSave")}),function(){}}),a("0")()}();