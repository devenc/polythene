
const warn = (old, replacement) =>
  console.warn(`${old} is deprecated and will be removed in a later version of Polythene. Use '${replacement}' instead.`); // eslint-disable-line no-console

export const deprecation = (component, { option, newOption, newComponent }) => (
  option && warn(`${component}: option '${option}'`, newOption),
  newComponent && !newOption && warn(`${component}: this component`, newComponent),
  newComponent && newOption && warn(`${component}: this component`, `'${newComponent}' with option '${newOption}'`)
);

export const deprecationForElementAttrs = (component, { attrs, deprecated, keys }) => {
  deprecated.forEach(attr => {
    const attribute = keys[attr] || attr;
    attrs[attribute] !== undefined && deprecation(component, { option: attribute, newOption: `elementAttrs: { ${[attribute]}: ${attrs[attribute]} }` });
  });
};