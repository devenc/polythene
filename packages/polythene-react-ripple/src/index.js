import { stateComponent } from "polythene-react-base";
import { coreRipple as core } from "polythene-core-ripple";

export const Ripple = stateComponent(Object.assign(
  {},
  core
));

Ripple.theme = core.theme;
Ripple.displayName = "Ripple";
