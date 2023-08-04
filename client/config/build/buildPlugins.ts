import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack, {HotModuleReplacementPlugin} from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
const Dotenv = require('dotenv-webpack');

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {

    

    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new HotModuleReplacementPlugin(),
        new Dotenv(),
        new webpack.DefinePlugin({
            'process.env.REACT_APP_GH_PAGES': JSON.stringify(process.env.REACT_APP_GH_PAGES)
          }),
    ]
}
