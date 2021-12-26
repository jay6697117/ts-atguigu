(function () {
  console.log('泛型');

  // function foo(num: any): any {
  //   return num;
  // }

  /**
   * 在定义函数或是类时，如果遇到类型不明确就可以使用泛型
   * T 只有在函数执行的时候才能确定
   */

  function foo<T>(num: T): T {
    return num;
  }

  // 可以直接调用具有泛型的函数
  const res1 = foo(123); // 不指定泛型，TS可以自动对类型进行推断
  const res2 = foo<string>('hello2'); // 指定泛型:string
  console.log(`res1:`, res1);
  console.log(`res2:`, res2);

  function foo1<T, K>(param1: T, param2: K): T {
    console.log(`param1:`, param1);
    console.log(`param2:`, param2);
    return param1;
  }
  const res3 = foo1<string, number>('hello,world', 456);
  console.log(`res3:`, res3);

  interface Inter {
    length: number;
  }

  // T extends Inter 表示泛型T必须时Inter实现类（子类）
  function foo2<T extends Inter>(a: T): number {
    console.log(`foo2 a:`, a);
    return a.length;
  }

  const res4 = foo2<string>('hello, world');
  console.log(`res4:`, res4);
  const res5 = foo2<Array<number>>([1, 2, 3]);
  console.log(`res5:`, res5);

  class Person<T> {
    // public name: T;
    // constructor(name: T) {
    //   this.name = name;
    // }
    constructor(public name: T) {}
  }

  const p = new Person<string>('天旭宝宝');
  console.log(`p:`, p);
})();
