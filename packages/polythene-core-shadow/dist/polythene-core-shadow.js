!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core"),require("polythene-core-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core","polythene-core-css","polythene-theme"],t):t(e.polythene=e.polythene||{},e["polythene-core"],e["polythene-core-css"],e["polythene-theme"])}(this,function(e,t,o,n){"use strict";function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var r={component:"pe-shadow",bottomShadow:"pe-shadow__bottom",topShadow:"pe-shadow__top",animated:"pe-shadow--animated",depth_n:"pe-shadow--z-"},p={transition:"box-shadow "+n.vars.animation_duration+" ease-out","shadow-top-z-1":"initial","shadow-bottom-z-1":"0 1px 4px 0 rgba(0, 0, 0, 0.37)","shadow-top-z-2":"0 2px 2px 0 rgba(0, 0, 0, 0.2)","shadow-bottom-z-2":"0 6px 10px 0 rgba(0, 0, 0, 0.3)","shadow-top-z-3":"0 11px 7px 0 rgba(0, 0, 0, 0.19)","shadow-bottom-z-3":"0 13px 25px 0 rgba(0, 0, 0, 0.3)","shadow-top-z-4":"0 14px 12px 0 rgba(0, 0, 0, 0.17)","shadow-bottom-z-4":"0 20px 40px 0 rgba(0, 0, 0, 0.3)","shadow-top-z-5":"0 17px 17px 0 rgba(0, 0, 0, 0.15)","shadow-bottom-z-5":"0 27px 55px 0 rgba(0, 0, 0, 0.3)","shadow-down-z-1":"inset 0px 1px 2px -1px rgba(0, 0, 0, 0.15)","shadow-down-z-2":"inset 0px 4px 6px -3px rgba(0, 0, 0, 0.25)"},s=function(e){return{boxShadow:e}},i=function(e,t){return[a({},e,[o.mixin.fit(),{borderRadius:"inherit",pointerEvents:"none"," .pe-shadow__bottom, .pe-shadow__top":[o.mixin.fit(),{borderRadius:"inherit"}],".pe-shadow--animated":{" .pe-shadow__bottom, .pe-shadow__top":{transition:t.transition}}},[1,2,3,4,5].map(function(e){var o;return o={},a(o," .pe-shadow__top.pe-shadow--z-"+e,s(t["shadow-top-z-"+e])),a(o," .pe-shadow__bottom.pe-shadow--z-"+e,s(t["shadow-bottom-z-"+e])),o})])]},d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},h=[i],c="."+r.component,b=function(e,t){return o.styler.generateStyles([e,c],d({},p,t),h)};o.styler.generateStyles([c],p,h);var w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},l=b,m=function(e,o){var n=o.keys,a=e.attrs;return w({},t.filterSupportedAttributes(a),{className:[r.component,a.animated&&r.animated,a.className||a[n.class]].join(" ")})},u=function(e,t){var o=t.renderer,n=e.attrs,a=n.content?n.content:n.children||e.children,p=""+r.depth_n+Math.min(5,void 0!==n.z?n.z:1);return[a,o("div",{key:"bottom",className:[r.bottomShadow,p].join(" ")}),o("div",{key:"top",className:[r.topShadow,p].join(" ")})]},x=Object.freeze({element:"div",theme:l,createProps:m,createContent:u});e.coreShadow=x,e.classes=r,e.vars=p,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-shadow.js.map
