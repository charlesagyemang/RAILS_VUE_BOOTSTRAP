const environment = require('./environment')
const { VueLoaderPlugin } = require('vue-loader')

var newPlugin = environment.toWebpackConfig();
newPlugin.plugins.push(new VueLoaderPlugin());
module.exports = newPlugin;