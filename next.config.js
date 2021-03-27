const path = require('path')

module.exports = {
  webpack: {
    module: {
      loaders: [
        {
          test: /\.json$/,
          loader: 'json-loader'
        }
      ]
    }
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}