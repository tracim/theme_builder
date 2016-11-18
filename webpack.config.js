//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const webpack = require('webpack')
const isProduction = process.env.NODE_ENV === "production"

module.exports = {
  entry: ['babel-polyfill', 'whatwg-fetch', './app/app.jsx'],
  output: {
    path: 'dist',
    filename: 'bundle.js',
    // publicPath: '/', // https://github.com/webpack/docs/wiki/Configuration#outputpublicpath
  },
  watch: isProduction ? false : true,
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'standard',
        exclude: [/node_modules/, /\/app\/lib\/FileSaver\.js/]
      }
    ],
    loaders: [
      {
        test: [/\.js$/, /\.jsx$/],
        include: [
          /\/app/, // path.resolve(__dirname, 'app'), // /app
          // /\/app\/components/, // path.resolve(__dirname, 'app/components'), // /app/components
          // /\/app\/containers/, // path.resolve(__dirname, 'app/components'), // /app/containers
          // /\/app\/reducers/ // path.resolve(__dirname, 'app/reducers'), // /app
        ],
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-object-rest-spread', 'transform-class-properties'],
        }
      }, {
        test: /\.css$/,
        // the line bellow is useless because only required (or imported) files from .js, .jsx will be bundled (the line bellow is still valid)
        //exclude: /\/app\/font\/font-awesome-4.6.3\/css\/font-awesome\.css/,
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
  plugins: isProduction
    ? [
      new webpack.DefinePlugin({
        'process.env': { 'NODE_ENV': JSON.stringify('production') }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false }
      })
    ]
    : []
  ,
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
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
