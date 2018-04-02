const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'none',
    performance: { hints: false },
    mode: "production"
});
