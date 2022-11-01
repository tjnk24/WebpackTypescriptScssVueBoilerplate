const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const {DefinePlugin} = require('webpack');

const development = process.env.NODE_ENV !== 'production';

const isWebpackServing = !!!process.argv.indexOf('serve');

module.exports = {
    context: __dirname,
    devtool: development && 'source-map',
    devServer: {
        static: path.resolve(__dirname, 'src'),
        liveReload: false,
        open: true,
        port: 8080,
        hot: true,
        historyApiFallback: true,
        client: {
            logging: 'error',
            overlay: false,
        },
        devMiddleware: {
            writeToDisk: true,
        },
    },
    name: 'client',
    target: 'web',
    entry: './src/index.ts',
    mode: development ? 'development' : 'production',
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue'],
        alias: {
            '__components': path.resolve(__dirname, './src/components'),
            '__scss': path.resolve(__dirname, './src/scss'),
            '__assets': path.resolve(__dirname, './src/assets'),
        },
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(ts|js)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            // vue-loader fresh issue
                            // https://github.com/vuejs/vue-loader/issues/1915
                            ignoreDiagnostics: isWebpackServing ? [] : [7006],
                            appendTsSuffixTo: [/\.vue$/],
                        }
                    },
                ],
            },
            {
                test:/\.(s?css)$/,
                use: [
                    {loader: development ? 'style-loader' : MiniCssExtractPlugin.loader},
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    'postcss-preset-env',
                                ],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name][ext]',
                },
            },
        ],
    },
    performance: {
        hints: false,
    },
    plugins: [
        new DefinePlugin({
            '__VUE_OPTIONS_API__': true,
            '__VUE_PROD_DEVTOOLS__': false,
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {from: 'src/assets', to: 'assets'},
            ],
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            chunkFilename: '[name].css',
            filename: '[name].css',
            ignoreOrder: true,
        }),
        new VueLoaderPlugin(),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
        },
        minimizer: [
            new TerserPlugin({
                extractComments: false,
            }),
            new CssMinimizerWebpackPlugin(),
        ],
    },
};
