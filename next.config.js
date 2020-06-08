// const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
// const withImages = require('next-images');
const withCSS = require('@zeit/next-css')

// module.exports = withPlugins([
//     [withSass, {
//         cssLoaderOptions: {
//           localIdentName: '[path]___[local]___[hash:base64:5]',
//         }
//     }], 
//     withImages,
//   ]);

  module.exports = withCSS(withSass({
    webpack (config, options) {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }
      })
      return config
    }
  }))
  