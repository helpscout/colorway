# 🎨 Colorway

> A color management syncing system

## Installation

```
npm install --save-dev @helpscout/colorway
```

## Usage

Run the `colorway` command with the module you wish to sync, example:

```
colorway --module=hsds-react
```

For a more automated/magical feed, we recommend you add this as a `prestart` or `prebuild` command in your `package.json`:

```
{
  ...
  "colorway": "colorway --module=hsds-react",
  "prestart": "colorway",
  ...
}
```
