import React from "react"; // eslint-disable-line no-unused-vars
import { renderer, keys, TextField, Button } from "polythene-react";
import genericTests from "./tests-generic";
import FormValidation from "./components/form-validation-react-jsx";

const reactTests = ({ TextField, Button, renderer: h }) => { // eslint-disable-line no-unused-vars

  const block = (test, attrs = {}) =>
    <div
      style={Object.assign(
        {},
        attrs.dark ? null : { background: "#fff" },
        attrs.fullWidth
          ? null
          : { padding: "10px 15px" }
      )}
    >{test}</div>;

  return [
    {
      section: "React JSX tests",
    },
    {
      name: "Option: value (JSX)",
      component: () =>
        block([
          <TextField
            type="password"
            defaultValue="123456"
            key="a"
          />,
          <TextField
            type="number"
            defaultValue="123456"
            key="b"
          />,
          <TextField
            type="email"
            defaultValue="a@b.com"
            key="c"
          />
        ])
    },
    {
      name: "Option: elementAttrs (maxLength) (JSX)",
      component: () =>
        block(
          <TextField
            defaultValue="123"
            elementAttrs={{
              maxLength: 3
            }}
          />
        )
    },
    {
      name: "Option: counter, floatingLabel (JSX)",
      interactive: true,
      component: () =>
        block([
          <TextField
            label="Description"
            floatingLabel
            counter={15}
            error="You have exceeded the maximum number of characters."
            key="x"
          />
        ])
    },
    {
      name: "Form validation with github.com/ludbek/powerform",
      interactive: true,
      excluded: true,
      component: {
        view: () => block(<FormValidation />)
      }
    },
  ];
};

export default []
  .concat(genericTests({ TextField, Button, renderer, keys }))
  .concat(reactTests({ TextField, Button, renderer, keys }));

