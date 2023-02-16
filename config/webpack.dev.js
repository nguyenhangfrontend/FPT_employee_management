const { merge } = require('webpack-merge')

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const dependencies = require('../package.json').dependencies
const commonConfig = require('./webpack.common')
const devconfig = {
    mode: 'development',
    devServer: {
      port: 3001,
        // watchContentBase: true,
        historyApiFallback: {
           index: '/index.html'
        },
        static: {
           directory: path.join(__dirname, "./")
         },
     },
     plugins:[
      new HtmlWebpackPlugin({
         template: './public/index.html',
      }),
      new InterpolateHtmlPlugin({
         PUBLIC_URL: 'static' 
     })
   ]
}

module.exports = merge(commonConfig, devconfig)