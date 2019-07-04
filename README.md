# 🎨 Colorway

[![Build Status](https://travis-ci.org/helpscout/colorway.svg?branch=master)](https://travis-ci.org/helpscout/colorway)
[![npm version](https://badge.fury.io/js/%40helpscout%2Fcolorway.svg)](https://badge.fury.io/js/%40helpscout%2Fcolorway)

> A color management syncing system

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Usage](#usage)
- [find & Closest](#find--closest)
  - [Find](#find)
  - [Closest](#closest)
- [Documentation](#documentation)
- [Integrations](#integrations)
- [See Also](#see-also)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

```
npm install --save-dev @helpscout/colorway
```

## Usage

Run the `colorway` command with the manifest you wish to sync, example:

```
colorway --manifest=hsds-react
```

For a more automated/magical feed, we recommend you add this as a `prestart` or `prebuild` command in your `package.json`:

```
{
  ...
  "colorway": "colorway --manifest=hsds-react",
  "prestart": "colorway",
  ...
}
```

## find & Closest

Run the `colorway` command with `find` or `closest` as argument to:

### Find

Find will retrieve the HEX color code for a given color name. It will only use the HSDS-react manifest

```
colorway find blue.500

// blue.500: #1292EE
```

### Closest

Closest will find the color name from our palette that is the nearest from a given HEX code. It will only use the HSDS-react manifest

```
colorway closest #005500

// green.900: #23633e
```

## Documentation

Check out [our documentation](./docs) to see how you can use and integrate Colorway into your Application/project.

## Integrations

| Application / Project                                                 | Status     |
| --------------------------------------------------------------------- | ---------- |
| [doc-article-styles](https://github.com/helpscout/doc-article-styles) | Integrated |
| [hsds-react](https://github.com/helpscout/hsds-react)                 | Integrated |
| search-autocomplete                                                   | Integrated |
| [seed](https://github.com/helpscout/seed)                             | Integrated |
| hs-app                                                                | Integrated |
| beacon2                                                               | Integrated |
| developer                                                             | --         |
| styleguide                                                            | --         |

## See Also

- [colorway-sketch](https://github.com/helpscout/colorway-sketch)
