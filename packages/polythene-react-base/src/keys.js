
export const keys = {
  autofocus:   "autoFocus",
  class:       "className",
  className:   "className",
  enctype:     "encType",
  formaction:  "formAction",
  maxlength:   "maxLength",
  minlength:   "minLength",
  onblur:      "onBlur",
  onchange:    "onChange",
  onclick:     "onClick",
  onfocus:     "onFocus",
  oninput:     "onInput",
  onkeydown:   "onKeyDown",
  onkeyup:     "onKeyUp",
  onmousedown: "onMouseDown",
  onmouseout:  "onMouseOut",
  onmouseover: "onMouseOver",
  onmouseup:   "onMouseUp",
  onscroll:    "onScroll",
  onsubmit:    "onSubmit",
  readonly:    "readOnly",
  tabindex:    "tabIndex",
};

export const normalizeKey = key => keys[key.toLowerCase()];
