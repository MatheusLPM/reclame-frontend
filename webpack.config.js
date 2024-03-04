const path = require('path');


const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {

    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    devtool: 'source-map',

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle[hash].js',
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, 'build')],
        }),

    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader' }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack', 'url-loader'],
            },

        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        hot: true,
        port: 3000,
        historyApiFallback: {
            rewrites: [
                /*{ from: /^\/home/, to: '/index.html' },
                { from: /^\/enter/, to: '/index.html' },
                { from: /^\/login/, to: '/index.html' },
                { from: /^\/register/, to: '/index.html' },
                { from: /^\/register\/empesarial/, to: '/index.html' },
                { from: /^\/perfil\/\d+/, to: '/index.html' },*/
                { from: /./, to: '/index.html' },
            ],
        },
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    }
};
