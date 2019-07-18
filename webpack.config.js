"use strict";
exports.__esModule = true;
var path_1 = require("path");
var serverless_webpack_1 = require("serverless-webpack");
var config = {
    mode: serverless_webpack_1["default"].lib.webpack.isLocal ? 'development' : 'production',
    entry: serverless_webpack_1["default"].lib.entries,
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    },
    output: {
        libraryTarget: 'commonjs',
        path: path_1["default"].join(__dirname, '.webpack'),
        filename: '[name].js'
    },
    target: 'node',
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: 'ts-loader' },
        ]
    }
};
exports["default"] = config;
