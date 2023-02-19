const { validate } = require('schema-utils')
const schema = require('./options.json');

function loader(source, map, data) {
  console.log('I am loader，我后执行')
  // this 上面含有 loader context：https://webpack.docschina.org/api/loaders/#the-loader-context
  const { version, webpack } = this;
  // 使用 Webpack 默认的 Logger
  const logger = this.getLogger('a-loader');
  logger.error('info');

  // 使用 this.emitError()
  // this.emitError('error')

  // 取消 Loader 的缓存
  this.cacheable(false);

  // 获取异步回调函数
  const asyncCallback = this.async();

  const options = this.getOptions();
  console.log('options: ', options);
  // 通过 schema-utils 中的 validate 校验 Loader 选项是否正确
  validate(schema, options, "Loader");

  const newSource = `
  /**
   * Loader API Version: ${version}
   * Is this in "webpack mode": ${webpack}
   */
  /**
   * Original Source From Loader
   */
  ${source}`;

  // 在 Loader 中直接写出新的产物文件
  this.emitFile('test.js', newSource, null);

  // 简单情况直接返回字符串
  // return newSource;
  // 复杂情况使用 this.callback
  this.callback(null, newSource);
  // this.callback(new Error('xxx'), null);
}

loader.pitch = function (remainingRequest, previousRequest, data) {
  console.log('I am pitch，我先执行')
  console.log('当前 loader 之后的资源请求字符串', remainingRequest);

  return `export default '222'`
}

module.exports = loader;
