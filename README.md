----- Resources -----

Webpack documentation : https://webpack.js.org/concepts/

Hot Module Replacement - HMR can be used in development as a LiveReload replacement. webpack-dev-server supports a hot mode in which it tries to update with HMR before trying to reload the whole page.
See the Hot Module Replacement guide for details : https://webpack.js.org/guides/hot-module-replacement/

Check out the webpack.config.js file for all the custom configs such as
entry
output
loaders
devServer


----- Enabling HMR -----
use webpack's built-in HMR plugin :>
    npm i --save-dev html-webpack-plugin

    use the plugin in webpack.config :>
        const HtmlWebpackPlugin = require('html-webpack-plugin');

        plugins: [
        new HtmlWebpackPlugin({
            title: 'Hot Module Replacement',
        }),
        ],

add 'hot' mode to devServer option :>
    npm i --save-dev webpack-dev-server

    devServer: {
        static: './dist',
        hot: true,
    }