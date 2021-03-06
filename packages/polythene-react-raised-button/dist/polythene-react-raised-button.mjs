import { Button } from 'polythene-react-button';
import { ViewComponent, renderer } from 'polythene-react-base';

var isClient = typeof document !== "undefined";
var isServer = !isClient;

var isTouch = isServer ? false : "ontouchstart" in document.documentElement;

var pointerEndEvent = isTouch ? ["click", "mouseup"] : ["mouseup"];

if (isClient) {
  document.querySelector("html").classList.add(isTouch ? "pe-touch" : "pe-no-touch");
}

var listeners = {};

var emit = function emit(eventName, event) {
  if (!listeners[eventName]) {
    return;
  }
  listeners[eventName].forEach(function (listener) {
    return listener(event);
  });
};

if (isClient) {
  window.addEventListener("resize", function (e) {
    return emit("resize", e);
  });
  window.addEventListener("scroll", function (e) {
    return emit("scroll", e);
  });
  window.addEventListener("keydown", function (e) {
    return emit("keydown", e);
  });
  window.addEventListener(pointerEndEvent, function (e) {
    return emit(pointerEndEvent, e);
  });
}

var deprecation = function deprecation(component, _ref) {
  var option = _ref.option,
      newOption = _ref.newOption,
      newComponent = _ref.newComponent;
  return option && console.warn(component + ": option '" + option + "' is deprecated and will be removed in later versions. Use '" + newOption + "' instead."), newComponent && !newOption && console.warn(component + ": this component is deprecated and will be removed in later versions. Use '" + newComponent + "' instead."), newComponent && newOption && console.warn(component + ": this component is deprecated and will be removed in later versions. Use '" + newComponent + "' with option '" + newOption + "' instead.") // eslint-disable-line no-console
  ;
};

var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var RaisedButton = ViewComponent({
  onMount: function onMount() {
    deprecation("RaisedButton", { newComponent: "Button", newOption: "raised: true" });
  },
  view: function view(vnode) {
    return renderer(Button, _extends$3({}, { raised: true }, vnode.attrs), vnode.children);
  }
});

RaisedButton.displayName = "RaisedButton";

export { RaisedButton };
