// 1. Use strict
// Whole-script strict mode syntax
// JavaScript is very flexible
// flexible === dangerous
// added ECMAScript 5
// use this for Valina Javascript
"use strict";
console.log("hello word");

// 2.  Variable, rw(read/write)
// let (added in ES6)
// mutable data type
let globalName = "global name";
{
  let name = "ellie";
  console.log(name);
  name = "hello";
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting(move declaration from bottom to top)
{
  age = 4;
  var age;
}
console.log(age);

// 3. Constant, r(read only)
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: pimitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// 4. Variable types
// primitive type은 값 value 자체가 메모리에 저장
// object type은 커서 메모리에 한번에 다 올라갈 수 없음. ellie가 포인터로 가리키는 ref가 메모리에 저장되고 ref는 실제 오브젝트가 담긴 메모리를 가리킴.
// object를 const로 작성하면 ref를 가리키는 포인터가 잠겨 ellie 자체는 변경불가하지만 ellie안의 name, age는 변경 가능하다.
// primitive, single item: number, string, boolean, null, undefine, symbol
// object - box container
// function - first-class function을 지원. 함수를 다른 데이터 타입처럼 변수에 할당 가능. 함수의 파라미터로 사용 가능, 리턴 가능.
// C, JAVA와 달리 number 하나로 사용. 타입이 다이나믹하게 결정되기 때문에 지정해주지 않아도 됨. 타입스크립트에서는 number사용.
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt(farily ne, don't use it yet)
const bigInt = 12345678901234567890123456778901234567890n; // over(-2**53) ~ 2**53
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello" + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log("value: " + helloBob + " type: " + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
// 명확하게 빈값으로 지정
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
// 선언은 되었지만 값이 지정되어 있지 않음
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// sybol, create unique identifiers for objects
// map이나 다른 자료구조에서 고유한 식별자가 필요하거나,
// 동시다발적으로 일어날 수 있는 코드에서 우선순위를 주고 싶을 때 고유한 식별자가 필요할 때 사용
// 간혹 식별자를 string으로 사용할 경우 다른 모듈이나 파일에서 동일한 string을 썼을 때 동일하게 간주됨
// 반면 symbol을 사용하면 동일한 string으로 작성했어도 다른 것으로 인식하므로 나중에 프로그램할 때 유용하게 사용할 수 있다.
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // false
// 동일한 string으로 같은 symbol을 만들고 싶을 때는 symbol.for()
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); // true
// Symbol은 바로 출력하면 에러남 .description을 이용
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

//  object, real-lif object, data structure
const ellie = { name: "ellie", age: 20 };
ellie.age = 21;

// 5. Dynamic typing: dynamically typed language
// C나 JAVA는 Statically typed language. 변수를 선언할 때 어떤 타입인지 결정해서 타입을 같이 선언.
// 자바스크립트는 선언할 때 타입을 선언하지 않고 런타임(프로그램이 동작)할 때 할당된 값에 따라 타입이 변경될 수 있다.
// 다이나믹 타입은 빠른 프로토 타입에는 유용하지만 다수의 엔지니어, 혹은 규모있는 프로젝트에서는 문제가 되기도 함.
let text = "hello";
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); // 변수명만 보고 텍스트인 줄 알았는데 중간에 누가 숫자로 바꾸면 오류가 남. 이를 해결위해 타입스크립트를 사용
