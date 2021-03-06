import { unpackAttrs, getStyle, styleDurationToMs } from "polythene-core";
import { easing } from "polythene-utilities";
import classes from "polythene-css-classes/material-design-progress-spinner";

const percentageValue = (min, max, percentage = 0) => min + ((max - min) * percentage);

const rotateCircle = (el, min, max, percentage) => {
  const style = el.style;
  style["transform"] =
    style["-webkit-transform"] =
    style["-moz-transform"] =
    style["-ms-transform"] =
    style["-o-transform"] = "rotate(" + percentageValue(min, max, percentage) + "deg)";
};

const animate = (stateEl, size, percentage) => {
  const animationEl = stateEl.querySelector("." + classes.animation);
  const animationElStyle = animationEl.style;
  if (percentage < 0.5) {
    animationElStyle.clip = "rect(0px, " + size + "px, " + size + "px, " + size / 2 + "px)";
  } else {
    animationElStyle.clip = "rect(auto, auto, auto, auto)";
  }
  const leftCircle = stateEl.querySelector("." + classes.circleLeft);
  const rightCircle = stateEl.querySelector("." + classes.circleRight);
  leftCircle.style.clip = rightCircle.style.clip = "rect(0px, " + size / 2 + "px, " + size + "px, " + "0px)";
  rotateCircle(rightCircle, 0, 180, Math.min(1, percentage * 2));
  rotateCircle(leftCircle, 0, 360, percentage);
};

const updateWithPercentage = ({ state, attrs, size }) => {
  if (!state.dom) {
    return;
  }
  if (state.animating()) {
    return;
  }
  if (attrs.percentage === undefined) {
    return;
  }
  const percentage = unpackAttrs(attrs.percentage);
  const previousPercentage = state.percentage();
  const easingFn = attrs.animated
    ? easing.easeInOutQuad
    : v => v;
  if (attrs.animated && previousPercentage !== percentage) {
    const el = state.dom;
    const animationDuration = attrs.updateDuration !== undefined
      ? attrs.updateDuration * 1000
      : styleDurationToMs(getStyle({ element: el.querySelector(`.${classes.animation}`), prop: "animation-duration" }));
    let start = null;
    const step = timestamp => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const stepPercentage = 1.0 / animationDuration * progress;
      const newPercentage = previousPercentage + stepPercentage * (percentage - previousPercentage);
      animate(el, size, easingFn(newPercentage));
      if (start && progress < animationDuration) {
        window.requestAnimationFrame(step);
      } else {
        start = null;
        state.percentage(percentage);
        state.animating(false);
      }
    };
    state.animating(true);
    window.requestAnimationFrame(step);
  } else {
    animate(state.dom, size, easingFn(percentage));
    state.percentage(percentage);
  }
};

const getSize = element => 
  Math.round(
    element
      ? parseFloat(getStyle({ element, prop: "height" })) - 2 * parseFloat(getStyle({ element, prop: "padding" }))
      : 0
  );

export const getInitialState = (vnode, createStream) => {
  const percentage = createStream(0);
  const animating = createStream(false);
  return {
    animating,
    dom: undefined,
    percentage,
    redrawOnUpdate: createStream.merge([animating])
  };
};

export const onMount = vnode => {
  if (!vnode.dom) {
    return;
  }
  const state = vnode.state;
  const attrs = vnode.attrs;
  state.dom = vnode.dom;
  const size = getSize(state.dom);
  updateWithPercentage({ state, attrs, size });
};

export const createProps = (vnode, { renderer: h }) => {
  const state = vnode.state;
  const attrs = vnode.attrs;
  const size = getSize(state.dom);
  updateWithPercentage({ state, attrs, size });

  const content = h("div",
    {
      key: "content",
      className: classes.animation,
      style: {
        width: size + "px",
        height: size + "px"
      }
    },
    [
      h("div", {
        key: "left",
        className: [classes.circle, classes.circleLeft].join(" ")
      }),
      h("div", {
        key: "right",
        className: [classes.circle, classes.circleRight].join(" ")
      })
    ]
  );

  return Object.assign(
    {},
    attrs,
    {
      className: [classes.component, attrs.className].join(" "),
      content
    }
  );
};
