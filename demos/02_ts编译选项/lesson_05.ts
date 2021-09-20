// import { member } from './lib';
// // 注释测试
// let a05: unknown;
// a05 = member as string;
// console.log('a05 :>> ', a05);

/*
function fn(a: number, b: number): number {
  return a + b;
}
fn(1, 2);

let c65: { name: string; [propName: string]: any };
c65 = {
  name: '猪八戒',
  age: 18,
  gender: '男',
  fn1: function () {
    console.log('this 000:>> ', this);
  }
};
c65.fn1();

function fn2(this: unknown) {
  console.log('this 001:>> ', this);
}
fn2();
*/

/* 严格的检查空值 */
let box1 = document.getElementById('demo');

// 1.0 下面的box1元素可能是不存在的，此时空指针报错！
// box1.addEventListener('click', function () {
//   console.log('hello');
// });

// 2.0 解决方法1
if (box1 !== null) {
  box1.addEventListener('click', function () {
    console.log('hello 111');
  });
}

// 3.0 解决方法2
box1?.addEventListener('click', function () {
  console.log('hello 222');
});
