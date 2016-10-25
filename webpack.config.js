const path = require("path")

module.exports = {
  entry: ["babel-polyfill", "whatwg-fetch", "./src/app/app.jsx"],
  output: {
    path: "src/dist",
    filename: "bundle.js",
    publicPath: "src/dist",
  },
  watch: true,
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: "standard",
        exclude: /node_modules/,
      }
    ],
    loaders: [
      {
        test: [/\.js$/, /\.jsx$/],
        include: [
          path.resolve(__dirname, "src/app"),
          path.resolve(__dirname, "src/app/components"),
          path.resolve(__dirname, "src/app/components"),
          path.resolve(__dirname, "src/app/reducers"),
        ],
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015"],
          plugins: ["transform-object-rest-spread", "transform-class-properties"],
        }
      }, {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      }, {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader', // loaders order apply from right to left
      }, {
        test: /\.png$/,
        loader: "url-loader?mimetype=image/png&limit=100000",
      }, {
        test: /\.jpg$/,
        loader: "file-loader",
      }, {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff",
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff",
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/octet-stream",
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader",
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=image/svg+xml",
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
  }
  /*
  TODO : config to test
  {
     test: /\.(jpg|jpeg|gif|png|ico)$/,
     exclude: /node_modules/,
     loader:'file-loader?name=img/[path][name].[ext]&context=./app/images'
  }
  */
}
