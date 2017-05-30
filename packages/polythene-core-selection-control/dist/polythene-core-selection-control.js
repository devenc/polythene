!function(o,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("polythene-core"),require("polythene-theme"),require("polythene-core-css")):"function"==typeof define&&define.amd?define(["exports","polythene-core","polythene-theme","polythene-core-css"],e):e(o.polythene=o.polythene||{},o["polythene-core"],o["polythene-theme"],o["polythene-core-css"])}(this,function(o,e,n,t){"use strict";function r(o,e,n){return e in o?Object.defineProperty(o,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):o[e]=n,o}function l(o,e,n){return e in o?Object.defineProperty(o,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):o[e]=n,o}function i(o,e,n){return e in o?Object.defineProperty(o,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):o[e]=n,o}function c(o,e,n){return e in o?Object.defineProperty(o,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):o[e]=n,o}var a={component:"pe-control",formLabel:"pe-control__form-label",input:"pe-control__input",label:"pe-control__label",disabled:"pe-control--disabled",inactive:"pe-control--inactive",large:"pe-control--large",medium:"pe-control--medium",off:"pe-control--off",on:"pe-control--on",regular:"pe-control--regular",small:"pe-control--small",box:"pe-control__box",button:"pe-control__button",buttonOff:"pe-control__button--off",buttonOn:"pe-control__button--on"},_=Object.assign||function(o){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(o[t]=n[t])}return o},u=function(o,e){var n=o.attrs,t=void 0!==n.checked?!!n.checked:!!n.defaultChecked||!1,r=e(t),l=e(t),i=function(){var o=void 0!==n.checked?n.checked:r();r(!o),l(!o)},c=void 0!==n.onChange?function(o){return i(),n.onChange({event:o,checked:r(),value:n.value})}:function(){return i()};return{checked:r,onChange:c,redrawOnUpdate:e.merge([l])}},s={small:a.small,regular:a.regular,medium:a.medium,large:a.large},p=function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"regular";return s[o]},d=function(o,e){var n=void 0!==o.checked?o.checked:e.checked(),t=void 0!==o.selectable&&o.selectable(n);return{checked:n,inactive:o.disabled||!t}},f=function(o,n){var t=n.keys,r=o.attrs,l=o.state,i=d(r,l),c=i.checked,u=i.inactive;return _({},e.filterSupportedAttributes(r),{className:[a.component,r.instanceClass,c?a.on:a.off,r.disabled?a.disabled:null,u?a.inactive:null,p(r.size),"dark"===r.tone?"pe-dark-tone":null,"light"===r.tone?"pe-light-tone":null,r.className||r[t.class]].join(" ")},r.events)},b=function(o,e){var n=e.renderer,t=e.keys,l=e.ViewControl,i=o.state,c=o.attrs,u=d(c,i).inactive;return n("label",{className:a.formLabel,key:"label"},[n(l,_({},c,{inactive:u,onChange:i.onChange})),c.label?n("."+a.label,u?null:r({},t.onclick,i.onChange),c.label):null])},g=Object.freeze({element:"div",getInitialState:u,createProps:f,createContent:b}),h=Object.assign||function(o){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(o[t]=n[t])}return o},v="."+a.box,m=function(o,e,n,t){return h({},n[e]?n[e]:{svg:o.trust(n.icons[e])},{className:t},n.icon,n.size?{size:n.size}:null)},y=function(o,e){var n=e.renderer,t=e.keys,r=e.Icon,i=e.IconButton,c=o.attrs;return n(i,h({},{element:"div",className:a.button,content:[{iconType:"iconOn",className:a.buttonOn},{iconType:"iconOff",className:a.buttonOff}].map(function(o){return n(r,m(n,o.iconType,c,o.className))}),disabled:c.disabled,events:l({},t.onclick,c.onChange),inactive:c.inactive},c.iconButton))},k=Object.freeze({element:v,createContent:y}),x=n.vars.rgba,z={label_font_size:2*n.vars.grid_unit_component,label_height:3*n.vars.grid_unit_component,label_padding_before:4*n.vars.grid_unit,label_padding_after:0,button_size:6*n.vars.grid_unit_component,icon_size:3*n.vars.grid_unit_component,animation_duration:n.vars.animation_duration,color_light_on:n.vars.rgba(n.vars.color_primary),color_light_off:x(n.vars.color_light_foreground,n.vars.blend_light_text_secondary),color_light_label:x(n.vars.color_light_foreground,n.vars.blend_light_text_secondary),color_light_disabled:x(n.vars.color_light_foreground,n.vars.blend_light_text_disabled),color_light_thumb_off_focus_opacity:.08,color_light_thumb_on_focus_opacity:.11,color_light_focus_on:x(n.vars.color_primary),color_light_focus_on_opacity:.11,color_light_focus_off:x(n.vars.color_light_foreground),color_light_focus_off_opacity:.07,color_dark_on:n.vars.rgba(n.vars.color_primary),color_dark_off:x(n.vars.color_dark_foreground,n.vars.blend_dark_text_secondary),color_dark_label:x(n.vars.color_dark_foreground,n.vars.blend_dark_text_secondary),color_dark_disabled:x(n.vars.color_dark_foreground,n.vars.blend_dark_text_disabled),color_dark_thumb_off_focus_opacity:.08,color_dark_thumb_on_focus_opacity:.11,color_dark_focus_on:x(n.vars.color_primary),color_dark_focus_on_opacity:.14,color_dark_focus_off:x(n.vars.color_dark_foreground),color_dark_focus_off_opacity:.09},O=function(o,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.vars.unit_icon_size,l=r+o.label_height,i=(l-r)/2;return{" .pe-control__form-label":{height:e+"px"}," .pe-control__box":{width:r+"px",height:r+"px"}," .pe-button__content":{width:l+"px",height:l+"px"," .pe-icon":[t.mixin.fit(i)]}}},C=function(o,e){return[i({},o,{display:"inline-block",boxSizing:"border-box",margin:0,padding:0," .pe-control__form-label":[t.flex.layoutHorizontal,t.flex.layoutCenter,{position:"relative",cursor:"pointer",fontSize:e.label_font_size+"px",lineHeight:e.label_height+"px",margin:0,color:"inherit",":focus":{outline:0}}],".pe-control--inactive":{" .pe-control__form-label":{cursor:"default"}}," .pe-control__box":{position:"relative",display:"inline-block",boxSizing:"border-box",width:e.label_height+"px",height:e.label_height+"px",color:"inherit",":focus":{outline:0}}," .pe-button.pe-control__button":[t.mixin.defaultTransition("opacity",e.animation_duration),{position:"absolute",left:-(e.button_size-e.icon_size)/2+"px",top:-(e.button_size-e.icon_size)/2+"px",zIndex:1}],".pe-control--off":{" .pe-control__button--on":{opacity:0,zIndex:0}," .pe-control__button--off":{opacity:1,zIndex:1}},".pe-control--on":{" .pe-control__button--on":{opacity:1,zIndex:1}," .pe-control__button--off":{opacity:0,zIndex:0}}," .pe-control__label":{paddingLeft:e.label_padding_before+"px",paddingRight:e.label_padding_after+"px"},".pe-control--disabled":{" .pe-control__form-label":{cursor:"auto"}," .pe-control__button":{pointerEvents:"none"}}," .pe-button__content":{" .pe-icon":{position:"absolute"}},".pe-control--small":O(e,n.vars.unit_icon_size_small,n.vars.unit_icon_size_small),".pe-control--regular":O(e,e.label_height,n.vars.unit_icon_size),".pe-control--medium":O(e,n.vars.unit_icon_size_medium,n.vars.unit_icon_size_medium),".pe-control--large":O(e,n.vars.unit_icon_size_large,n.vars.unit_icon_size_large)})]},j=function(o,e,n,t){return[c({},o.map(function(o){return o+e}).join(","),{color:n["color_"+t+"_on"]," .pe-control__label":{color:n["color_"+t+"_label"]}," .pe-control__box":{" .pe-control__button":{color:"inherit"," .pe-control__button--on":{color:n["color_"+t+"_on_icon"]||"inherit"}," .pe-control__button--off":{color:n["color_"+t+"_off_icon"]||n["color_"+t+"_off"]}}},".pe-control--off":{" .pe-button--focus .pe-button__focus":{opacity:n["color_"+t+"_focus_off_opacity"],backgroundColor:n["color_"+t+"_focus_off"]}},".pe-control--on":{" .pe-button--focus .pe-button__focus":{opacity:n["color_"+t+"_focus_on_opacity"],backgroundColor:n["color_"+t+"_focus_on"]}},".pe-control--disabled":{" .pe-control__label":{color:n["color_"+t+"_disabled"]}," .pe-control__box":{" .pe-control__button--on, .pe-control__button--off":{color:n["color_"+t+"_disabled"]}}}})]},w=function(o,e){return[j([".pe-dark-tone",".pe-dark-tone "],o,e,"dark"),j(["",".pe-light-tone",".pe-light-tone "],o,e,"light")]};o.coreSelectionControl=g,o.viewControl=k,o.classes=a,o.vars=z,o.layout=C,o.color=w,Object.defineProperty(o,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-selection-control.js.map
