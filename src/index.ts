import { hi } from './lib';
function sum1(a: number, b: number): number {
  return a + b;
}

const obj: { name: string; [key: string]: unknown } = { name: '孙悟空' };
console.log('obj :>> ', obj);
obj.age = 500;
console.log('obj :>> ', obj);

console.log('结果: ', sum1(11, 22));
console.log('hi :>> ', hi);

console.log('Promise :>> ', Promise);

const foo = (x: number, y: number): number => x + y;
foo(11, 22);
console.log('结果:', foo(11, 22));
