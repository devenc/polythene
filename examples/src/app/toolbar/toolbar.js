"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _mithril=require("mithril");var _mithril2=_interopRequireDefault(_mithril);var _polytheneToolbarToolbar=require("polythene/toolbar/toolbar");var _polytheneToolbarToolbar2=_interopRequireDefault(_polytheneToolbarToolbar);var _polytheneIconButtonIconButton=require("polythene/icon-button/icon-button");var _polytheneIconButtonIconButton2=_interopRequireDefault(_polytheneIconButtonIconButton);var _appAppNav=require("app/app/nav");var _appAppNav2=_interopRequireDefault(_appAppNav);var _appAppGithub=require("app/app/github");var _appAppGithub2=_interopRequireDefault(_appAppGithub);require("polythene-theme/theme");require("app/app/app.css!");var NAME="Toolbar";var app=undefined,toolbarBlock=undefined,content=undefined,btn=undefined,toolbarRow=undefined;btn=function(group,name){return _mithril2["default"].component(_polytheneIconButtonIconButton2["default"],{icon:{svg:{group:group,name:name}}})};toolbarRow=[btn("navigation","menu"),(0,_mithril2["default"])("span[flex]","Toolbar title lorem ipsum dolor sit amet"),btn("action","search"),btn("action","favorite"),btn("navigation","more-vert")];toolbarBlock={view:function view(ctrl,args){return(0,_mithril2["default"])(".p-block",[(0,_mithril2["default"])(".p-block-header",args.label),_mithril2["default"].component(_polytheneToolbarToolbar2["default"],args.toolbar)])}};content=(0,_mithril2["default"])(".demo-content",[_mithril2["default"].component(toolbarBlock,{label:"Content",toolbar:{content:toolbarRow}}),_mithril2["default"].component(toolbarBlock,{label:"Class dark-theme",toolbar:{"class":"dark-theme",content:toolbarRow}}),_mithril2["default"].component(toolbarBlock,{label:"Tall with elements pinned to the bottom",toolbar:{mode:"tall",bottomBar:toolbarRow}}),_mithril2["default"].component(toolbarBlock,{label:"Medium-tall with label aligns to the bottom",toolbar:{mode:"medium-tall",topBar:toolbarRow,bottomBar:_mithril2["default"].trust('<span flex class="indent">Bottom content</span>')}}),_mithril2["default"].component(toolbarBlock,{label:"Three bars",toolbar:{mode:"tall",topBar:toolbarRow,middleBar:_mithril2["default"].trust('<div flex class="middle indent">label aligns to the middle</div>'),bottomBar:_mithril2["default"].trust('<div class="bottom indent" style="color: #666; font-size: 18px;">some stuffs align to the bottom</div>')}}),_mithril2["default"].component(toolbarBlock,{label:"With loader bar",toolbar:{mode:"tall",topBar:toolbarRow,middleBar:_mithril2["default"].trust('<div flex class="middle indent">element (e.g. progress) fits at the bottom of the toolbar</div>'),bottomBar:_mithril2["default"].trust('<div flex class="bottom fit" style="height: 20px; background-color: #0f9d58;"></div>')}})]);app={};app.view=function(){return[(0,_appAppNav2["default"])(NAME,[content,_appAppGithub2["default"]])]};_mithril2["default"].mount(document.body,app);