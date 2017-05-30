import { filterSupportedAttributes } from 'polythene-core';
import { vars } from 'polythene-theme';
import { flex, mixin } from 'polythene-core-css';

var classes = {
  component: "pe-control",

  // elements
  formLabel: "pe-control__form-label",
  input: "pe-control__input",
  label: "pe-control__label",

  // states
  disabled: "pe-control--disabled",
  inactive: "pe-control--inactive",
  large: "pe-control--large",
  medium: "pe-control--medium",
  off: "pe-control--off",
  on: "pe-control--on",
  regular: "pe-control--regular",
  small: "pe-control--small",

  // control view elements
  box: "pe-control__box",
  button: "pe-control__button",

  // control view states
  buttonOff: "pe-control__button--off",
  buttonOn: "pe-control__button--on"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Does not export theme
var element = "div";

var getInitialState = function getInitialState(vnode, createStream) {
  var attrs = vnode.attrs;

  var defaultChecked = attrs.checked !== undefined ? !!attrs.checked : !!attrs.defaultChecked || false;

  var checked = createStream(defaultChecked);
  var redrawOnChange = createStream(defaultChecked);

  var toggle = function toggle() {
    var oldChecked = attrs.checked !== undefined ? attrs.checked : checked();
    checked(!oldChecked);
    redrawOnChange(!oldChecked);
  };

  var onChange = attrs.onChange !== undefined ? function (e) {
    return toggle(), attrs.onChange({
      event: e,
      checked: checked(),
      value: attrs.value
    });
  } : function () {
    return toggle();
  };

  return {
    checked: checked,
    onChange: onChange,
    redrawOnUpdate: createStream.merge([redrawOnChange])
  };
};

var sizeClasses = {
  small: classes.small,
  regular: classes.regular,
  medium: classes.medium,
  large: classes.large
};

var classForSize = function classForSize() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "regular";
  return sizeClasses[size];
};

