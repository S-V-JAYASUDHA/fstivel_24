const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Add a rule to ignore source maps for specific modules
      webpackConfig.module.rules.push({
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: [
          path.resolve(__dirname, 'node_modules/@mediapipe/tasks-vision'),
          path.resolve(__dirname, 'node_modules/@react-three/drei')
        ],
      });
      return webpackConfig;
    },
  },
};
