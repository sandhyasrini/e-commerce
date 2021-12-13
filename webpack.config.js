const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path:path.resolve(__dirname, "build"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/assets", "index.html"),
    }),
    new MiniCssExtractPlugin({
      linkType: "text/css",
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(less|css)/,
        exclude: /node_modules/ ,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
        },
          "css-loader",
          "less-loader"
        ]  
    },
    {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'url-loader'
        },
      ],
    },
    { 
      test: /\.(png|jpg)$/,
      include: path.join(__dirname, 'assets/images'),
      loader: 'file-loader' 
   }
  ]}

}