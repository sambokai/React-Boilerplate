// We are using node's native package 'path'
// https://nodejs.org/api/path.html
const path = require('path');

// Constants with our paths
const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    JS: path.resolve(__dirname, 'src/js'),
    SRC: path.resolve(__dirname, 'src'),
};

module.exports = {
    entry: path.join(paths.JS, 'app.js'),
    output: {
        path: paths.DIST,
        filename: 'app.bundle.js',
    },
    //Dev server configuration
    devServer: {
        contentBase: paths.SRC,
    },
};