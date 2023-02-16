const merge = require('webpack-merge')

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const dependencies = require('../package.json').dependencies
const commonConfig = require('./webpack.common')
const productionConfig = {
    mode: 'development',
    devServer: {
        port: 3003,
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

module.exports = merge(commonConfig, productionConfig)