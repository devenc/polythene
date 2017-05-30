import { stateComponent } from "polythene-mithril-base";
import { coreRadioButton as core } from "polythene-core-radio-button";
import { SelectionControl } from "./selection-control";

export const RadioButton = stateComponent(Object.assign(
  {},
  core,
  {
    component: SelectionControl
  }
));

RadioButton.theme = core.theme;
RadioButton.displayName = "RadioButton";
