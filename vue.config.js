module.exports = {
  chainWebpack: config => {
    // README files
    config.module
      .rule('README')
      .test(/\.md$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end()
  }
}