var currentState = function currentState(attrs, state) {
  var checked = attrs.checked !== undefined ? attrs.checked : state.checked();
  var selectable = attrs.selectable !== undefined ? attrs.selectable(checked) : false;
  var inactive = attrs.disabled || !selectable;
  return { checked: checked, inactive: inactive };
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  var state = vnode.state;

  var _currentState = currentState(attrs, state),
      checked = _currentState.checked,
      inactive = _currentState.inactive;

  return _extends({}, filterSupportedAttributes(attrs), {
    className: [classes.component, attrs.instanceClass, // for instance pe-checkbox-control
    checked ? classes.on : classes.off, attrs.disabled ? classes.disabled : null, inactive ? classes.inactive : null, classForSize(attrs.size), attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  }, attrs.events);
};

var createContent = function createContent(vnode, _ref2) {
  var h = _ref2.renderer,
      k = _ref2.keys,
      ViewControl = _ref2.ViewControl;

  var state = vnode.state;
  var attrs = vnode.attrs;

  var _currentState2 = currentState(attrs, state),
      inactive = _currentState2.inactive;

  return h("label", {
    className: classes.formLabel,
    key: "label"
  }, [h(ViewControl, _extends({}, attrs, {
    inactive: inactive,
    onChange: state.onChange
  })), attrs.label ? h("." + classes.label, inactive ? null : _defineProperty({}, k.onclick, state.onChange), attrs.label) : null]);
};

var selectionControl = Object.freeze({
	element: element,
	getInitialState: getInitialState,
	createProps: createProps,
	createContent: createContent
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var element$1 = "." + classes.box;

var createIcon = function createIcon(h, iconType, attrs, className) {
  return (
    // if attrs.iconOn/attrs.iconOff is passed, use that icon options object and ignore size
    // otherwise create a new object
    _extends$1({}, attrs[iconType] ? attrs[iconType] : { svg: h.trust(attrs.icons[iconType]) }, { className: className }, attrs.icon, attrs.size ? { size: attrs.size } : null)
  );
};

var createContent$1 = function createContent(vnode, _ref) {
  var h = _ref.renderer,
      k = _ref.keys,
      Icon = _ref.Icon,
      IconButton = _ref.IconButton;

  var attrs = vnode.attrs;
  return h(IconButton, _extends$1({}, {
    element: "div",
    className: classes.button,
    content: [{ iconType: "iconOn", className: classes.buttonOn }, { iconType: "iconOff", className: classes.buttonOff }].map(function (o) {
      return h(Icon, createIcon(h, o.iconType, attrs, o.className));
    }),
    // ripple: { center: true },
    disabled: attrs.disabled,
    events: _defineProperty$1({}, k.onclick, attrs.onChange),
    inactive: attrs.inactive
  }, attrs.iconButton // for example for hover behaviour
  ));
};

var viewControl = Object.freeze({
	element: element$1,
	createContent: createContent$1
});

var rgba = vars.rgba;

var vars$1 = {
  label_font_size: 2 * vars.grid_unit_component, // 16
  label_height: 3 * vars.grid_unit_component, // 24
  label_padding_before: vars.grid_unit * 4, // 16
  label_padding_after: 0,
  button_size: 6 * vars.grid_unit_component,
  icon_size: 3 * vars.grid_unit_component,
  animation_duration: vars.animation_duration,

  color_light_on: vars.rgba(vars.color_primary),
  color_light_off: rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
  color_light_label: rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
  color_light_disabled: rgba(vars.color_light_foreground, vars.blend_light_text_disabled),
  color_light_thumb_off_focus_opacity: .08,
  color_light_thumb_on_focus_opacity: .11,

  // icon colors may be set in theme; disabled by default
  // color_light_on_icon
  // color_light_off_icon

  color_light_focus_on: rgba(vars.color_primary),
  color_light_focus_on_opacity: .11,
  color_light_focus_off: rgba(vars.color_light_foreground),
  color_light_focus_off_opacity: .07,

  color_dark_on: vars.rgba(vars.color_primary),
  color_dark_off: rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
  color_dark_label: rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
  color_dark_disabled: rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled),
  color_dark_thumb_off_focus_opacity: .08,
  color_dark_thumb_on_focus_opacity: .11,

  // icon color may be set in theme; disabled by default
  // color_dark_on_icon
  // color_dark_off_icon

  color_dark_focus_on: rgba(vars.color_primary), // or '#80cbc4'
  color_dark_focus_on_opacity: .14,
  color_dark_focus_off: rgba(vars.color_dark_foreground),
  color_dark_focus_off_opacity: .09
};

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Returns a style function to be used by checkbox and radio-button

var makeSize = function makeSize(componentVars, height) {
  var iconSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : vars.unit_icon_size;

  var labelSize = iconSize + componentVars.label_height;
  var iconOffset = (labelSize - iconSize) / 2;
  return {
    " .pe-control__form-label": {
      height: height + "px"
    },
    " .pe-control__box": {
      width: iconSize + "px",
      height: iconSize + "px"
    },
    " .pe-button__content": {
      width: labelSize + "px",
      height: labelSize + "px",

      " .pe-icon": [mixin.fit(iconOffset)]
    }
  };
};

var activeButton = function activeButton() {
  return {
    opacity: 1,
    zIndex: 1
  };
};

var inactiveButton = function inactiveButton() {
  return {
    opacity: 0,
    zIndex: 0
  };
};

var layout = (function (selector, componentVars) {
  return [_defineProperty$2({}, selector, {
    display: "inline-block",
    boxSizing: "border-box",
    margin: 0,
    padding: 0,

    " .pe-control__form-label": [flex.layoutHorizontal, flex.layoutCenter, {
      position: "relative",
      cursor: "pointer",
      fontSize: componentVars.label_font_size + "px",
      lineHeight: componentVars.label_height + "px",
      margin: 0,
      color: "inherit",

      ":focus": {
        outline: 0
      }
    }],

    ".pe-control--inactive": {
      " .pe-control__form-label": {
        cursor: "default"
      }
    },

    " .pe-control__box": {
      position: "relative",
      display: "inline-block",
      boxSizing: "border-box",
      width: componentVars.label_height + "px",
      height: componentVars.label_height + "px",
      color: "inherit",

      ":focus": {
        outline: 0
      }
    },

    " .pe-button.pe-control__button": [mixin.defaultTransition("opacity", componentVars.animation_duration), {
      position: "absolute",
      left: -((componentVars.button_size - componentVars.icon_size) / 2) + "px",
      top: -((componentVars.button_size - componentVars.icon_size) / 2) + "px",
      zIndex: 1
    }],

    ".pe-control--off": {
      " .pe-control__button--on": inactiveButton(),
      " .pe-control__button--off": activeButton()
    },

    ".pe-control--on": {
      " .pe-control__button--on": activeButton(),
      " .pe-control__button--off": inactiveButton()
    },

    " .pe-control__label": {
      paddingLeft: componentVars.label_padding_before + "px",
      paddingRight: componentVars.label_padding_after + "px"
    },

    ".pe-control--disabled": {
      " .pe-control__form-label": {
        cursor: "auto"
      },
      " .pe-control__button": {
        pointerEvents: "none"
      }
    },

    " .pe-button__content": {
      " .pe-icon": {
        position: "absolute"
      }
    },

    ".pe-control--small": makeSize(componentVars, vars.unit_icon_size_small, vars.unit_icon_size_small),
    ".pe-control--regular": makeSize(componentVars, componentVars.label_height, vars.unit_icon_size),
    ".pe-control--medium": makeSize(componentVars, vars.unit_icon_size_medium, vars.unit_icon_size_medium),
    ".pe-control--large": makeSize(componentVars, vars.unit_icon_size_large, vars.unit_icon_size_large)
  })];
});

function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Returns a style function to be used by checkbox and radio-button

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$3({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    color: componentVars["color_" + tint + "_on"], // override by specifying "color"

    " .pe-control__label": {
      color: componentVars["color_" + tint + "_label"]
    },
    " .pe-control__box": {
      " .pe-control__button": {
        color: "inherit",

        " .pe-control__button--on": {
          color: componentVars["color_" + tint + "_on_icon"] || "inherit"
        },

        " .pe-control__button--off": {
          color: componentVars["color_" + tint + "_off_icon"] || componentVars["color_" + tint + "_off"]
        }
      }
    },
    ".pe-control--off": {
      " .pe-button--focus .pe-button__focus": {
        opacity: componentVars["color_" + tint + "_focus_off_opacity"],
        backgroundColor: componentVars["color_" + tint + "_focus_off"]
      }
    },
    ".pe-control--on": {
      " .pe-button--focus .pe-button__focus": {
        opacity: componentVars["color_" + tint + "_focus_on_opacity"],
        backgroundColor: componentVars["color_" + tint + "_focus_on"]
      }
    },

    ".pe-control--disabled": {
      " .pe-control__label": {
        color: componentVars["color_" + tint + "_disabled"]
      },
      " .pe-control__box": {
        " .pe-control__button--on, .pe-control__button--off": {
          color: componentVars["color_" + tint + "_disabled"]
        }
      }
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark tone
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light")];
});

export { selectionControl as coreSelectionControl, viewControl, classes, vars$1 as vars, layout, color };
