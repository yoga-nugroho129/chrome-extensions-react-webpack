# README

## 1. Init Node Project

`npm init -y`

## 2. Create Project Structure

- public -> static file (img, logo, favicon, manifest.json, etc)
- src -> react component & styles

## 3. Go to Official Doc

- `https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/`
- Copy available `manifest.json` code & paste on manifest.json in `public` folder

## 4. Add action block on manifest.json

- `"default_popup": "popup.html"`

## 5. New popup.html in src

- add id as react target element

## 6. React Setup

- `npm install react react-dom`
- create in src folder `popup.jsx`
- write base app react code

## 7. Webpack Setup `https://webpack.js.org/concepts/`

- `npm install webpack webpack-cli`
- create `webpack.config.js` at root levet
- write webpack code

```
const path = require('path');

module.exports = {
  entry: {
    popup: './src/popup.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
}
```

- create build script on `package.json`
  `"build": "webpack --config webpack.config.js"`

## 8. Setup webpack loaders
