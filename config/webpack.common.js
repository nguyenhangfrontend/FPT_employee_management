const path = require('path');

module.exports = {
   entry: './src/index.js',
   output: {
      filename: '[name].[hash].js',
      path: path.resolve(__dirname, "build"),
      publicPath: "http://localhost:3001/",
   },
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
   resolve: {
      extensions: [".js", ".jsx"],
      alias: {
        "@icons": path.resolve(__dirname, "src/assets/icons/"),
      },
    },
   module: {
      rules: [
         {
            test: /\.js|jsx?$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-react', '@babel/preset-env'],
                  plugins: ['@babel/plugin-transform-runtime']
              },
            }
            
         }, {
            test: /\.css|scss?$/,
            use: [
               'style-loader',
               'css-loader',
               'sass-loader'
            ]
         },
         {
            test: /\.(eot|ttf|woff2?|otf|svg|png|gif|ico)$/,
            loader: "file-loader",
            options: {
              name: '[path][name].[ext]',
              outputPath: "public/assets/",
              esModule: false,
              sourceMapFilename: "[name].[hash:8].[ext].map",
              chunkFilename: "[id].[hash:8].[ext]",
            },
          },
          {
            test: /\.(json)$/,
            type: "javascript/auto",
            use: [
              {
                loader: "file-loader",
                options: {
                  name: "[folder]/[name].[ext]",
                  outputPath: "assets/i18n/languages/",
                },
              },
            ],
          },
      ]
   },
   
}