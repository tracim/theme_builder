//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  entry: ['babel-polyfill', 'whatwg-fetch', './src/app/app.jsx'],
  output: {
    path: 'src/dist',
    filename: 'bundle.js',
    publicPath: 'src/dist', // https://github.com/webpack/docs/wiki/Configuration#outputpublicpath
  },
  watch: true,
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'standard',
        exclude: [/node_modules/, /\/src\/app\/lib\/FileSaver\.js/]
      }
    ],
    loaders: [
      {
        test: [/\.js$/, /\.jsx$/],
        include: [
          /\/src\/app/, // path.resolve(__dirname, 'src/app'), // /src/app
          // /\/src\/app\/components/, // path.resolve(__dirname, 'src/app/components'), // /src/app/components
          // /\/src\/app\/containers/, // path.resolve(__dirname, 'src/app/components'), // /src/app/containers
          // /\/src\/app\/reducers/ // path.resolve(__dirname, 'src/app/reducers'), // /src/app
        ],
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-object-rest-spread', 'transform-class-properties'],
        }
      }, {
        test: /\.css$/,
        // the line bellow is useless because only required (or imported) files from .js, .jsx will be bundled (the line bellow is still valid)
        //exclude: /\/src\/app\/font\/font-awesome-4.6.3\/css\/font-awesome\.css/,
        loader: 'style-loader!css-loader',
      }, {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader', // loaders order apply from right to left
      }, {
        test: /\.png$/,
        loader: 'url-loader?mimetype=image/png&limit=100000',
      }, {
        test: /\.jpg$/,
        loader: 'file-loader',
      }, {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
      }, {
        test: /\.ico(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  // plugins: [new BundleAnalyzerPlugin({
  //   analyzerMode: 'server',
  //   reportFilename: 'report.html',
  //   openAnalyzer: false, // set to true to see the analyzer
  //   generateStatsFile: false,
  // })]
  /*
  TODO : config to test
  {
     test: /\.(jpg|jpeg|gif|png|ico)$/,
     exclude: /node_modules/,
     loader:'file-loader?name=img/[path][name].[ext]&context=./app/images'
  }
  */
}
