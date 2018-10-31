<div align="center" style="text-align:center;">
<img src="https://raw.githubusercontent.com/kyleoliveiro/scarab-carapace/master/carapace-logo.svg?sanitize=true" width="128">
<h1>Scarab Carapace</h1>
<strong>CSS utility class generator</strong>

Automatically generate CSS from design tokens <br>Breakpoints and states · Highly configurable

_An extension for the [Scarab](https://github.com/kyleoliveiro/scarab-core) Sass ecosystem._

[![npm-beta](https://img.shields.io/npm/v/@scarab/carapace.svg)](https://www.npmjs.com/package/@scarab/carapace)
[![Build Status](https://travis-ci.org/kyleoliveiro/scarab-carapace.svg)](https://travis-ci.org/kyleoliveiro/scarab-carapace.svg) 

---

[💿 Installation](#installation)&ensp;·&ensp;[📚 Documentation](#documentation)&ensp;·&ensp;[⭐️ Features](#features)&ensp;·&ensp;[🍃 Ecosystem](#ecosystem)
<br>
[🎉 Motivation](#motivation)&ensp;·&ensp;[❤️ Contributing](#contributing)&ensp;·&ensp;[📃️ License](#license)
</div>

---

## 💿 Installation
1. Install Scarab Carapace as a dev-dependency (this also installs Scarab Core):

```bash
# With yarn
$ yarn add @scarab/carapace -D

# Or with npm
$ npm install @scarab/carapace --save-dev
```

2. Add `node_modules/` to your Sass [`includePaths`](https://github.com/sass/node-sass#includepaths).

3. Import the following files to configure Carapace and generate CSS classes:

```scss
// Import the Scarab Core library
@import '@scarab/core/_';

// Import your design token config
@import 'your-design-tokens.scss';

// Import the Carapace library
@import '@scarab/carapace/_';

// Import your custom module config (more on this later)
@import 'your-custom-module-config.scss';

// Generate Carapace CSS classes
@import '@scarab/carapace/classes';
```

## 📚 Documentation
Read the API documentation and guides:<br>
[**https://scarab.style/carapace**](https://scarab.style/carapace)

## ⭐️ Features

### 🏭 CSS utility class generator
Carapace generates single purpose CSS utility classes from design tokens defined with Scarab. These are the kinds of classes used in the [Functional CSS (a.k.a. Atomic CSS) methodology](https://css-tricks.com/lets-define-exactly-atomic-css/).

### 📲 Breakpoint-specific classes

### 👆 State-specific classes

### ⚙️ Configurable naming convention

## 🍃 Ecosystem

In addition to the core library, the following packages are available in the Scarab ecosystem:

| Package | Description |
| :-- | :-- |
| [**Scarab Core**](https://github.com/kyleoliveiro/scarab-core.git) | Sass library for rapid stylesheet development |
| [**Scarab CLI** (WIP)](https://github.com/kyleoliveiro/scarab-cli.git) | Command-line tools for the Scarab ecosystem |
| [**Scarab snippets** (WIP)](https://github.com/kyleoliveiro/scarab-snippets.git) | Scarab snippets for your favorite text editors and IDE's |

### ❤️ Contributing
Issues and feature requests and PR's are welcome!

### 📃️ License
Licensed under BSD 3-Clause. Copyright &copy; Kyle Oliveiro 2018.
