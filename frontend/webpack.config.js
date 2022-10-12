const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isDev = true              //need to configure webpack for product mod

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, "src", "index.tsx"),
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {},
                    }, 'css-loader']
            },
            {
                test: /\.(ico|png|jpg|svg|gif)$/,
                use: ['file-loader'],
            },
            {
                test: /\.(ttf|woff|woff2)$/,
                use: ['file-loader']
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
        new MiniCssExtractPlugin(),
    ],

    devServer: {
        host: '0.0.0.0',
        client: {
            webSocketURL: {
                port: 80
            }
        },
        historyApiFallback: true
    },
    watchOptions: {
        // aggregateTimeout: 300,
        poll: 1000,
        ignored: '/node_modules',
    },

    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },

    devtool: isDev ? 'source-map' : '',
}
