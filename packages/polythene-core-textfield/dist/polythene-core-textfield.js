(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core'], factory) :
  (factory((global.polythene = {}),global['polythene-core']));
}(this, (function (exports,polytheneCore) { 'use strict';

  var classes = {
    component: "pe-textfield",

    // elements
    counter: "pe-textfield__counter",
    error: "pe-textfield__error",
    errorPlaceholder: "pe-textfield__error-placeholder",
    focusHelp: "pe-textfield__help-focus",
    help: "pe-textfield__help",
    input: "pe-textfield__input",
    inputArea: "pe-textfield__input-area",
    label: "pe-textfield__label",
    optionalIndicator: "pe-textfield__optional-indicator",
    requiredIndicator: "pe-textfield__required-indicator",

    // states
    hasCounter: "pe-textfield--counter",
    hasFloatingLabel: "pe-textfield--floating-label",
    hasFullWidth: "pe-textfield--full-width",
    hideClear: "pe-textfield--hide-clear",
    hideSpinner: "pe-textfield--hide-spinner",
    hideValidation: "pe-textfield--hide-validation",
    isDense: "pe-textfield--dense",
    isRequired: "pe-textfield--required",
    stateDirty: "pe-textfield--dirty",
    stateDisabled: "pe-textfield--disabled",
    stateFocused: "pe-textfield--focused",
    stateInvalid: "pe-textfield--invalid",
    stateReadonly: "pe-textfield--readonly"
  };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var deprecated = ["autofocus", "max", "maxlength", "min", "minlength", "name", "pattern", "readonly", "required", "rows", "tabindex", "type", "value"];

  var getElement = function getElement(vnode) {
    return vnode.attrs.element || "div";
  };

  var DEFAULT_VALID_STATE = {
    invalid: false,
    message: undefined
  };

  var validateCustom = function validateCustom(state, attrs) {
    var el = state.inputEl();
    if (!el) {
      return DEFAULT_VALID_STATE;
    }
    var validState = attrs.validate(state.inputEl().value);
    return {
      invalid: validState && !validState.valid,
      message: validState && validState.error
    };
  };

  var validateCounter = function validateCounter(state, attrs) {
    return {
      invalid: state.inputEl().value.length > attrs.counter,
      message: attrs.error
    };
  };

  var validateHTML = function validateHTML(state, attrs) {
    return {
      invalid: !state.inputEl().checkValidity(),
      message: attrs.error
    };
  };

  var getValidStatus = function getValidStatus(state, attrs) {
    var status = DEFAULT_VALID_STATE;

    // attrs.validateResetOnClear: reset validation when field is cleared
    if (state.isTouched() && state.isInvalid() && state.inputEl().value.length === 0 && attrs.validateResetOnClear) {
      state.isTouched(false);
      state.isInvalid(false);
      state.error(undefined);
    }
    if (!status.invalid && attrs.counter) {
      status = validateCounter(state, attrs);
    }
    if (!status.invalid && state.inputEl() && state.inputEl().checkValidity) {
      status = validateHTML(state, attrs);
    }
    if (!status.invalid && attrs.validate) {
      status = validateCustom(state, attrs);
    }
    return status;
  };

  var checkValidity = function checkValidity(vnode) {
    var state = vnode.state;
    var attrs = vnode.attrs;
    // default
    var status = attrs.valid !== undefined ? {
      invalid: !attrs.valid,
      message: attrs.error
    } : !state.isTouched() && !attrs.validateAtStart ? DEFAULT_VALID_STATE : getValidStatus(state, attrs);
    var previousInvalid = state.isInvalid();
    state.error(status.message);
    if (status.invalid !== previousInvalid) {
      state.isInvalid(status.invalid);
    }
    if (!status.invalid) {
      state.error(undefined);
    }
  };

  var notifyState = function notifyState(vnode) {
    var state = vnode.state;
    var attrs = vnode.attrs;
    if (attrs.onChange) {
      var status = getValidStatus(state, attrs);
      attrs.onChange({
        focus: state.hasFocus(),
        dirty: state.isDirty(),
        el: state.inputEl(),
        invalid: status.invalid,
        error: status.error,
        value: state.inputEl().value,
        setInputState: function setInputState(newState) {
          var hasNewValue = newState.value !== undefined && newState.value !== state.inputEl().value;
          var hasNewFocus = newState.focus !== undefined && newState.focus !== state.hasFocus();
          if (hasNewValue || hasNewFocus) {
            state.setInputState(_extends({}, newState, { vnode: vnode }));
          }
        }
      });
    }
  };

  var ignoreEvent = function ignoreEvent(attrs, name) {
    return attrs.ignoreEvents && attrs.ignoreEvents.indexOf(name) !== -1;
  };

  var getInitialState = function getInitialState(vnode, createStream, _ref) {
    var k = _ref.keys;

    var attrs = vnode.attrs;
    var elementAttrs = attrs.elementAttrs || {};
    var value = elementAttrs.value || attrs.value;

    var defaultValue = attrs.defaultValue !== undefined && attrs.defaultValue !== null ? attrs.defaultValue.toString() : value !== undefined && value !== null ? value.toString() : "";

    var el = createStream(null);
    var inputEl = createStream(null);
    var setInputState = createStream({});
    var error = createStream(attrs.error);
    var hasFocus = createStream(false);
    var isTouched = createStream(false); // true when any change is made
    var isDirty = createStream(defaultValue !== ""); // true for any input
    var isInvalid = createStream(false);
    var previousValue = createStream(undefined);
    var didSetFocusTime = 0;
    var showErrorPlaceholder = !!(attrs.valid !== undefined || attrs.validate || elementAttrs.min || attrs.min || elementAttrs.max || attrs.max || elementAttrs[k.minlength] || attrs[k.minlength] || elementAttrs[k.maxlength] || attrs[k.maxlength] || elementAttrs.required || attrs.required || elementAttrs.pattern || attrs.pattern);

    return {
      defaultValue: defaultValue,
      didSetFocusTime: didSetFocusTime,
      el: el,
      error: error,
      hasFocus: hasFocus,
      inputEl: inputEl,
      isDirty: isDirty,
      isInvalid: isInvalid,
      isTouched: isTouched,
      previousValue: previousValue,
      setInputState: setInputState,
      showErrorPlaceholder: showErrorPlaceholder,
      redrawOnUpdate: createStream.merge([inputEl, isInvalid, isDirty])
    };
  };

  var onMount = function onMount(vnode, _ref2) {
    var keys = _ref2.keys;

    if (!vnode.dom) {
      return;
    }
    var dom = vnode.dom;
    var state = vnode.state;
    var attrs = vnode.attrs;

    polytheneCore.deprecationForElementAttrs("TextField", {
      attrs: attrs,
      deprecated: deprecated,
      keys: keys
    });

    state.el(dom);
    var inputType = attrs.multiLine ? "textarea" : "input";
    var inputEl = dom.querySelector(inputType);
    vnode.state.inputEl(inputEl);
    state.inputEl().value = state.defaultValue;

    state.setInputState.map(function (_ref3) {
      var vnode = _ref3.vnode,
          type = _ref3.type,
          focus = _ref3.focus,
          value = _ref3.value;

      if (vnode) {
        value !== undefined ? state.inputEl().value = value : null;
        focus !== undefined && (state.hasFocus(focus), focus ? state.inputEl().focus() : state.inputEl().blur());
        type === "input" && (attrs.validateOnInput || attrs.counter) && state.isTouched(state.inputEl().value !== state.defaultValue);
        type !== "input" && state.isTouched(state.inputEl().value !== state.defaultValue);
        type === "onblur" && state.isTouched(true);
        state.isDirty(state.inputEl().value !== "");
        checkValidity(vnode);
        notifyState(vnode);
        state.previousValue(state.inputEl().value);
      }
    });
    notifyState(vnode);
  };

  var onUpdate = function onUpdate(vnode) {
    var state = vnode.state;
    var attrs = vnode.attrs;
    var elementAttrs = attrs.elementAttrs || {};
    checkValidity(vnode);

    var inputEl = state.inputEl();
    var valueAttr = elementAttrs.value || attrs.value;
    var value = valueAttr !== undefined && valueAttr !== null ? valueAttr : inputEl ? inputEl.value : state.previousValue();
    var valueStr = value === undefined || value === null ? "" : value.toString();

    if (inputEl && state.previousValue() !== valueStr) {
      inputEl.value = valueStr;
      state.previousValue(valueStr);
      state.setInputState({ vnode: vnode, type: "input" });
    }
  };

  var createProps = function createProps(vnode, _ref4) {
    var k = _ref4.keys;

    var state = vnode.state;
    var attrs = vnode.attrs;
    var elementAttrs = attrs.elementAttrs || {};
    var disabled = elementAttrs.disabled || attrs.disabled;
    var readOnly = elementAttrs[k.readonly] || attrs[k.readonly];
    var required = elementAttrs.required || attrs.required;
    var isInvalid = state.isInvalid();

    return _extends({}, polytheneCore.filterSupportedAttributes(attrs), {
      className: [classes.component, attrs.counter ? classes.hasCounter : "", attrs.dense ? classes.isDense : "", attrs.floatingLabel ? classes.hasFloatingLabel : "", attrs.fullWidth ? classes.hasFullWidth : "", attrs.hideClear !== false && attrs.hideClear !== undefined ? classes.hideClear : "", attrs.hideSpinner !== false && attrs.hideSpinner !== undefined ? classes.hideSpinner : "", attrs.hideValidation ? classes.hideValidation : "", disabled ? classes.stateDisabled : "", isInvalid ? classes.stateInvalid : "", readOnly ? classes.stateReadonly : "", required ? classes.isRequired : "", state.hasFocus() ? classes.stateFocused : "", state.isDirty() ? classes.stateDirty : "", attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
    });
  };

  var createContent = function createContent(vnode, _ref5) {
    var h = _ref5.renderer,
        k = _ref5.keys;

    var state = vnode.state;
    var attrs = vnode.attrs;
    var elementAttrs = attrs.elementAttrs || {};
    var typeAttr = elementAttrs.type || attrs.type;
    var disabled = elementAttrs.disabled || attrs.disabled;
    var readOnly = elementAttrs[k.readonly] || attrs[k.readonly];
    var required = elementAttrs.required || attrs.required;
    var name = elementAttrs.name || attrs.name;

    var inputEl = state.inputEl();
    var error = attrs.error || state.error();
    var isInvalid = state.isInvalid();
    var inputType = attrs.multiLine ? "textarea" : "input";
    var type = attrs.multiLine ? null : !typeAttr || typeAttr === "submit" || typeAttr === "search" ? "text" : typeAttr;
    var showError = isInvalid && error !== undefined;
    var inactive = disabled || readOnly;

    var requiredIndicator = required && attrs.requiredIndicator !== "" ? h("span", {
      key: "required",
      className: classes.requiredIndicator
    }, attrs.requiredIndicator || "*") : null;
    var optionalIndicator = !required && attrs.optionalIndicator ? h("span", {
      key: "optional",
      className: classes.optionalIndicator
    }, attrs.optionalIndicator) : null;
    var label = attrs.label ? [attrs.label, requiredIndicator, optionalIndicator] : null;

    return [h("div", {
      className: classes.inputArea,
      key: "input-area"
    }, [label ? h("label", {
      key: "label",
      className: classes.label
    }, label) : null, h(inputType, _extends({}, {
      key: "input",
      className: classes.input,
      disabled: disabled
    }, type ? { type: type } : null, name ? { name: name } : null, !ignoreEvent(attrs, k.onclick) ? _defineProperty({}, k.onclick, function () {
      if (inactive) {
        return;
      }
      // in case the browser does not give the field focus,
      // for instance when the user tapped to the current field off screen
      state.setInputState({ vnode: vnode, focus: true });
      notifyState(vnode);
    }) : null, !ignoreEvent(attrs, k.onfocus) ? _defineProperty({}, k.onfocus, function () {
      if (inactive) {
        return;
      }
      state.setInputState({ vnode: vnode, focus: true });

      // set CSS class manually in case field gets focus but is off screen
      // and no redraw is triggered
      // at the next redraw state.hasFocus() will be read and the focus class be set
      // in the props.class statement
      if (state.el()) {
        state.el().classList.add(classes.stateFocused);
      }
      notifyState(vnode);
    }) : null, !ignoreEvent(attrs, k.onblur) ? _defineProperty({}, k.onblur, function () {
      state.setInputState({ vnode: vnode, type: "onblur", focus: false });
      // same principle as onfocus
      state.el().classList.remove(classes.stateFocused);
    }) : null, !ignoreEvent(attrs, k.oninput) ? _defineProperty({}, k.oninput, function () {
      // default input event
      // may be overwritten by attrs.events
      state.setInputState({ vnode: vnode, type: "input" });
    }) : null, !ignoreEvent(attrs, k.onkeydown) ? _defineProperty({}, k.onkeydown, function (e) {
      if (e.key === "Enter") {
        state.isTouched(true);
      } else if (e.key === "Escape" || e.key === "Esc") {
        state.setInputState({ vnode: vnode, focus: false });
      }
    }) : null, attrs.events ? attrs.events : null, // NOTE: may overwrite oninput
    // deprecated:
    attrs.required !== undefined && !!attrs.required ? { required: true } : null, attrs[k.readonly] !== undefined && !!attrs[k.readonly] ? _defineProperty({}, k.readonly, true) : null, attrs.pattern !== undefined ? { pattern: attrs.pattern } : null, attrs[k.maxlength] !== undefined ? _defineProperty({}, k.maxlength, attrs[k.maxlength]) : null, attrs[k.minlength] !== undefined ? _defineProperty({}, k.minlength, attrs[k.minlength]) : null, attrs.max !== undefined ? { max: attrs.max } : null, attrs.min !== undefined ? { min: attrs.min } : null, attrs[k.autofocus] !== undefined ? _defineProperty({}, k.autofocus, attrs[k.autofocus]) : null, attrs[k.tabindex] !== undefined ? _defineProperty({}, k.tabindex, attrs[k.tabindex]) : null, attrs.rows !== undefined ? { rows: attrs.rows } : null,
    // use instead:
    attrs.elementAttrs))]), attrs.counter ? h("div", {
      key: "counter",
      className: classes.counter
    }, (inputEl && inputEl.value.length || 0) + " / " + attrs.counter) : null, attrs.help && !showError ? h("div", {
      key: "help",
      className: [classes.help, attrs.focusHelp ? classes.focusHelp : null].join(" ")
    }, attrs.help) : null, showError ? h("div", {
      key: "error",
      className: classes.error
    }, error) : state.showErrorPlaceholder && !attrs.help ? h("div", {
      key: "error-placeholder",
      className: classes.errorPlaceholder
    }) : null];
  };

  var textfield = /*#__PURE__*/Object.freeze({
    getElement: getElement,
    getInitialState: getInitialState,
    onMount: onMount,
    onUpdate: onUpdate,
    createProps: createProps,
    createContent: createContent
  });

  exports.coreTextField = textfield;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core-textfield.js.map
