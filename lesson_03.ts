// 1.0
// let a: 10;
// // console.log('a 0:>> ', a); // 报错
// a = 10;
// console.log('a 1:>> ', a);

// 2.0 联合类型+赋值
// let b:'male' | 'female';
// b = 'male';
// console.log('b :>> ', b);
// b = 'female';
// console.log('b :>> ', b);

// 3.0 联合类型
// let c: number | boolean;
// c = 1;
// console.log('c :>> ', c);
// c = false;
// console.log('c :>> ', c);
// // c = 'hello';

// 4.0 any
// any 表示的是任意类型，一个变量设置类型为any后相当于：对该变量关闭了TS的类型检测！
// 使用TS时，强烈不建议使用any类型
// let d: any;
// d = 10;
// console.log('d :>> ', d);
// d = false;
// console.log('d :>> ', d);
// d = 'hey';
// console.log('d :>> ', d);

// // 声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any （隐式的any）
// let a61;
// a61 = 10;
// a61 = 'hello';
// a61 = true;

// 5.0 unknown: 类型安全的any
// unknown类型的变量，不能直接赋值给其他变量
// let a: any;
// console.log('typeof a :>> ', typeof a);
// a = 'i am any type';
// console.log('a :>> ', a);

// let u: unknown;
// console.log('typeof u 000:>> ', typeof u);
// u = 111;
// console.log('u :>> ', u);
// u = 'hi';
// console.log('u :>> ', u);
// u = false;
// console.log('u :>> ', u);

// let str: string;
// let num: number;
// str = a;
// console.log('str :>> ', str);
// u = 'i am unknown type';
// console.log('u :>> ', u);
// console.log('typeof u 001:>> ', typeof u);
// str =  u; // error: 不能将类型“unknown”分配给类型“string”
// if (typeof u === 'string') {
//   str = u;
// }
// str = u as string; // 类型断言
// // str = <string>u; // 类型断言
// num = u as number; // 类型断言
// // num = <number>u; // 类型断言

// console.log('str :>> ', str);
// console.log('num :>> ', num);

//类型断言语法
// 1.值 as 类型
// 2.<类型>值

/* 6.3 void */

// void 用来表示空，主要用于函数中
// 以函数为例，表示没有返回值的函数：
// function foo0(condition:number): string | number {
//   if (condition > 0) {
//     return 123;
//   } else {
//     return 'hello';
//   }
// }
// function foo1(): string {
//   return 'hello';
// }
// console.log('foo1() :>> ', foo1());

function foo2(): void {
  console.log('void test');
  // return;
  return undefined
  // return null; // error TS2322: Type 'null' is not assignable to type 'void'
}
const res = foo2();
console.log('res :>> ', res);
