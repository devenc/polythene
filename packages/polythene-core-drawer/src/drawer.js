import classes from "polythene-css-classes/drawer";

// Props to be passed to Dialog
export const createProps = vnode => {
  const attrs = vnode.attrs;
  const isCover = !(attrs.push || attrs.permanent || attrs.mini);
  return Object.assign(
    {},
    {
      fullBleed: true,
      subClassName: [
        classes.component,
        attrs.className,
        isCover ? classes.cover : null,
        attrs.push ? classes.push : null,
        attrs.permanent ? classes.permanent : null,
        attrs.border ? classes.border : null,
        attrs.mini ? classes.mini : null,
        attrs.floating ? classes.floating : null,
        attrs.fixed ? classes.fixed : null,
        attrs.anchor === "end" ? classes.anchorEnd : null,
      ].join(" "),
      inactive: attrs.permanent && !attrs.mini,
      shadowDepth: attrs.shadowDepth !== undefined
        ? attrs.shadowDepth
        : 0,
      // deprecated:
      z: attrs.z !== undefined
        ? attrs.z
        : undefined
    },
    attrs,
    {
      className: null,
    }
  );
};

export const createContent = vnode => vnode.children;
