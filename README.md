# kdujs-templates-webpack

> A full-featured Webpack setup with hot-reload, lint-on-save, unit testing & css extraction.

> This template is Kdu 2.0 compatible.


# Kdu-cli 3 is here, so this template is now considered deprecated.

This template was the main template for kdu-cli verison 2.*.

Now that we have released a stable version of kdu-cli 3, which incorporates all features that this template offers (and much more), we think that this template doesn't have any significant use for the future, so we won't put much resource in developing it further.

We will try and fix major issues should they arise, but not much more.

Feel free to fork this template if you want to keep it alive.

## Usage

This is a project template for [kdu-cli](https://github.com/khanhduy1407/kdu-cli). **It is recommended to use npm 3+ for a more efficient dependency tree.**

``` bash
$ npm install -g kdu-cli
$ kdu init webpack my-project
$ cd my-project
$ npm install
$ npm run dev
```

This will scaffold the project using the `master` branch. If you wish to use the latest version of the webpack template, do the following instead:

``` bash
$ kdu init webpack#develop my-project
```

:warning: **The develop branch is not considered stable and can contain bugs or not build at all, so use at your own risk.**

The development server will run on port 8080 by default. If that port is already in use on your machine, the next free port will be used.

### Fork It And Make Your Own

You can fork this repo to create your own boilerplate, and use it with `kdu-cli`:

``` bash
kdu init username/repo my-project
```
