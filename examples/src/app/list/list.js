"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _mithril=require("mithril");var _mithril2=_interopRequireDefault(_mithril);var _polytheneListList=require("polythene/list/list");var _polytheneListList2=_interopRequireDefault(_polytheneListList);var _polytheneListTileListTile=require("polythene/list-tile/list-tile");var _polytheneListTileListTile2=_interopRequireDefault(_polytheneListTileListTile);var _polytheneButtonButton=require("polythene/button/button");var _polytheneButtonButton2=_interopRequireDefault(_polytheneButtonButton);var _appAppNav=require("app/app/nav");var _appAppNav2=_interopRequireDefault(_appAppNav);var _appAppGithub=require("app/app/github");var _appAppGithub2=_interopRequireDefault(_appAppGithub);require("polythene-theme/theme");require("app/app/app.css!");require("./list.css!");var NAME="List";var app=undefined,titleBlock=undefined,exampleTiles=undefined,titleLineText=undefined,infoLineText=undefined,exampleList=undefined,sortableList=undefined,content=undefined;titleLineText="Two-line item";infoLineText="Secondary text";titleBlock={view:function view(ctrl,args){return(0,_mithril2["default"])(".p-block",[(0,_mithril2["default"])(".p-block-header",args.title),args.info?(0,_mithril2["default"])("p",args.info):null,args.content])}};exampleTiles=[_mithril2["default"].component(_polytheneListTileListTile2["default"],{title:titleLineText,subtitle:infoLineText}),_mithril2["default"].component(_polytheneListTileListTile2["default"],{title:titleLineText,subtitle:infoLineText}),_mithril2["default"].component(_polytheneListTileListTile2["default"],{title:titleLineText,subtitle:infoLineText})];exampleList=function(opts){opts=opts||{};return _mithril2["default"].component(_polytheneListList2["default"],{"class":[opts["class"]?opts["class"]:null,"demo-list"].join(" "),mode:opts.mode,hoverable:opts.hoverable,header:{title:"Subheader",indent:opts.indent},tiles:[_mithril2["default"].component(_polytheneListTileListTile2["default"],{title:titleLineText,subtitle:infoLineText,icon:{type:"large","class":"avatar",src:"app/list-tile/avatars/1.png"}}),_mithril2["default"].component(_polytheneListTileListTile2["default"],{title:titleLineText,subtitle:infoLineText,icon:{type:"large","class":"avatar",src:"app/list-tile/avatars/2.png"}}),_mithril2["default"].component(_polytheneListTileListTile2["default"],{title:titleLineText,subtitle:infoLineText,icon:{type:"large","class":"avatar",src:"app/list-tile/avatars/3.png"}})]})};function _ref(item){item.favorite=1-item.favorite}function _ref2(a,b){if(a.name.toLowerCase()<b.name.toLowerCase()){return-1}if(a.name.toLowerCase()>b.name.toLowerCase()){return 1}return 0}function _ref3(a,b){if(a.date<b.date){return-1}if(a.date>b.date){return 1}return 0}sortableList={controller:function controller(){var mode=undefined,now=undefined,items=undefined,pastRange=undefined;mode=_mithril2["default"].prop("name");now=new Date;pastRange=1e3*3600*24*31*6;items=[{name:"John",date:new Date(now-Math.random()*pastRange),favorite:0},{name:"Edward",date:new Date(now-Math.random()*pastRange),favorite:0},{name:"Atilla",date:new Date(now-Math.random()*pastRange),favorite:0},{name:"Bernd",date:new Date(now-Math.random()*pastRange),favorite:0},{name:"George",date:new Date(now-Math.random()*pastRange),favorite:0},{name:"Cedric",date:new Date(now-Math.random()*pastRange),favorite:0}];return{mode:mode,items:items,toggleFavorite:_ref}},view:function view(ctrl){var sortList=undefined,sortByName=undefined,sortByDate=undefined,sortedList=undefined;sortByName=_ref2;sortByDate=_ref3;sortList=function(){return ctrl.mode()==="name"?sortByName:sortByDate};sortedList=ctrl.items.sort(sortList());return(0,_mithril2["default"])(".demo-list.sortable-list",(0,_mithril2["default"])(".controls-row",(0,_mithril2["default"])(".controls[layout][horizontal]",_mithril2["default"].component(_polytheneButtonButton2["default"],{tag:"[flex]",label:"Sort by name",selected:ctrl.mode()==="name",events:{onclick:function onclick(){ctrl.mode("name")}}}),_mithril2["default"].component(_polytheneButtonButton2["default"],{tag:"[flex]",label:"Sort by date",selected:ctrl.mode()==="date",events:{onclick:function onclick(){ctrl.mode("date")}}}))),_mithril2["default"].component(_polytheneListList2["default"],{tiles:sortedList.map(function(item){return _mithril2["default"].component(_polytheneListTileListTile2["default"],{title:item.name,subtitle:item.date.toLocaleDateString(),secondary:{icon:{svg:{name:item.favorite?"star":"star-outline",iconSet:"mdi",preload:[{name:item.favorite?"star-outline":"star",iconSet:"mdi"}]}},events:{onclick:function onclick(e){e.preventDefault();ctrl.toggleFavorite(item)}}},events:{onclick:function onclick(e){e.preventDefault();ctrl.toggleFavorite(item)}}})}),hoverable:true,mode:"bordered"}))}};content=(0,_mithril2["default"])(".demo-content",[_mithril2["default"].component(titleBlock,{title:"Sorting a list",content:sortableList}),_mithril2["default"].component(titleBlock,{title:"No subheader",content:_mithril2["default"].component(_polytheneListList2["default"],{"class":"demo-list",tiles:exampleTiles})}),_mithril2["default"].component(titleBlock,{title:"Hoverable (not on touch device)",content:_mithril2["default"].component(_polytheneListList2["default"],{"class":"demo-list",tiles:exampleTiles,hoverable:true})}),_mithril2["default"].component(titleBlock,{title:"Subheader",content:_mithril2["default"].component(_polytheneListList2["default"],{"class":"demo-list",header:{title:"Subheader"},tiles:exampleTiles})}),_mithril2["default"].component(titleBlock,{title:"Avatars",content:(0,_mithril2["default"])("div",[exampleList(),exampleList()])}),_mithril2["default"].component(titleBlock,{title:"Avatars dark theme",content:(0,_mithril2["default"])(".dark-theme",[exampleList({hoverable:true}),exampleList({hoverable:true})])}),_mithril2["default"].component(titleBlock,{title:"Bordered list items",content:_mithril2["default"].component(_polytheneListList2["default"],{"class":"demo-list",mode:"bordered",header:{title:"Subheader"},tiles:exampleTiles})}),_mithril2["default"].component(titleBlock,{title:"Bordered list items with avatars",content:(0,_mithril2["default"])("div",[exampleList({mode:"bordered"}),exampleList({mode:"bordered"})])}),_mithril2["default"].component(titleBlock,{title:"Indented borders and subheaders",content:(0,_mithril2["default"])("div",[exampleList({mode:"bordered-indent",indent:true}),exampleList({mode:"bordered-indent",indent:true})])})]);app={};app.view=function(){return[(0,_appAppNav2["default"])(NAME,[content,_appAppGithub2["default"]])]};_mithril2["default"].mount(document.body,app);