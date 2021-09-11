// 声明变量a, 类型为number
let a: number;
// console.log('a 000:>> ', a);
a = 111;
console.log('a 111:>> ', a);
// a = 'hello'

let c: boolean;
// console.log('c 000:>> ', c);
c = false;
// c = 111
console.log('c :>> ', c);

function sum(x: number, y: number): string {
  return x + ':' + y;
}
const res = sum(1, 2)
