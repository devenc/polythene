(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-theme')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-theme'], factory) :
  (factory((global.polythene = {}),global['polythene-core-css'],global['polythene-theme']));
}(this, (function (exports,polytheneCoreCss,polytheneTheme) { 'use strict';

  var classes = {
    component: "pe-card",

    // elements
    actions: "pe-card__actions",
    any: "pe-card__any",
    content: "pe-card__content",
    header: "pe-card__header",
    headerTitle: "pe-card__header-title",
    media: "pe-card__media",
    mediaDimmer: "pe-card__media__dimmer",
    overlay: "pe-card__overlay",
    overlayContent: "pe-card__overlay__content",
    primary: "pe-card__primary",
    primaryMedia: "pe-card__primary-media",
    subtitle: "pe-card__subtitle",
    text: "pe-card__text",
    title: "pe-card__title",

    // states
    actionsBorder: "pe-card__actions--border",
    actionsHorizontal: "pe-card__actions--horizontal",
    actionsJustified: "pe-card__actions--justified",
    actionsTight: "pe-card__actions--tight",
    actionsVertical: "pe-card__actions--vertical",
    mediaCropX: "pe-card__media--crop-x",
    mediaCropY: "pe-card__media--crop-y",
    mediaOriginStart: "pe-card__media--origin-start",
    mediaOriginCenter: "pe-card__media--origin-center",
    mediaOriginEnd: "pe-card__media--origin-end",
    mediaLarge: "pe-card__media--large",
    mediaMedium: "pe-card__media--medium",
    mediaRatioLandscape: "pe-card__media--landscape",
    mediaRatioSquare: "pe-card__media--square",
    mediaRegular: "pe-card__media--regular",
    mediaSmall: "pe-card__media--small",
    overlaySheet: "pe-card__overlay--sheet",
    primaryHasMedia: "pe-card__primary--media",
    primaryTight: "pe-card__primary--tight",
    textTight: "pe-card__text--tight"
  };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var generalFns = {
    general_styles: function general_styles(selector) {
      return [];
    } // eslint-disable-line no-unused-vars
  };

  var tintFns = function tintFns(tint) {
    return _defineProperty({}, "color_" + tint + "_main_background", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        backgroundColor: vars["color_" + tint + "_main_background"]
      })];
    });
  };

  var lightTintFns = _extends({}, generalFns, tintFns("light"));
  var darkTintFns = _extends({}, generalFns, tintFns("dark"));

  var color = polytheneCoreCss.createColor({
    varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns }
  });

  var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var generalFns$1 = {
    general_styles: function general_styles(selector) {
      return [];
    } // eslint-disable-line no-unused-vars
  };

  var tintFns$1 = function tintFns(tint) {
    var _ref;

    return _ref = {}, _defineProperty$1(_ref, "color_" + tint + "_title_text", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-card__title": {
          color: vars["color_" + tint + "_title_text"]
        }
      })];
    }), _defineProperty$1(_ref, "color_" + tint + "_subtitle_text", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-card__subtitle": {
          color: vars["color_" + tint + "_subtitle_text"]
        }
      })];
    }), _defineProperty$1(_ref, "color_" + tint + "_text", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-card__text": {
          color: vars["color_" + tint + "_text"]
        }
      })];
    }), _defineProperty$1(_ref, "color_" + tint + "_actions_border", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-card__actions--border": {
          borderTop: "1px solid " + vars["color_" + tint + "_actions_border"]
        }
      })];
    }), _ref;
  };

  var lightTintFns$1 = _extends$1({}, generalFns$1, tintFns$1("light"));
  var darkTintFns$1 = _extends$1({}, generalFns$1, tintFns$1("dark"));

  var contentColor = polytheneCoreCss.createColor({
    varFns: { lightTintFns: lightTintFns$1, darkTintFns: darkTintFns$1 }
  });

  function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var alignSide = function alignSide() {
    return function () {
      return {};
    };
  };
  var alignLeft = alignSide(false);
  var alignRight = alignSide(true);

  var tight_title_padding_bottom_subtitle_line_height_padding_bottom = function tight_title_padding_bottom_subtitle_line_height_padding_bottom(selector, vars) {
    return polytheneCoreCss.sel(selector, {
      " .pe-card__primary": {
        ".pe-card__primary--tight": {
          " .pe-card__title": {
            paddingBottom: vars.tight_title_padding_bottom - vars.subtitle_line_height_padding_bottom + "px"
          }
        }
      }
    });
  };

  var title_padding_v_title_padding_h_subtitle_line_height_padding_bottom = function title_padding_v_title_padding_h_subtitle_line_height_padding_bottom(selector, vars) {
    return polytheneCoreCss.sel(selector, {
      " .pe-card__title": {
        padding: [vars.title_padding_v, vars.title_padding_h, vars.title_padding_v - vars.subtitle_line_height_padding_bottom, vars.title_padding_h].map(function (v) {
          return v + "px";
        }).join(" ")
      }
    });
  };

  var text_padding_v_text_line_height_padding_top = function text_padding_v_text_line_height_padding_top(selector, vars) {
    return polytheneCoreCss.sel(selector, {
      " .pe-card__text": {
        paddingTop: vars.text_padding_v - vars.text_line_height_padding_top + "px"
      }
    });
  };

  var text_padding_bottom_text_line_height_padding_bottom = function text_padding_bottom_text_line_height_padding_bottom(selector, vars) {
    return polytheneCoreCss.sel(selector, {
      " .pe-card__text": {
        "&:last-child": {
          paddingBottom: vars.text_padding_bottom - vars.text_line_height_padding_bottom + "px"
        }
      }
    });
  };

  var tight_text_padding_bottom_text_line_height_padding_bottom = function tight_text_padding_bottom_text_line_height_padding_bottom(selector, vars) {
    return polytheneCoreCss.sel(selector, {
      " .pe-card__text": {
        paddingBottom: vars.tight_text_padding_bottom - vars.text_line_height_padding_bottom + "px",

        ".pe-card__text--tight, &.pe-card__text--tight:last-child": {
          paddingBottom: vars.tight_text_padding_bottom - vars.text_line_height_padding_bottom + "px"
        }
      }
    });
  };

  var varFns = {
    general_styles: function general_styles(selector, vars) {
      return [polytheneCoreCss.sel(selector, [alignLeft(vars), {
        display: "block",
        position: "relative",

        "&, a:link, a:visited": {
          textDecoration: "none"
        },

        // Content

        " .pe-card__content": {
          position: "relative",
          borderRadius: "inherit",
          overflow: "hidden",
          width: "inherit",
          height: "inherit"
        },

        // Media

        " .pe-card__media": {
          position: "relative",
          overflow: "hidden",
          borderTopLeftRadius: "inherit",
          borderTopRightRadius: "inherit",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",

          ".pe-card__media--landscape": {
            paddingBottom: 100 / 16 * 9 + "%"
          },
          ".pe-card__media--square": {
            paddingBottom: "100%"
          },

          ".pe-card__media--crop-x": {
            width: "100%",
            height: "auto",
            display: "block",

            ".pe-card__media--origin-start": {
              backgroundPositionY: "top"
            },
            ".pe-card__media--origin-end": {
              backgroundPositionY: "bottom"
            }
          },
          ".pe-card__media--crop-y": {
            height: "100%",
            width: "auto",
            display: "block",

            ".pe-card__media--origin-start": {
              backgroundPositionX: "left"
            },
            ".pe-card__media--origin-end": {
              backgroundPositionX: "right"
            }
          },
          " img, iframe": [polytheneCoreCss.mixin.fit(), {
            width: "100%",
            height: "100%",
            maxWidth: "none"
          }],
          " img": {
            opacity: 0 /* allows right-click on image */
          },

          " .pe-card__header + .pe-card__media": {
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0
          }
        },

        " .pe-card__primary-media": {
          margin: "16px"
        },

        // Overlay

        " .pe-card__overlay": polytheneCoreCss.mixin.fit(),

        // Dimmer

        " .pe-card__media__dimmer": [polytheneCoreCss.mixin.fit(), {
          zIndex: 1,
          pointerEvents: "all"
        }],

        " .pe-card__overlay__content": {
          position: "absolute",
          bottom: 0,
          top: "auto",
          right: 0,
          left: 0,
          zIndex: 2
        },

        // Header

        " .pe-card__header": {
          " .pe-list-tile__title": {
            fontSize: "14px",
            fontWeight: polytheneTheme.vars.font_weight_normal,
            lineHeight: "20px",
            marginTop: "2px"
          },
          " .pe-list-tile__subtitle": {
            marginTop: "-1px"
          }
        },

        // Primary 

        " .pe-card__primary": [polytheneCoreCss.flex.layoutHorizontal, {
          position: "relative",

          "& + .pe-card__text": {
            marginTop: "-16px"
          }
        }],

        // Title

        " .pe-card__title": [polytheneCoreCss.flex.flex(), {
          fontSize: "24px",
          lineHeight: "29px"
        }],

        // Subtitle

        " .pe-card__subtitle": {
          fontSize: "14px",
          lineHeight: "24px"
        },

        // Actions

        " .pe-card__actions": {
          ".pe-card__actions--tight": {
            minHeight: 0,
            paddingTop: 0,
            paddingBottom: 0,

            ".pe-card__actions--vertical": {
              paddingLeft: 0,
              paddingRight: 0
            }
          },
          ".pe-card__actions--horizontal": {
            minHeight: 36 + 2 * 8 + "px",
            height: 36 + 2 * 8 + "px" // make align-items work on IE 11: https://github.com/philipwalton/flexbugs/issues/231
          },
          ".pe-card__actions--horizontal:not(.pe-card__actions--justified)": [polytheneCoreCss.flex.layoutHorizontal, polytheneCoreCss.flex.layoutCenter, {
            " .pe-button": {
              minWidth: 0
            }
          }],

          ".pe-card__actions--justified": [polytheneCoreCss.flex.layoutJustified],

          ".pe-card__actions--vertical": [polytheneCoreCss.flex.layoutVertical, {
            // nested
            " .pe-card__actions": [{
              minHeight: 0
            }],

            " .pe-button": {
              height: "36px",
              padding: 0
            },
            " .pe-list": {
              padding: 0
            }
          }]
        },

        " .pe-card__primary.pe-card__primary--media + .pe-card__actions": {
          marginTop: "-16px"
        },

        // Text

        " .pe-card__text": {
          fontSize: "14px",
          lineHeight: "24px",

          " .pe-card__actions + &": {
            marginTop: "8px"
          }
        },

        " .pe-card__text, .pe-card__primary": {
          "& + .pe-card__actions:not(:last-child)": {
            // Lift up so that full button area is usable
            position: "relative",
            zIndex: 1
          }
        }
      }, {
        // RTL
        "*[dir=rtl], .pe-rtl ": _defineProperty$2({}, selector, alignRight(vars))
      }])];
    },
    border_radius: function border_radius(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        borderRadius: vars.border_radius + "px",

        " .pe-card__content .pe-card__media": {
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0
        },

        " .pe-card__content .pe-card__media:not(.pe-card__media--square):not(.pe-card__media--landscape)": {
          ":first-child": {
            borderTopLeftRadius: vars.border_radius + "px",
            borderTopRightRadius: vars.border_radius + "px"
          },
          ":last-child": {
            borderBottomLeftRadius: vars.border_radius + "px",
            borderBottomRightRadius: vars.border_radius + "px"
          }
        }
      })];
    },
    image_size_small: function image_size_small(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-card__primary-media": {
          " .pe-card__media--small": {
            width: vars.image_size_small + "px",
            height: vars.image_size_small + "px"
          }
        }
      })];
    },
    image_size_regular: function image_size_regular(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-card__primary-media": {
          " .pe-card__media--regular": {
            width: vars.image_size_regular + "px"
          }
        }
      })];
    },
    image_size_medium: function image_size_medium(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-card__primary-media": {
          " .pe-card__media--medium": {
            width: vars.image_size_medium + "px"
          }
        }
      })];
    },
    image_size_large: function image_size_large(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-card__primary-media": {
          " .pe-card__media--large": {
            width: vars.image_size_large + "px"
          }
        }
      })];
    },
    one_line_height_with_icon: function one_line_height_with_icon(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-card__header": {
          height: vars.one_line_height_with_icon + "px"
        }
      })];
    },
    tight_title_padding_bottom: function tight_title_padding_bottom(selector, vars) {
      return [polytheneCoreCss.sel(selector, {}), tight_title_padding_bottom_subtitle_line_height_padding_bottom(selector, vars)];
    },
    subtitle_line_height_padding_bottom: function subtitle_line_height_padding_bottom(selector, vars) {
      return [polytheneCoreCss.sel(selector, {}), tight_title_padding_bottom_subtitle_line_height_padding_bottom(selector, vars), title_padding_v_title_padding_h_subtitle_line_height_padding_bottom(selector, vars)];
    },
    title_padding_v: function title_padding_v(selector, vars) {
      return [polytheneCoreCss.sel(selector, {}), title_padding_v_title_padding_h_subtitle_line_height_padding_bottom(selector, vars)];
    },
    title_padding_h: function title_padding_h(selector, vars) {
      return [polytheneCoreCss.sel(selector, {}), title_padding_v_title_padding_h_subtitle_line_height_padding_bottom(selector, vars)];
    },
    actions_button_margin_h: function actions_button_margin_h(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-card__actions.pe-card__actions--horizontal": {
          margin: "0 -" + vars.actions_button_margin_h + "px",

          " .pe-button": {
            margin: "0 " + vars.actions_button_margin_h + "px"
          }
        }
      })];
    },
    actions_padding_v: function actions_padding_v(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-card__actions": {
          paddingTop: vars.actions_padding_v + "px",
          paddingBottom: vars.actions_padding_v + "px"
        }
      })];
    },
    actions_padding_h: function actions_padding_h(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-card__actions": {
          paddingRight: vars.actions_padding_h + "px",
          paddingLeft: vars.actions_padding_h + "px"
        }
      })];
    },
    actions_button_margin_v: function actions_button_margin_v(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-card__actions": {
          ".pe-card__actions--vertical": {
            " .pe-button": {
              marginTop: vars.actions_button_margin_v + "px",
              marginBottom: vars.actions_button_margin_v + "px"
            }
          }
        }
      })];
    },
    actions_vertical_padding_v: function actions_vertical_padding_v(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-card__actions": {
          ".pe-card__actions--vertical": {
            ":not(.pe-card__actions--tight)": {
              paddingTop: vars.actions_vertical_padding_v + "px",
              paddingBottom: vars.actions_vertical_padding_v + "px"
            },
            // nested
            " .pe-card__actions": [{
              "&:first-child": {
                marginTop: -vars.actions_vertical_padding_v + "px"
              },
              "&:last-child": {
                marginBottom: -vars.actions_vertical_padding_v + "px"
              }
            }]
          }
        }
      })];
    },
    offset_small_padding_v: function offset_small_padding_v(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-card__text, .pe-card__primary": {
          "& + .pe-card__actions:not(:last-child)": {
            marginTop: -(vars.offset_small_padding_v + 3) + "px"
          }
        }
      })];
    },
    text_padding_h: function text_padding_h(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-card__text": {
          paddingRight: vars.text_padding_h + "px",
          paddingLeft: vars.text_padding_h + "px"
        }
      })];
    },
    text_padding_v: function text_padding_v(selector, vars) {
      return [polytheneCoreCss.sel(selector, {}), text_padding_v_text_line_height_padding_top(selector, vars)];
    },
    text_line_height_padding_top: function text_line_height_padding_top(selector, vars) {
      return [polytheneCoreCss.sel(selector, {}), text_padding_v_text_line_height_padding_top(selector, vars)];
    },
    text_padding_bottom: function text_padding_bottom(selector, vars) {
      return [polytheneCoreCss.sel(selector, {}), text_padding_bottom_text_line_height_padding_bottom(selector, vars)];
    },
    tight_text_padding_bottom: function tight_text_padding_bottom(selector, vars) {
      return [polytheneCoreCss.sel(selector, {}), tight_text_padding_bottom_text_line_height_padding_bottom(selector, vars)];
    },
    text_line_height_padding_bottom: function text_line_height_padding_bottom(selector, vars) {
      return [polytheneCoreCss.sel(selector, {}), text_padding_bottom_text_line_height_padding_bottom(selector, vars), tight_text_padding_bottom_text_line_height_padding_bottom(selector, vars)];
    }
  };

  var layout = polytheneCoreCss.createLayout({ varFns: varFns });

  var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var generalFns$2 = {
    general_styles: function general_styles(selector) {
      return [];
    } // eslint-disable-line no-unused-vars
  };

  var tintFns$2 = function tintFns(tint) {
    return _defineProperty$3({}, "color_" + tint + "_overlay_background", function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-card__overlay__content": {
          backgroundColor: vars["color_" + tint + "_overlay_background"]
        }
      })];
    });
  };

  var lightTintFns$2 = _extends$2({}, generalFns$2, tintFns$2("light"));
  var darkTintFns$2 = _extends$2({}, generalFns$2, tintFns$2("dark"));

  var overlayColor = polytheneCoreCss.createColor({
    varFns: { lightTintFns: lightTintFns$2, darkTintFns: darkTintFns$2 }
  });

  var padding_v = 24;
  var padding_actions_v = 8;
  var actions_button_margin_v = 2;

  var vars = {
    general_styles: true,

    actions_button_margin_h: polytheneTheme.vars.grid_unit,
    actions_button_margin_v: actions_button_margin_v,
    actions_padding_h: 8,
    actions_padding_v: 0,
    actions_vertical_padding_v: padding_actions_v - actions_button_margin_v,
    border_radius: polytheneTheme.vars.unit_block_border_radius,
    icon_element_width: 72 - 4,
    image_size_large: 3 * 80,
    image_size_medium: 2 * 80,
    image_size_regular: 1.4 * 80,
    image_size_small: 1 * 80,
    offset_small_padding_v: padding_v - 16,
    one_line_height_with_icon: 72,
    one_line_padding_v: 8,
    padding_h: 16,
    subtitle_line_height_padding_bottom: 7,
    text_line_height_padding_bottom: 7,
    text_line_height_padding_top: 6,
    text_padding_bottom: 24,
    text_padding_h: 16,
    text_padding_v: 16,
    tight_text_padding_bottom: 16,
    tight_title_padding_bottom: 16,
    title_padding_h: 16,
    title_padding_v: 24,

    color_light_main_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_background),
    color_light_title_text: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_primary),
    color_light_subtitle_text: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_secondary),
    color_light_text: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_regular),
    color_light_actions_border: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_border_light),
    color_light_overlay_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_background, polytheneTheme.vars.blend_light_overlay_background),

    color_dark_main_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_background),
    color_dark_title_text: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_primary),
    color_dark_subtitle_text: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_secondary),
    color_dark_text: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_regular),
    color_dark_actions_border: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_border_light),
    color_dark_overlay_background: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_background, polytheneTheme.vars.blend_dark_overlay_background)
  };

  var selector = "." + classes.component;
  var contentSelector = "." + classes.content;
  var overlaySheetSelector = "." + classes.overlaySheet;
  var overlayContentSelector = "." + classes.overlayContent;

  var baseFns = [layout, color];
  var overlayColorFns = [overlayColor];
  var contentColorFns = [contentColor];

  var addStyle = function addStyle(customSelector, customVars) {
    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        mediaQuery = _ref.mediaQuery;

    customSelector && polytheneCoreCss.styler.addStyle({
      selectors: [customSelector, selector],
      fns: baseFns,
      vars: vars,
      customVars: customVars,
      mediaQuery: mediaQuery
    });
    customSelector && polytheneCoreCss.styler.addStyle({
      selectors: [customSelector, " " + overlaySheetSelector],
      fns: overlayColorFns,
      vars: vars,
      customVars: customVars,
      mediaQuery: mediaQuery
    });
    customSelector && polytheneCoreCss.styler.addStyle({
      selectors: [customSelector, " " + contentSelector],
      fns: contentColorFns,
      vars: vars,
      customVars: customVars,
      mediaQuery: mediaQuery
    });
    customSelector && polytheneCoreCss.styler.addStyle({
      selectors: [customSelector, " " + overlayContentSelector],
      fns: contentColorFns,
      vars: vars,
      customVars: customVars,
      mediaQuery: mediaQuery
    });
  };

  var getStyle = function getStyle() {
    var customSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var customVars = arguments[1];

    var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        mediaQuery = _ref2.mediaQuery;

    return polytheneCoreCss.styler.getStyle({
      selectors: [customSelector, selector],
      fns: baseFns,
      vars: vars,
      customVars: customVars,
      mediaQuery: mediaQuery
    }).concat(polytheneCoreCss.styler.getStyle({
      selectors: [customSelector, customSelector ? " " : "", overlaySheetSelector],
      fns: overlayColorFns,
      vars: vars,
      customVars: customVars,
      mediaQuery: mediaQuery
    })).concat(polytheneCoreCss.styler.getStyle({
      selectors: [customSelector, customSelector ? " " : "", contentSelector],
      fns: contentColorFns,
      vars: vars,
      customVars: customVars,
      mediaQuery: mediaQuery
    })).concat(polytheneCoreCss.styler.getStyle({
      selectors: [customSelector, customSelector ? " " : "", overlayContentSelector],
      fns: contentColorFns,
      vars: vars,
      customVars: customVars,
      mediaQuery: mediaQuery
    }));
  };

  polytheneCoreCss.styler.addStyle({
    selectors: [selector],
    fns: baseFns,
    vars: vars
  });
  polytheneCoreCss.styler.addStyle({
    selectors: [overlaySheetSelector],
    fns: overlayColorFns,
    vars: vars
  });
  polytheneCoreCss.styler.addStyle({
    selectors: [contentSelector],
    fns: contentColorFns,
    vars: vars
  });
  polytheneCoreCss.styler.addStyle({
    selectors: [overlayContentSelector],
    fns: contentColorFns,
    vars: vars
  });

  exports.addStyle = addStyle;
  exports.color = color;
  exports.getStyle = getStyle;
  exports.layout = layout;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-card.js.map
