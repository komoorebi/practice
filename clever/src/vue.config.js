module.exports = {
    configureWebpack: {},
    devServer: { // 环境配置
      host: '0.0.0.0',
      public: '192.168.56.1', // 此处是自己电脑IP地址！
      port: '8080',
      https: false,
      disableHostCheck: true,
      open: false // 配置自动启动浏览器
    }
}