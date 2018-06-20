var config = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    devServer: {
       inline: true,
       port: 8080
    },
    module: {
        rules: [
          {
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                presets: ['es2015', 'react']
             }
          },
          {
            test: /\.scss$/,
            loaders: [
                'css',
                'sass'
            ]
        },
        { 
            test: /\.css$/, 
            loader: "style-loader!css-loader" 
          },
          { 
            test: /\.png$/, 
            loader: "url-loader?limit=100000" 
          },
          { 
            test: /\.jpg$/, 
            loader: "file-loader" 
          },
          { test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file-loader?name=public/fonts/[name].[ext]' }
       ]
    }
 }
 module.exports = config;