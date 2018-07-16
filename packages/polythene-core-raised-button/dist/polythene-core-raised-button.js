(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core'], factory) :
  (factory((global.polythene = {}),global['polythene-core']));
}(this, (function (exports,polytheneCore) { 'use strict';

  var classes = {
    component: "pe-text-button pe-raised-button"
  };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  // Don't export 'getElement': it will be the wrapped button component (set in polythene-xxx-raised-button)

  var MAX_SHADOW_DEPTH = 5;

  var tapStart = void 0,
      tapEndAll = function tapEndAll() {},
      downButtons = [];

  var animateZ = function animateZ(which, vnode) {
    var shadowDepthBase = vnode.state.shadowDepthBase;
    var increase = vnode.attrs.increase || 1;
    var shadowDepth = vnode.state.shadowDepth();
    var newShadowDepth = which === "down" && shadowDepthBase < MAX_SHADOW_DEPTH ? Math.min(shadowDepthBase + increase, MAX_SHADOW_DEPTH) : which === "up" ? Math.max(shadowDepth - increase, shadowDepthBase) : shadowDepth;
    if (newShadowDepth !== shadowDepth) {
      vnode.state.shadowDepth(newShadowDepth);
    }
  };

  var tapHandler = function tapHandler(which, vnode) {
    if (which === "down") {
      downButtons.push(_extends({}, vnode));
    }
    var animateOnTap = vnode.attrs.animateOnTap !== false ? true : false;
    if (animateOnTap) {
      animateZ(which, vnode);
    }
  };

  var initTapEvents = function initTapEvents(vnode) {
    if (polytheneCore.isServer) return;
    tapStart = function tapStart() {
      return tapHandler("down", vnode);
    };
    tapEndAll = function tapEndAll() {
      downButtons.map(function (buttonVnode) {
        return tapHandler("up", buttonVnode);
      });
      downButtons = [];
    };
    polytheneCore.pointerStartMoveEvent.forEach(function (evt) {
      return vnode.dom.addEventListener(evt, tapStart);
    });
    polytheneCore.pointerEndMoveEvent.forEach(function (evt) {
      return document.addEventListener(evt, tapEndAll);
    });
  };

  var clearTapEvents = function clearTapEvents(vnode) {
    polytheneCore.pointerStartMoveEvent.forEach(function (evt) {
      return vnode.dom.removeEventListener(evt, tapStart);
    });
    polytheneCore.pointerEndMoveEvent.forEach(function (evt) {
      return document.removeEventListener(evt, tapEndAll);
    });
  };

  var getInitialState = function getInitialState(vnode, createStream) {
    var attrs = vnode.attrs;
    var shadowDepthBase = attrs.shadowDepth !== undefined ? attrs.shadowDepth : attrs.z !== undefined // deprecated
    ? attrs.z : 1;
    var shadowDepth = createStream(shadowDepthBase);
    var tapEventsInited = createStream(false);
    return {
      shadowDepthBase: shadowDepthBase,
      shadowDepth: shadowDepth,
      tapEventsInited: tapEventsInited,
      redrawOnUpdate: createStream.merge([shadowDepth])
    };
  };

  var onMount = function onMount(vnode) {
    if (!vnode.dom) {
      return;
    }
    var state = vnode.state;
    var attrs = vnode.attrs;
    if (attrs.z !== undefined) {
      polytheneCore.deprecation("RaisedButton", "z", "shadowDepth");
    }
    if (!state.tapEventsInited()) {
      initTapEvents(vnode);
      state.tapEventsInited(true);
    }
  };

  var onUnMount = function onUnMount(vnode) {
    if (vnode.state.tapEventsInited()) {
      clearTapEvents(vnode);
    }
  };

  var createProps = function createProps(vnode, _ref) {
    var h = _ref.renderer,
        Shadow = _ref.Shadow;

    var attrs = vnode.attrs;
    var state = vnode.state;
    var children = attrs.children || vnode.children || [];
    return _extends({}, {
      subClassName: [classes.component, attrs.className].join(" "),
      animateOnTap: false,
      shadowComponent: h(Shadow, {
        shadowDepth: attrs.disabled ? 0 : state.shadowDepth,
        animated: true
      }),
      wash: attrs.wash !== undefined ? attrs.wash : false,
      children: children
    }, attrs, {
      className: null
    });
  };

  var createContent = function createContent(vnode) {
    return vnode.children;
  };

  var raisedButton = /*#__PURE__*/Object.freeze({
    getInitialState: getInitialState,
    onMount: onMount,
    onUnMount: onUnMount,
    createProps: createProps,
    createContent: createContent
  });

  exports.coreRaisedButton = raisedButton;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core-raised-button.js.map
