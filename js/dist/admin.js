module.exports=function(e){var n={};function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(a,r,function(n){return e[n]}.bind(null,r));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=8)}([function(e,n){e.exports=flarum.core.compat.app},function(e,n){e.exports=flarum.core.compat.extend},,,function(e,n){e.exports=flarum.core.compat["components/PermissionGrid"]},function(e,n){e.exports=flarum.core.compat["utils/ItemList"]},function(e,n){e.exports=flarum.core.compat["components/SettingsModal"]},function(e,n){e.exports=flarum.core.compat["components/Switch"]},function(e,n,t){"use strict";t.r(n);var a=t(1),r=t(0),o=t.n(r),i=t(4),s=t.n(i),l=t(5),c=t.n(l);var u=t(6),p=t.n(u),f=t(7),d=t.n(f),y="clarkwinkelmann-email-as-display-name.admin.settings.",v=function(e){var n,t;function a(){return e.apply(this,arguments)||this}t=e,(n=a).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t;var r=a.prototype;return r.title=function(){return o.a.translator.trans(y+"title")},r.form=function(){var e=this;return[m(".Form-group",[d.a.component({state:"1"===this.setting("email-as-display-name.removeUsernameRegistration")(),onchange:function(n){e.setting("email-as-display-name.removeUsernameRegistration")(n?"1":"0")},children:o.a.translator.trans(y+"remove-username-registration")})])]},a}(p.a),w="clarkwinkelmann-email-as-display-name.admin.permissions.";o.a.initializers.add("clarkwinkelmann-email-as-display-name",(function(){o.a.extensionSettings["clarkwinkelmann-email-as-display-name"]=function(){return o.a.modal.show(new v)},Object(a.extend)(s.a.prototype,"permissionItems",(function(e){var n=new c.a;n.add("view-own",{icon:"fas fa-at",label:o.a.translator.trans(w+"view-own"),permission:"email-as-display-name.view-own"}),n.add("view-all",{icon:"fas fa-at",label:o.a.translator.trans(w+"view-all"),permission:"email-as-display-name.view-all",allowGuest:!0}),e.add("clarkwinkelmann-email-as-display-name",{label:o.a.translator.trans(w+"heading"),children:n.toArray()})}))}))}]);
//# sourceMappingURL=admin.js.map