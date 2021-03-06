import { ButtonCSS } from "polythene-css";

export default ({ renderer: h, Button }) => {

  ButtonCSS.addStyle(".tests-raised-button-themed-button", {
    color_light_background: "#FF1744",
    color_light_text:       "#fff",
    letter_spacing:         0,
    text_transform:         "initial",
    font_size:              16
  });

  ButtonCSS.addStyle(".tests-raised-button-bordered-button", {
    color_light_background: "#fff",
    color_light_text:       "#673ab7",
    color_light_border:     "#673ab7",
  });

  ButtonCSS.addStyle(".tests-raised-button-hover-button", {
    color_light_hover:            "#fff",
    color_light_hover_background: "#673ab7",
    animation_duration:           "100ms",
  });

  return [
    {
      name: "Option: label",
      component: Button,
      attrs: {
        raised: true,
        label: "Label"
      }
    },
    {
      name: "Option: raised (with option shadowDepth: 2)",
      component: Button,
      attrs: {
        raised: true,
        label: "Raised to 2",
        shadowDepth: 2
      }
    },
    {
      name: "Option: raised (with option shadowDepth: 5)",
      component: Button,
      attrs: {
        raised: true,
        label: "Raised to 5",
        shadowDepth: 5
      }
    },
    {
      name: "Option: wash (true)",
      interactive: true,
      component: Button,
      attrs: {
        raised: true,
        label: "Wash",
        wash: true
      }
    },
    {
      name: "Option: ink (false)",
      interactive: true,
      component: Button,
      attrs: {
        raised: true,
        label: "No ink",
        ink: false
      }
    },
    {
      name: "Option: disabled (true)",
      interactive: true,
      component: Button,
      attrs: {
        raised: true,
        label: "Disabled",
        disabled: true
      }
    },
    {
      name: "Option: animateOnTap (false)",
      interactive: true,
      component: Button,
      attrs: {
        raised: true,
        label: "Don't animate shadow",
        animateOnTap: false
      }
    },
    {
      name: "Option: inactivate (2s)",
      interactive: true,
      component: Button,
      attrs: {
        raised: true,
        label: "Inactivated for 2s",
        inactivate: 2
      }
    },
    {
      name: "Option: selected",
      component: Button,
      attrs: {
        raised: true,
        label: "Selected",
        selected: true
      }
    },
    // {
    //   name: "Option: inactive (false)",
    //   interactive: true,
    //   component: Button,
    //   attrs: {
    //     label: "Not inactive",
    //     inactive: false
    //   }
    // },
    {
      name: "Option: inactive (true)",
      interactive: true,
      component: Button,
      attrs: {
        raised: true,
        label: "Inactive",
        inactive: true
      }
    },
    {
      name: "Button row",
      component: {
        view: () => 
          h(".pe-button-row",
            [
              h(Button, {
                raised: true,
                key: "one", // for React
                label: "One"
              }),
              h(Button, {
                raised: true,
                key: "two", // for React
                label: "Two"
              }),
              h(Button, {
                raised: true,
                key: "three", // for React
                label: "Three"
              })
            ]
          )
      }
    },
    {
      name: "Option: style (colors)",
      component: Button,
      attrs: {
        raised: true,
        label: "Styled",
        style: {
          backgroundColor: "#EF6C00",
          color: "#fff"
        }
      }
    },

    {
      section: "Themed",
    },
    {
      name: "Themed button (color, font size, letter spacing, text transform)",
      component: Button,
      attrs: {
        raised: true,
        label: "Colored button",
        className: "tests-raised-button-themed-button"
      }
    },
    {
      name: "Themed button (border)",
      component: Button,
      attrs: {
        raised: true,
        label: "Bordered button",
        border: true,
        className: "tests-raised-button-bordered-button"
      }
    },
    {
      name: "Themed button (with option disabled)",
      component: Button,
      attrs: {
        raised: true,
        label: "Disabled themed button",
        className: "tests-raised-button-themed-button",
        disabled: true
      }
    },
    {
      name: "Themed button (hover color)",
      component: Button,
      attrs: {
        raised: true,
        label: "Hover button",
        className: "tests-raised-button-hover-button",
      }
    },

    {
      section: "Dark tone",
    },
    {
      name: "Option: label -- dark tone class (should be app's primary color)",
      component: Button,
      className: "pe-dark-tone",
      attrs: {
        raised: true,
        label: "Label"
      }
    },
    {
      name: "Option: disabled -- dark tone class",
      component: Button,
      className: "pe-dark-tone",
      attrs: {
        raised: true,
        label: "Label",
        disabled: true
      }
    },

  ];
};




