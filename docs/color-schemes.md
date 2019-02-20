# Master Color Schemes

The color schemes exist as `.json` files under `data/colors.json` and `data/colors-previous.json`.

**`colors.json`**: The latest color values<br />
**`colors-previous.json`**: The previous color values. Kept for integration.

## Updating Hex Values

Adjust the hex codes within the `.json` files to your desired values.

## Adding/Removing Colors and Shades

Be careful when removing colors and shades or adding brand new ones. The entire system relies on the mapping of values like `blue.500`.

Replacing the hex value for `blue.500` is perfectly safe. Removing `blue.500` may result in issues.

## Oh no! I deleted a core color!... (Don't Panic!)

If you remove a core shade, or heck, a core color from the `.json` files, and push your changes to `master`, don't panic! All of the Colorway integrations are version controlled. The changes will only take place, after:

- Version bumping `@helpscout/colorway`
- Releasing the new version of `@helpscout/colorway`
- Version bumping the integration to the new `@helpscout/colorway` version
- Building and releasing the updated integration

---

## Next

Next, let's look into [creating a template](./templates.md).
