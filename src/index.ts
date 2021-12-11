(function () {
  class Animal {
    //实例属性
    name: string;
    age: number;
    constructor(name: string, age: number) {
      // 实例属性赋值
      this.name = name;
      this.age = age;
    }
    //实例方法
    bark(msg: string) {
      console.log(this.name + ', 在' + msg);
    }
  }
  //定义一个表示狗的类
  class Dog extends Animal {
    // constructor(name: string, age: number) {
    //   super(name, age);
    // }
    // constructor(...args: [string, number,]) {
    //   super(...args);
    // }
    passWater() {
      console.log(this.name + ', 在撒尿');
    }
  }

  //定义一个表示猫的类
  class Cat extends Animal {
    // constructor(name: string, age: number) {
    //   super(name, age);
    // }
    // constructor(...args: [string, number,]) {
    //   super(...args);
    // }
    catchMouse() {
      console.log(this.name + ', 在抓老鼠');
    }
  }

  const dog = new Dog('旺财', 5);
  console.log(`dog:`, dog);
  dog.bark('汪汪汪');
  dog.passWater();
  console.log('-----------------------');
  const cat = new Cat('加菲', 3);
  console.log(`cat:`, cat);
  cat.bark('喵喵喵');
  cat.catchMouse();
})();
