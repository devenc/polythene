!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-mithril-base"),require("polythene-core-list"),require("polythene-mithril-list-tile")):"function"==typeof define&&define.amd?define(["exports","polythene-mithril-base","polythene-core-list","polythene-mithril-list-tile"],t):t(e.polythene=e.polythene||{},e["polythene-mithril-base"],e["polythene-core-list"],e["polythene-mithril-list-tile"])}(this,function(e,t,i,r){"use strict";var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},n=t.viewComponent(o({},i.coreList,{createProps:function(e,t){return i.coreList.createProps(e,o(t,{ListTile:r.ListTile}))},createContent:function(e,t){return i.coreList.createContent(e,o(t,{ListTile:r.ListTile}))}}));n.theme=i.coreList.theme,n.displayName="List",e.List=n,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-mithril-list.js.map
