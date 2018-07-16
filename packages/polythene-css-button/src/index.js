import baseLayout from "./base";
import classes from "polythene-css-classes/button";
import color from "./color";
import layout from "./layout";
import vars from "./vars";
import { styler } from "polythene-core-css";

const fns = [layout, color];
const baseFns = [baseLayout];
const selector = `.${classes.component.replace(/ /g, ".")}`;

const addStyle = (customSelector, customVars, { mediaQuery }={}) => {
  customSelector && styler.addStyle({
    selectors: [customSelector],
    fns: baseFns,
    vars,
    customVars,
    mediaQuery,
  });
  customSelector && styler.addStyle({
    selectors: [customSelector, selector],
    fns,
    vars,
    customVars,
    mediaQuery,
  });
};

const getStyle = (customSelector = "", customVars, { mediaQuery }={}) => 
  styler.getStyle({
    selectors: [customSelector],
    fns: baseFns,
    vars,
    customVars,
    mediaQuery,
  }).concat(styler.getStyle({
    selectors: [customSelector, selector],
    fns,
    vars,
    customVars,
    mediaQuery,
  }));

styler.addStyle({
  selectors: [selector],
  fns,
  vars
});

export {
  addStyle,
  color,
  getStyle,
  layout,
  vars,
};
