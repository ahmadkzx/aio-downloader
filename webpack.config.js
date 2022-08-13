const path = require('path')

module.exports = {
  mode: 'production',

  entry: {
    main: './src/main.ts',
    instagram: './src/instagram/index.ts',
  },

  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        type: 'asset/resource',
        generator: {
          filename: '[name].css',
        },
        use: ['sass-loader'],
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.js', '.css'],
  },

  output: {
    publicPath: '',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
}
