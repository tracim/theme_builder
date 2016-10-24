module.exports = {
  entry: ['babel-polyfill', 'whatwg-fetch', './src/app/app.jsx'],
  output: {
    path: 'src/dist',
    filename: 'bundle.js',
    publicPath: 'src/dist',
  },
  watch: true,
  module: {
    loaders: [
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ["transform-object-rest-spread", "transform-class-properties"],
        }
      }, {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      }, {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader',
      }, {
        test: /\.png$/,
        loader: "url-loader?limit=100000",
      }, {
        test: /\.jpg$/,
        loader: "file-loader",
      }, {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff",
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff",
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream",
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file",
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml",
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }

}
