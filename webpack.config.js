const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        camera_move: './src/camera_move.js',
        colorful_triangle: './src/colorful_triangle.js',
        face_check: './src/face_check.js',
        THREE: './src/THREE.js',
        snowman: './src/snowman.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist', 'js'),
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true
    },
    performance: {
        maxEntrypointSize: 1024000,
        maxAssetSize: 1024000
    }
};