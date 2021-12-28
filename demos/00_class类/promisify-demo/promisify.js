// const { promisify } = require('util');
// console.log(`promisify 1:\n`, promisify);

function promisify(f) {
  return function (...args) { // 返回一个包装函数（wrapper-function） (*)
    return new Promise((resolve, reject) => {
      function callback(err, result) { // 我们对 f 的自定义的回调 (**)
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }

      args.push(callback); // 将我们的自定义的回调附加到 f 参数（arguments）的末尾

      f.call(this, ...args); // 调用原始的函数
    });
  };
}

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
  console.log(`promisify(testCallback.echo):\n`, promisify(testCallback.echo));
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
