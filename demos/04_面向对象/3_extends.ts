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
    //实例方法:叫
    bark(msg: string) {
      console.log(this.name + ', 在' + msg);
    }
  }
  /*
   * Dog extends Animal
   *   - 此时，Animal被称为父类，Dog被称为子类
   *   - 使用继承后，子类将会拥有父类所有的方法和属性
   *   - 通过继承可以将多个类中共有的代码写在一个父类中，
   *       这样只需要写一次即可让所有的子类都同时拥有父类中的属性和方法
   *       如果希望在子类中添加一些父类中没有的属性或方法直接加就行
   *   - 如果在子类中添加了和父类相同的方法，则子类方法会覆盖掉父类的方法
   *       这种子类覆盖掉父类方法的形式，我们称为方法重写
   * */

  //定义一个表示狗的类
  //使Dog类继承Animal类
  class Dog extends Animal {
    // constructor(name: string, age: number) {
    //   super(name, age);
    // }
    //撒尿
    passWater() {
      console.log(this.name + ', 在撒尿');
    }
    //重写:叫
    bark(msg: string) {
      console.log('重写: ' + this.name + ', 在' + msg);
    }
  }

  //定义一个表示猫的类
  //使Cat类继承Animal类
  class Cat extends Animal {
    // constructor(name: string, age: number) {
    //   super(name, age);
    // }
    //抓老鼠
    catchMouse() {
      console.log(this.name + ', 在抓老鼠');
    }
    //重写:叫
    bark(msg: string) {
      console.log('重写: ' + this.name + ', 又在' + msg);
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
  // cat.catchMouse();
})();
