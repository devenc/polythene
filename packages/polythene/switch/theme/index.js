import styler from '../../common/styler';
import { config as themeConfig } from 'polythene-theme';
import componentConfig from './config';
import layout from './layout';
import color from './color';

var themeConfigFn = themeConfig && themeConfig.switch;
var config = themeConfigFn ? themeConfigFn(componentConfig) : componentConfig;
var id = 'pe-switch';

styler.add(id, layout(config), color(config));