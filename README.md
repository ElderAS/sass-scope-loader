# sass-scope-loader

[![Build Status](https://travis-ci.org/ElderAS/sass-scope-loader.svg?branch=master&style=flat-square)](https://travis-ci.org/ElderAS/sass-scope-loader)
[![npm](https://img.shields.io/npm/dt/sass-scope-loader.svg?style=flat-square)](https://www.npmjs.com/package/sass-scope-loader)
[![npm](https://img.shields.io/npm/v/sass-scope-loader.svg?style=flat-square)](https://www.npmjs.com/package/sass-scope-loader)

Sass loader to scope styles inside selector

This plugin scopes all your styles inside a configurable selector:

```scss
//Before sass-scope-loader
.input {
  //...
}

//After sass-scope-loader width options.selector ".my-plugin"
.my-plugin .input {
  //...
}
```

### Installation

`npm install --save sass-scope-loader`

### Usage

```js
/* webpack.config.js */
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: {
          loader: 'sass-scope-loader',
          options: {
            selector: '.SCOPESELECTOR',
          },
        },
      },
    ],
  },
}
```

## License

[The MIT License](http://opensource.org/licenses/MIT)
Copyright (c) Carsten Jacobsen
