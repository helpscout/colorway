# Updating

Once the [template](./templates.md), [manifest](./manifests.md) have been created and [integrated](./integration.md) within your Application, any color value updates can be managed through version bumping.

## Update flow

Let's pretend `@helpscout/colorway` is currently at version `v1.0.0`.

We want to make an adjustment to `blue.500` to use the hex code of `#ff0000`.

We'll make that adjustment in `@helpscout/colorway`, and create a new build/release for `v1.0.1`.

In order for our application to receive that update, we must update the `@helpscout/colorway` version in our `package.json` from `v1.0.0` to `v1.0.1`.

## Updating a template

Updating a [template](./templates.md) may be slightly trickier compared to updating hex code values within the core `.json` files.

The update flow remains the same (above). However, you need to ensure that the updated [manifest](./manifests.md) generated code will work with your Application.
