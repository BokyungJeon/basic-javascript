"use strict";
// Objects
// one of the javaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key:  value };
// 우리가 접근할 수 있는 property인 key, 그 key의 값인 value

// 1. Literals and properties
// object 만드는 방법
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

// const name = 'ellie';
// const age = 4;
// print(name, age);
// function print(name, age) {
//     console.log(name);
//     console.log(age);
// }
function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: "ellie", age: 4 }; // JS에서는 {}을 이용해서 바로 오브젝트 생성가능
print(ellie);

ellie.hasJob = true;
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob);
// JS는 Dynamically typed language이기 때문에(동적으로 타입이 런타임 때-프로그램이동작하고 있을 때- 결정되는언어)
// 오브젝트를 뒤늦게 추가, 삭제할 수 있다. 다른언어에서는 흔한일이 아님. 유지보수, 생각지도 못한 에러 발생 가능하니 피하자.

// 2. Computed properties
// key should be always string
console.log(ellie.name); // .문법으로 접근
console.log(ellie["name"]); // 배열로 접근
ellie["hasJob"] = true;
console.log(ellie.hasJob);
// .을 쓸 때: 코딩하는 순간 그 키에 해당하는 값을 받아오고 싶을 때. 일반적으로 코딩할 때.
// ['string']을 쓸 떄: 정확하게 어떤 카가 필요한지 모르고 런타임에서 결정될 때. 실시간으로 원하는 키의 값을 받아오고 싶을 때
// 동적으로 키에 관련된 값을 받아야 할 때 사용.
// 예를들어 오브젝트와 키를 받아 키에 해당하는 값을 프린트하는 함수를 만들 때,
function printValue(obj, key) {
  // key는 사용자가 어떤 값을 입력할지 모르는 상황
  //   console.log(obj.key); // obj.key는 obj에 key라는 이름의 property를 찾음. obj["key"]와 같은 의미
  console.log(obj[key]); // 입력받은 obj의 key에 해당하는 값을 프린트함.
}
printValue(ellie, "name");
printValue(ellie, "age");

// 3. Property value shorthand
const person1 = { anme: "bob", age: 2 };
const person2 = { anme: "steve", age: 3 };
const person3 = { anme: "dave", age: 4 };
// 일일이 작성하는 번거로움을 없애기 위해

function makePerson(name, age) {
  return {
    name, // name: name
    age, // age: age
  };
}
const person4 = makePerson("ellie", 30);
console.log(person4);

// 4. Constuctor Function
// 클래스가 생기기 전에 템플릿으로 사용
// 다른 계산을 하지 않고 순수하게 object를 생성하기 위한 함수
// 대문자로 시작하고 return없이 this.name=name식으로 작성하면(like Class Constructor)
// 자바스크립트 엔진이 알아서 오브젝트를 만들어줌.
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}
const person5 = new Person("ellie", 30); // 호출도 클래스에서 오브젝트 만드는 것처럼 하면 자바스크립트엔진이 새로운 오브젝트를 만들어준다.

// 5. in operator: property existence check (key in obj)
console.log("name" in ellie);
console.log("age" in ellie);
console.log("random" in ellie);
console.log(ellie.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in ellie) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// } // 많이 작성해야해서 좋진 않음
for (value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: "ellie", age: "20" };
const user2 = user;
user2.name = "coder";
console.log(user);

// old way
const user3 = {};
for (key in user) {
  // user안에 있는 key를 돌면서
  user3[key] = user[key]; // 그 key의 property를 user3의 key에 추가할 건데 그 값은 user의 key의 값을 할당한다.
}
console.clear();
console.log(user3);

// new way
const user4 = {};
Object.assign(user4, user);
console.log(user4);

// or
const user5 = Object.assign({}, user);
console.log(user5);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2); // 뒤 순서에 있는 것이 앞쪽에 동일한 property가 있다면 덮어씀
console.log(mixed.color);
console.log(mixed.size);
