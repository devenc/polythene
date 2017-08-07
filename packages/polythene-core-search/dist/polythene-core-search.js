!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core"),require("polythene-core-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core","polythene-core-css","polythene-theme"],t):t(e.polythene={},e["polythene-core"],e["polythene-core-css"],e["polythene-theme"])}(this,function(e,t,n,i){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o={component:"pe-search",content:"pe-search__content",searchFullWidth:"pe-search--full-width",searchInset:"pe-search--inset"},a={font_size_input:20,line_height_input:20,inset_height:48,inset_input_indent:16,inset_side_padding:0,inset_input_right_padding:0,inset_border_radius:i.vars.unit_block_border_radius,full_width_height:56,full_width_side_margin:0,full_width_side_padding:8,full_width_input_right_padding:0,full_width_border_radius:0,color_light_label_text:n.rgba(i.vars.color_light_foreground,i.vars.blend_light_text_disabled),color_light_input_text:n.rgba(i.vars.color_light_foreground,i.vars.blend_light_text_primary),color_light_background:n.rgba(i.vars.color_light_background),color_dark_label_text:n.rgba(i.vars.color_dark_foreground,i.vars.blend_dark_text_disabled),color_dark_input_text:n.rgba(i.vars.color_dark_foreground,i.vars.blend_dark_text_primary),color_dark_background:n.rgba(i.vars.color_dark_background)},_=function(e,t){var l=(t.inset_height-t.line_height_input)/2,o=(t.full_width_height-t.line_height_input)/2,a=i.vars.unit_indent-t.full_width_side_padding-i.vars.grid_unit_icon_button;return[r({},e,[n.flex.flex(),{position:"relative"," .pe-textfield":[n.flex.flex(),{alignItems:"center",padding:0,position:"relative",zIndex:1," .pe-textfield__input-area":{padding:0,":after":{display:"none"}}," .pe-textfield__input, .pe-textfield__label":{fontSize:t.font_size_input+"px",lineHeight:t.line_height_input+"px"}," .pe-textfield__input":{border:"none"}," .pe-textfield__label":{top:0,bottom:0}}]," .pe-search__content":{"&, .pe-textfield":n.flex.layoutHorizontal,"&, .pe-textfield__input-area":{flexGrow:1}}," .pe-search__content > *":[n.flex.layoutVertical,n.flex.selfCenter],".pe-search--inset":{"border-radius":t.inset_border_radius+"px",padding:"0 "+t.inset_side_padding+"px","&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label":{padding:0,height:t.inset_height+"px"}," .pe-textfield__input, .pe-textfield__label":{paddingTop:l+"px",paddingBottom:l+"px",paddingLeft:t.inset_input_indent+"px",paddingRight:t.inset_input_right_padding+"px"}},".pe-search--full-width":{borderRadius:t.full_width_border_radius+"px",padding:"0 "+t.full_width_side_padding+"px","&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label":{height:t.full_width_height+"px"}," .pe-textfield__input, .pe-textfield__label":{paddingTop:o+"px",paddingBottom:o+"px",paddingLeft:a+"px",paddingRight:t.full_width_input_right_padding+"px"}}}])]},d=function(e,t,n,i){return[l({},e.map(function(e){return e+t}).join(","),{backgroundColor:n["color_"+i+"_background"]," .pe-textfield":{" .pe-textfield__label":{color:n["color_"+i+"_label_text"]}," .pe-textfield__input":{color:n["color_"+i+"_input_text"]}," .pe-textfield__input-area":{backgroundColor:"transparent"}}})]},p=function(e,t){return[d([".pe-dark-tone",".pe-dark-tone "],e,t,"dark"),d(["",".pe-light-tone",".pe-light-tone "],e,t,"light")]},u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s=[_,p],c="."+o.component,f=function(e,t){return n.styler.generateStyles([e,c],u({},a,t),s)};n.styler.generateStyles([c],a,s);var h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},g=function(e){return e.attrs.element||"div"},x=f,b=function(e){return e.focus&&e.dirty?"focus_dirty":e.focus?"focus":e.dirty?"dirty":"none"},y=function(e,t){return{searchState:t({})}},v=function(e,n){var i=n.keys,r=e.attrs;return h({},t.filterSupportedAttributes(r),{className:[o.component,r.fullWidth?o.searchFullWidth:o.searchInset,"dark"===r.tone?"pe-dark-tone":null,"light"===r.tone?"pe-light-tone":null,r.className||r[i.class]].join(" ")},r.events)},m=function(e,t){var n=t.renderer,i=t.TextField,r=e.state,l=e.attrs,a=b(r.searchState()),_=(l.buttons||{})[a]||{},d=l.textfield||{};return n("div",{className:o.content},[_.before,n(i,h({},d,{key:"input",onChange:function(e){r.searchState(e),d.onChange&&d.onChange(e)}})),_.after])},k=Object.freeze({getElement:g,theme:x,getInitialState:y,createProps:v,createContent:m});e.coreSearch=k,e.classes=o,e.vars=a,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-search.js.map