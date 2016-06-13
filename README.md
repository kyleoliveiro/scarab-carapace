# Carapace

[![npm](https://img.shields.io/npm/v/scarab-carapace.svg)](https://www.npmjs.com/package/scarab-carapace) [![Build Status](https://travis-ci.org/watchtowerdigital/carapace.svg?branch=master)](https://travis-ci.org/watchtowerdigital/carapace) 



## Sass UI framework for rapid prototying

Carapace is an extension of the [Scarab utility framework](https://github.com/watchtowerdigital/scarab.git).

[![Carapace: Sass UI framework for rapid prototying](https://raw.githubusercontent.com/watchtowerdigital/carapace/master/images/carapace-banner.png)](https://watchtowerdigital.github.io/carapace)

## Table of contents
* [**Installation**](#installation)
* [**Features**](#features)
	* [**Scarab framework**](#scarab-framework)
	* [**Object-oriented approach**](#object-oriented-approach)
	* [**Responsive by default**](#responsive-by-default)
	* [**Vertical rythmn**](#vertical-rythmn)
	* [**Automatic typesetting**](#automatic-typesetting)
	* [**Layout & helper classes**](#layout-helper-classes)
	* [**Component inventory**](#component-inventory)
* [**Documentation**](#documentation)
* [**Resources**](#resources)



## Installation

To get started, add Carapace as a dependency in your project via npm:

```
npm install scarab-carapace --save-dev
```

This will download the `scarab-scss` and `scarab-carapace` packages into your project's `node_modules` folder.

At the beginning of your stylesheet, import `scarab.scss` from `scarab-scss` and `carapace.scss` from `scarab-carapace`, like so: 

```scss
// Import Scarab
@import "path/to/node_modules/scarab-scss/scss/scarab";

// Import your custom Scarab/Carapace configuration
@import "path/to/my/config/config.scss";

// Import Carapace
@import "path/to/node_modules/scarab-carapace/scss/carapace";
```

Importing the Scarab framework creates a new global variable, `$SCARAB` in your Sass project. This is where your stylesheet configuration is stored.

For more information on configuring Scarab and Carapace, refer to [Scarab: Configuration](https://github.com/watchtowerdigital/scarab#configuration) and the official Configuration section of Carapace's documentation.



## Features

### Scarab framework
Carapace is an extension of the [Scarab utility framework](https://github.com/watchtowerdigital/scarab.git). Scarab's functions and mixins are compatible with Carapace.

### Object-oriented approach
Designed with an object-oriented approach in mind. Carapace kickstarts your projects and helps you write scalable and maintainable stylesheets.

### Responsive by default
Everything is designed for mobile first. Use breakpoint hooks which are available on some helper and layout classes to fine-tune your interface at different breakpoints.

### Vertical rythmn
Achieve vertical rythmn by default. Use the `bl()` and `type-scale()` functions and mixins to ensure consistent spacings throughout your interface.

### Automatic typesetting
Scarab includes styles to apply a consistent visual heirarchy to typographical elements.

### Layout and helper classes
Included are layout classes which help with rapid prototyping, and helper classes which overwrite specific styles on an element.

### Component inventory
Carapace provides a convenient method for managing the UI "components" for your application.



## Documentation

Documentation is available at [https://watchtowerdigital.github.io/carapace/](https://watchtowerdigital.github.io/carapace/).



## Resources

* [**scarab-snippets**](https://github.com/watchtowerdigital/scarab-snippets.git) — Sublime Text snippets for the Scarab Sass utility framework
