(function () {
  class Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    sayHello() {
      console.log('我是父类sayHello');
      console.log(this.name + ' say hello!');
    }
  }

  class Dog extends Animal {
    age: number;
    constructor(name: string, age: number) {
      // 如果在子类中写了构造函数，在子类构造函数中必须对父类的构造函数进行调用
      super(name); //调用父类的构造函数
      this.age = age;
    }
    sayHello1() {
      // 在类的方法中 super就表示当前类的父类
      console.log('我是子类sayHello');
      // super.sayHello(); //这里调的是父类的实例方法
      console.log(this.name + ' 重写 say hello!');
    }
  }

  const animal = new Animal('动物');
  console.log(`animal:`, animal);
  animal.sayHello();
  console.log('--------------------------------');
  const dog = new Dog('旺财', 3);
  console.log(`dog:`, dog);
  // dog.sayHello();
  dog.sayHello1();
})();
