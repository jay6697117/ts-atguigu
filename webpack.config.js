// 引入一个包
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const rootDir = process.cwd(); // 项目根目录

console.log(`process.env.NODE_ENV:`, process.env.NODE_ENV);

// webpack中的所有的配置信息都应该写在module.exports中
module.exports = {
  mode: process.env.NODE_ENV,
  // 指定入口文件
  entry: './src/index.ts',
  // 指定打包文件所在目录
  output: {
    // 指定打包文件的目录
    path: path.resolve(rootDir, './dist'),
    // 打包后文件的文件
    filename: 'bundle.js'
    // 告诉webpack不使用箭头
    // 默认打包后是一个立即执行的箭头函数，在IE 11中也是无法执行的！
    // 加上下面的配置，可以在webpack打包时，最外层不再是箭头函数
    // webpack新版本已经不想兼容IE了！233
    // environment: {
    //   arrowFunction: false
    // }
  },
  // 指定webpack打包时要使用模块
  module: {
    // 指定要加载的规则
    rules: [
      {
        // test指定的是规则生效的文件
        test: /\.ts$/,
        // 要使用的loader: Webpack在加载时是"从后向前"加载
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  // 配置Webpack插件
  plugins: [
    new HtmlWebpackPlugin({
      title: 'TS项目',
      filename: 'index.html',
      template: path.resolve(rootDir, './public/index.html')
    })
  ],
  // 用来设置引用模块
  resolve: {
    extensions: ['.ts','...']
  }
};

// CleanWebpackPlugin只用于生产环境
if (process.env.NODE_ENV === 'production') {
  console.log('CleanWebpackPlugin 啦啦啦');
  module.exports.plugins.push(new CleanWebpackPlugin());
}
