import { stateComponent } from "polythene-mithril-base";
import { coreCheckbox as core } from "polythene-core-checkbox";
import { SelectionControl } from "./selection-control";

export const Checkbox = stateComponent(Object.assign(
  {},
  core,
  {
    component: SelectionControl
  }
));

Checkbox.theme = core.theme;
Checkbox.displayName = "Checkbox";
