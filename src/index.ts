(function () {
  // 类型别名: 描述一个对象类型
  type myType = {
    name: string;
    age: number;
    [propName: string]: any;
  };

  /**
   * 接口用来定义一个类结构，用来定义一个类中应该包含哪些属性和方法
   * 同时接口也可以当成类型声明去使用
   * 接口可以重复申明
   */
  interface myInterface {
    name: string;
    age: number;
  }

  interface myInterface {
    [propName: string]: any;
  }

  const obj: myInterface = {
    name: 'zjh',
    age: 222,
    gender: '男'
  };
  console.log(`obj:`, obj);

  /*
   * 接口可以在定义类的时候去限制类的结构，
   *   接口中的所有的属性都不能有实际的值
   *   接口只定义对象的结构，而不考虑实际值
   *       在接口中所有的方法都是抽象方法
   *
   * */
  interface myInter {
    name: string;
    sayHello(): void;
  }

  /*
   * 定义类时，可以使类去实现一个接口,
   *   实现接口就是使类满足接口的要求
   *   接口和抽象类区别:
   *   1.抽象类中可以定义抽象方法也可以定义非抽象方法，在接口中所有的方法都是抽象方法
   *   2.抽象类是专门用来被继承的类，使用extends关键字，而接口是implements(实现)这个关键字
   * */
  class MyClass implements myInter {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    sayHello(): void {
      console.log('大家好~~');
    }
  }
  const m = new MyClass('初始值');
  console.log(`m:`, m);
  m.sayHello();
})();
