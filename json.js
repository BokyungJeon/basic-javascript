"use strict";

// JSON
// JavaScript Object Notation
// 자바스크립트 오브젝트 형태에서 영감을 받아 xml 대용으로 만든 데이터타입
// - simplest data inerchange format
// - lightweight text-based structure
// - easy to read
// - key-value pairs
// - used for serialization and transmission of data between the network and the network connection
// - indempendent programming language and platform

// 1. Object to JSON
// cmd눌러 정의된 곳에 들어가보면 JSON이라는 인터페이스에는 두 가지 이름의 API가 있음
// stringify라는 동일한 이름의 함수가 두 개 있고 전달 되는 매개변수에 약간 차이가 있다.(오버로딩함수)
// 오버로딩(Overloading)은 함수의 이름은 동일하지만 어떤 파라미터, 몇개의 파라미터를 전달 하느냐에 따라 다른 방식의 함수가 호출된다.

// stringify(obj)
// value: any어떤형태의 값, replacer?(값을 변형) => (가공된)JSON형태로 변환해줌.
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json); // ""가 들어간 배열처럼 보이는 JSON 출력

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  //   symbol: Symbol('id')
  jump: () => {
    console.log(`${this.name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json); // jump 함수는 오브젝트에 있는 데이터가 아니므로 제외됨
// symbol같이 자바스크립트에만 있는 특별한 테이더도 포함되지 않음

json = JSON.stringify(rabbit, ["name", "color", "size"]);
console.log(json); // replacer는 함수형태 혹은 배열형태로 전달(['전달하고 싶은 프로퍼티 이름만'])

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`); // 전달된 오브젝트를 싸고있는 제일 최상의 오브젝트가 먼저 전달되고 그 뒤로 키밸류가 전달됨
  return key === "name" ? "ellie" : value;
});
console.log(json); // 리턴값을 세밀하게 통하제하고 싶을 때 콜백함수를 사용한다.

// 2. JSON to Object
// parse(json)
// text :string , reviver?(결과값 변형위한 함수)을 인자로 넣으면 (변형된)object로 리턴
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();
// obj.jump(); // 오브젝트의 함수는 JSON으로 변환되지 않으므로 JSON을 다시 오브젝트로 변환했을 때 함수(jump라는 API, method)는 들어있지 않다.

console.log(rabbit.birthDate.getDate()); // rabbit.birthDate는 Date()객체이므로 .getDate라는 API를 사용할 수 있다.
// console.log(obj.birthDate.getDate()); // 하지만 JSON으로 변경될 때 string으로 변환되므로 JSON을 다시 object로 바꾸면 객체가 아닌 string으로 반환되어 API를 사용할 수 없다.
console.log(obj.birthDate);
// string이 된 birthDate를 오브젝트로 만들 때 다시 Date()객체로 반환하고 싶으면 parse의 reviver라는 콜백함수를 사용
const obj2 = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj2.birthDate);
console.log(obj2.birthDate.getDate());

// jsondiff.com : 첫번째로 받아온 데이터와 두번째로 받아온 데이터가 어떻게 다른지 보여줌. 문제를 디버깅할때 유용.
// jsonbeautifier.org : 가끔 서버에서 받아온 JSON을 복사해서 붙여넣기하면 포멧이 망가지는 경우가 있다. 포맷을 예쁘게 만들어준다.
// jsonparser.org : json으로부터 오브젝트가 어떻게 표기되어지는지 쉽게 확인가능하다.
// tools.learningcontainer.com/json-validator : json을 넣고 validator를 누르면 어디가 이상한지 확인해준다. json이 너무 크면 minified하기도 한다.
