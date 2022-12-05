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

- `npm install -D webpack webpack-cli`
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

- add module code in the webpack.config.js

```
module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: ['@babel/preset-env, @babel/preset-react']
      }
    }],
  },
```

- install @babel/preset-env, @babel/preset-react
  `npm install -D babel-loader @babel/core @babel/preset-env @babel/preset-react`

## 9. Setup webpack plugin to add manifest.json on build directory

- install html webpack plugin `npm install -D html-webpack-plugin`
- add plugin code on webpack config to generate html file on build dir

```
plugins: [new HtmlWebpackPlugin({
  template: './src/popup.html',
  filename: 'popup.html'
})],
```

- install copy webpack plugins for copy-paste inside spesific folder to build dir
  `npm install -D copy-webpack-plugin`
- Add copy plugin code to webpack config

```
new CopyPlugin({
  patterns: [
    { from: "public", to: "dest" }
  ],
}),
```

- run `npm run build` & the `manifest.json` is available
