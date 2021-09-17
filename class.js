"use strict";
// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person("ellie", 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setter
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    // this.age는 메모리값을 불러오는 것이 아니라 get age()를 호출
    // = age도 setter가 있으면 setter를 호출
  }

  get age() {
    return this._age;
  }

  set age(value) {
    // if (value < 0) {
    //   throw Error("age can not be negative");
    // }
    this._age = value < 0 ? 0 : value;
    // this.age = value이면 value를 할당하기 위해 또 setter(자기자신)을 호출
    // 무한반복으로 콜스택 초과함(call stack size exceeded
    // 이를 방지하기 위해 getter와 setter안의 변수명을 조금 다르게(_을앞에붙임) 만듦
  }
}

const user1 = new User("Steve", "Jobs", -1);
console.log(user1.age);

// 3. Fields (public, private)
// To soon! 너무 최근에 추가되어 많은 자바스크립트 개발자가 쓰고있진 않음. 추가 되었다고만 알고있자.
// 사파리에도 안됨. 쓰려면 Babel이용해야함.
// https:/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
class Experiment {
  publicField = 2;
  #privateField = 0; // 클래스 외부에서는 값을 읽을 수도 변경할 수도 없다. undefined.
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!
// static은 생성된 오브젝트가 아닌 원래 클래스로 접근해야함.
class Article {
  static publisher = "Dream Coding";
  constructior(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
// console.log(article1.publisher); // undefined
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log("세모");
  }
  getArea() {
    return (this.width * this.height) / 2;
  }

  toString() {
    return `Triangle: color: ${this.color}`;
  }
}
const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object); // 자바스크립트의 모든 object는 Object를 상속한다.
// construnctor(), toString() 등등은 Object에 이미 지정된 함수
