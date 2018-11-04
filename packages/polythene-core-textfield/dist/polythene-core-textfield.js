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

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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

    var defaultValue = attrs.defaultValue !== undefined && attrs.defaultValue !== null ? attrs.defaultValue.toString() : attrs.value !== undefined && attrs.value !== null ? attrs.value.toString() : "";

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
    var showErrorPlaceholder = !!(attrs.valid !== undefined || attrs.validate || attrs.min || attrs.max || attrs[k.minlength] || attrs[k.maxlength] || attrs.required || attrs.pattern);

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

  var onMount = function onMount(vnode) {
    if (!vnode.dom) {
      return;
    }
    var dom = vnode.dom;
    var state = vnode.state;
    var attrs = vnode.attrs;

    state.el(dom);
    var inputType = attrs.multiLine ? "textarea" : "input";
    var inputEl = dom.querySelector(inputType);
    vnode.state.inputEl(inputEl);
    state.inputEl().value = state.defaultValue;

    state.setInputState.map(function (_ref2) {
      var vnode = _ref2.vnode,
          type = _ref2.type,
          focus = _ref2.focus,
          value = _ref2.value;

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
    checkValidity(vnode);

    var inputEl = state.inputEl();
    var value = attrs.value !== undefined && attrs.value !== null ? attrs.value : inputEl ? inputEl.value : state.previousValue();
    var valueStr = value === undefined || value === null ? "" : value.toString();

    if (inputEl && state.previousValue() !== valueStr) {
      inputEl.value = valueStr;
      state.previousValue(valueStr);
      state.setInputState({ vnode: vnode, type: "input" });
    }
  };

  var createProps = function createProps(vnode, _ref3) {
    var k = _ref3.keys;

    var state = vnode.state;
    var attrs = vnode.attrs;
    var isInvalid = state.isInvalid();

    return _extends({}, polytheneCore.filterSupportedAttributes(attrs), {
      className: [classes.component, isInvalid ? classes.stateInvalid : "", state.hasFocus() ? classes.stateFocused : "", state.isDirty() ? classes.stateDirty : "", attrs.floatingLabel ? classes.hasFloatingLabel : "", attrs.disabled ? classes.stateDisabled : "", attrs[k.readonly] ? classes.stateReadonly : "", attrs.dense ? classes.isDense : "", attrs.required ? classes.isRequired : "", attrs.fullWidth ? classes.hasFullWidth : "", attrs.counter ? classes.hasCounter : "", attrs.hideSpinner !== false && attrs.hideSpinner !== undefined ? classes.hideSpinner : "", attrs.hideClear !== false && attrs.hideClear !== undefined ? classes.hideClear : "", attrs.hideValidation ? classes.hideValidation : "", attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
    });
  };

  var createContent = function createContent(vnode, _ref4) {
    var h = _ref4.renderer,
        k = _ref4.keys;

    var state = vnode.state;
    var attrs = vnode.attrs;

    var autofocus = attrs[k.autofocus],
        readonly = attrs[k.readonly],
        counter = attrs.counter,
        disabled = attrs.disabled,
        errorAttr = attrs.error,
        events = attrs.events,
        help = attrs.help,
        labelAttr = attrs.label,
        maxlength = attrs.maxlength,
        minlength = attrs.minlength,
        multiLine = attrs.multiLine,
        name = attrs.name,
        optionalIndicatorAttr = attrs.optionalIndicator,
        required = attrs.required,
        requiredIndicatorAttr = attrs.requiredIndicator,
        rowsAttr = attrs.rows,
        tabindex = attrs.tabindex,
        typeAttr = attrs.type,
        className = attrs.className,
        defaultValue = attrs.defaultValue,
        dense = attrs.dense,
        floatingLabel = attrs.floatingLabel,
        focusHelp = attrs.focusHelp,
        fullWidth = attrs.fullWidth,
        hideValidation = attrs.hideValidation,
        onChange = attrs.onChange,
        style = attrs.style,
        tone = attrs.tone,
        valid = attrs.valid,
        validate = attrs.validate,
        validateAtStart = attrs.validateAtStart,
        value = attrs.value,
        rest = _objectWithoutProperties(attrs, [k.autofocus, k.readonly, "counter", "disabled", "error", "events", "help", "label", "maxlength", "minlength", "multiLine", "name", "optionalIndicator", "required", "requiredIndicator", "rows", "tabindex", "type", "className", "defaultValue", "dense", "floatingLabel", "focusHelp", "fullWidth", "hideValidation", "onChange", "style", "tone", "valid", "validate", "validateAtStart", "value"]);

    var inputEl = state.inputEl();
    var error = errorAttr || state.error();
    var isInvalid = state.isInvalid();
    var inputType = multiLine ? "textarea" : "input";
    var type = multiLine ? null : !typeAttr || typeAttr === "submit" || typeAttr === "search" ? "text" : typeAttr;
    var showError = isInvalid && error !== undefined;
    var inactive = disabled || readonly;
    var rows = multiLine ? rowsAttr : null;
    var requiredIndicator = required && requiredIndicatorAttr !== "" ? h("span", {
      key: "required",
      className: classes.requiredIndicator
    }, requiredIndicatorAttr || "*") : null;
    var optionalIndicator = !required && optionalIndicatorAttr ? h("span", {
      key: "optional",
      className: classes.optionalIndicator
    }, optionalIndicatorAttr) : null;
    var label = labelAttr ? [labelAttr, requiredIndicator, optionalIndicator] : null;

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
    }) : null, events ? attrs.events : null, // NOTE: may overwrite oninput
    autofocus !== undefined ? _defineProperty({}, k.autofocus, autofocus) : null, maxlength !== undefined ? _defineProperty({}, k.maxlength, maxlength) : null, minlength !== undefined ? _defineProperty({}, k.minlength, minlength) : null, readonly !== undefined ? _defineProperty({}, k.readonly, true) : null, rows !== undefined ? { rows: rows } : null, tabindex !== undefined ? _defineProperty({}, k.tabindex, tabindex) : null, _extends({}, rest)))]), counter ? h("div", {
      key: "counter",
      className: classes.counter
    }, (inputEl && inputEl.value.length || 0) + " / " + counter) : null, help && !showError ? h("div", {
      key: "help",
      className: [classes.help, attrs.focusHelp ? classes.focusHelp : null].join(" ")
    }, help) : null, showError ? h("div", {
      key: "error",
      className: classes.error
    }, error) : state.showErrorPlaceholder && !help ? h("div", {
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
