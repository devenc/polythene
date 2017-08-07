[Back to Polythene FAB main page](../fab.md)

# FAB: Floating Action Button component for React


## Options

[FAB options](../fab.md)


## Usage

#### With JSX

~~~jsx
import React from "react"
import { FAB } from "polythene-react"

const starsSVG = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/></svg>

<FAB mini icon={{svg: starsSVG}} />
~~~

Instead of passing `icon` as option, the Icon component can be used as child:

~~~jsx
import { FAB, Icon } from "polythene-react"

<FAB mini><Icon svg={starsSVG} />
~~~

or even with Icon and SVG components:

~~~jsx
import { FAB, Icon, SVG } from "polythene-react"

<FAB mini><Icon><SVG>{iconAlarmSVG}</SVG></Icon></FAB>
~~~

#### With hyperscript

~~~javascript
import { renderer as h, FAB } from "polythene-react"

// note the quoted SVG string:
const starsSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>"

h(FAB, {
  mini: true,
  icon: { svg: h.trust(starsSVG) }
})
~~~

### Links

See: [URLs and router links](../../handling-urls.md)


## Appearance

FAB's default colors are:

* Background: the app's primary color; change this by setting the `background-color` style
* Icon color: white; change this by setting the `color` style

### Styling

Below are examples how to change the FAB appearance, either with a theme or with CSS.

You can find more information about theming in [Theming](../theming.md).

#### Themed component

~~~jsx
FAB.theme(".themed-fab", {
  color_light_background: "#2196f3",
  color_dark_background:  "#0097a7",
  color_light:            "#fff",
  color_dark:             "#b2ebf2"
})

<FAB icon={{svg: starsSVG}} className="themed-fab" />
~~~

or with hyperscript:

~~~javascript
h(FAB, {
  icon: { svg: h.trust(starsSVG) },
  className: "themed-svg"
})
~~~

#### CSS

Change CSS using the CSS classes in `polythene-core-fab/src/classes.js`

Class names can be imported with:

~~~javascript
import { classes } from "polythene-core-fab";
~~~

#### Style option

Some style attributes can be set using option `style`. For example:

~~~jsx
<FAB
  icon={{svg: starsSVG}}
  style={{ color: "#ef6c00" }}
/>
~~~

### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set

