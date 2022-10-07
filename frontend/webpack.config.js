const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.?js$/, 
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/, 
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(png|jpg|svg)$/, 
                use: ['file-loader']
            },
        ]
    },
    devServer: {
        host: '0.0.0.0',
        hot: true,
        client: {
          webSocketURL: {
            port: 8080
          }
        }
    },
    watchOptions: {
        // aggregateTimeout: 300,
        poll: 1000
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
    ],
}