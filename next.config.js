const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');

module.exports = withPlugins([
    [withSass, {
        cssLoaderOptions: {
          localIdentName: '[path]___[local]___[hash:base64:5]',
        }
    }], withImages
  ]);