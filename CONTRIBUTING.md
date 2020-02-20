# Contributing to nativescript-vue-next

If you feel like contributing to this project, that is awesome! This guide should help you get started.

# Pull Request Guidelines

- It's OK to submit PR against the `master` branch
- It's OK to have multiple commits per PR (will be squashed during merge)
- Please describe the changes in every PR, to make it easier to review. (No empty PR descriptions please)

We will re-iterate these guidelines as the project matures.

# Contributing to docs

COMPLETE

# Development setup

You will need Node.js and Yarn installed, as well as NativeScript.

Please make sure you are using Nativescript 6.x

After cloning the repo, run:

```bash
$ cd nativescript-vue-next
$ yarn
$ yarn build runtime
$ cd packages/compiler
$ yarn link
$ cd ../../packages/runtime
$ yarn link
```

# Testing with the sample application

```bash
$ cd apps/test
$ yarn link @nativescript-vue/compiler
$ tns run android  # or
$ tns run ios
```

# Project Structure

- `apps`: Sample {N} applications for testing
- `packages`: Contains `nativescript-vue` specific platform code
  - `compiler`: This is where template compilation logic will go (vue template -> render function)
  - `runtime`: {N} specific Vue backend
- `scripts`: Directory for the custom tooling for managing and building the project

# Troubleshooting

COMPLETE