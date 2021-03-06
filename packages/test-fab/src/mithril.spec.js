import { runSnapshots } from "../../../scripts/tests/mithril-snapshots";
import { renderer, keys, FAB } from "polythene-mithril";
import specTests from "./spec-tests.js";
import mithrilTests from "./tests-mithril.js";

runSnapshots({
  tests: specTests({ FAB, renderer, keys }).concat(mithrilTests),
  renderer
});
