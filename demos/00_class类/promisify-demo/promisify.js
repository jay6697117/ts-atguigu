const { promisify } = require('util');

let testCallback = {
  value: 'testCallbackValue',
  echo: function (num, callback) {
    setTimeout(() => {
      // 第一个参数为error，第二个为返回值
      callback(null, `|${this.value}|: ${num}`);
    }, 2000);
  }
};

(async () => {
  // num=2，不传入callback参数，callback会自动作为回调函数处理
  console.log(`promisify(testCallback.echo):`, promisify(testCallback.echo));
  const p1 = promisify(testCallback.echo).call(testCallback, 2);
  console.log(`p1 000:`, p1);
  let val = await promisify(testCallback.echo).call(testCallback, 2);
  const res1 = await p1.then(res => {
    console.log(`p1 res:`, res);
    return res;
  });
  console.log(`p1 001:`, p1);
  console.log(`val:`, val);
  console.log(`res1`, res1);
  return val;
})();
