// object类型
// let a: object;
// a = { key: 111 };
// console.log('a :>> ', a);
// a = [1, 2, 3];
// console.log('a :>> ', a);
// a = function foo() {};
// console.log('a :>> ', a);

// let b: { name: string };
// b = { name: 'hey' };
// console.log('b :>> ', b);

// {} 用来指定对象中可以包含哪些属性
// 语法：
//   {属性名:属性值,属性名:属性值}
// 在属性名后边加上?，表示属性是可选的
// let b65: { name: string; age?: number };
// b65 = { name: 'haha' };
// b65 = { name: '孙悟空', age: 18 };

// [propName: string]: any 表示任意类型的属性
// 所以下面定义了一个必须包含name属性，其他属性随意的类型
// let c65: { name: string, [propName: string]: any };
// c65 = {name: '猪八戒', age: 18, gender: '男'};

// let c: { name: string; [key: string]: unknown };
// c = { name: 'zjh', a: 1, b: 'hello', c: false };
// console.log('c :>> ', c);

/* 函数对象 */
/*
 * 设置函数结构的类型声明：
 * 语法：(形参:类型, 形参:类型 ...) => 返回值
 */
// let d65: (a: number, b: number) => number;
// // 声明了类型之后，在定义时可以不再指出类型
// d65 = function (n1, n2) {
//   return n1 + n2;
// };
// // 也可以指出类型
// d65 = function (n1: number, n2: number): number {
//   return n1 + n2;
// };

// let d: (x: number, y: number) => number;
// d = function (a: number, b: number, c: number): number {
//   return a + b;
// };
// let res = d(1, 2);
// console.log('res :>> ', res);

/* 数组 */
/*
 * 数组的类型声明：
 *    类型[]
 *    Array<类型>
 */
// let a: string[];
// a = ['a', 'b', 'c'];
// console.log('a :>> ', a);

// let b: Array<number>;
// b= [1,2,3]
// console.log('b :>> ', b);

/* 元组 tuple */
/*
 *   元组，元组就是固定长度的数组
 *       语法：[类型, 类型, 类型]
 *       相比于数组，元组的性能更高一些
 */
// let t: [number, string, boolean];
// t = [1, 'hi', false];
// console.log('t :>> ', t);

/* 枚举 enum */
// enum Gender {
//   male = 1, // 1 男
//   female = 2 //2 女
// }
// console.log('Gender :>> ', Gender);
// let p: { name: string; gender: Gender };
// p = { name: 'zjh', gender: Gender.female };
// console.log('p :>> ', p);
// console.log(p.gender === Gender.female);

/* 类型别名 */
// type myType = 1 | 2 | 3 | 4 | 'hello' | false;
// let k: myType;
// k = 1;
// k = 2;
// k = 3;
// k = 4;
// console.log('k :>> ', k);
// k = 'hello';
// console.log('k :>> ', k);
// k = false;
// console.log('k :>> ', k);

/* 类型断言 */
// 类型断言，用来帮助编译器判断变量的实际类型
/*
 * 语法：
 *   变量 as 类型
 *   <类型>变量
 * */

// 有些情况下，变量的类型对于我们来说是很明确
// 但是TS编译器却并不清楚
// 此时，可以通过类型断言来告诉编译器变量的类型
// 断言有两种形式：

// 8.1：变量 as 类型
let someValue: unknown;
someValue = false;
someValue = 'hello';
someValue = 'this is a string';

console.log('someValue :>> ', someValue);
let strLength: number = (someValue as string).length;
console.log('strLength :>> ', strLength);
let strLength1: number = (<string>someValue).length;
console.log('strLength1 :>> ', strLength1);
console.log('------------------------------');

// 8.2：<类型>变量
let someVal: unknown;
someVal = false;
someVal = 123;
someVal = 'hello';
someVal = [1, 2, 3, 4, 5];

console.log('someVal :>> ', someVal);
let strLen: number = (someVal as number[]).length;
console.log('strLen :>> ', strLen);
let strLen1: number = (someVal as Array<number>).length;
console.log('strLen1 :>> ', strLen1);
let strLen2: number = (<number[]>someVal).length;
console.log('strLen2 :>> ', strLen2);
let strLen3: number = (<Array<number>>someVal).length;
console.log('strLen3 :>> ', strLen3);
