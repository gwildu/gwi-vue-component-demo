module.exports = {
  module: {
    rules: [{
      test: /\.md$/,
      use: [
        {
          loader: 'raw-loader'
        }
      ]
    }]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
    }
  }
}
