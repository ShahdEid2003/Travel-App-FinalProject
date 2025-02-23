const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: "./src/client/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        port: 8080,
        hot: true
    }
    ,
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
            { test: /\.scss$/, use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"] },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "./src/client/views/index.html" }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
    ],
};

