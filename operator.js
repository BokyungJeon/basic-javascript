"use strict";
// 1. String concatenation
console.log("my" + " cat");
console.log("1" + 2);
console.log(`string literals: 

'''''
1 + 2 = ${1 + 2}`);

console.log("ellie's\t\nbook");

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
// counter = counter + 1;
// preDecrement = counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
// postDecrement = counter;
// counter = counter + 1;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 5. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value
// 앞부터 true면 뒤는 보지 않고 true로 반환하기 때문에 복잡한 연산은 뒤쪽으로 배치할 것.
console.log(`or: ${value1 || value2 || check()}`);

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log("오잉");
  }
  return true;
}

// && (and), finds the first falsy value
// && 역시 앞이 false면 뒤는 확인 안하고 false로 반환하고 뒤는 실행이 안되므로 heavy operation은 뒤쪽에 배치.
console.log(`or: ${value1 && value2 && check()}`);
// null체크하는데도 사용됨
// often use to compress long if-statement
// ===nullableObject && nullableObject.something
// nullObject가 null이 아니어야 뒤의 .something이라는 value를 받아옴. 아래 코드와 같지만 간단하게 쓸 수 있다.
// if (nullableObject != null) {
//   nullableObject.something;
// }

// ! (not)
// 값을 반대로 바꿔줌
console.log(!value1);

// 7. Equality
const stringFive = "5";
const numberFive = 5;

// == lose equality, with type conversion
// 자바스크립트 엔진이 타입을 변경해서 검사함
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// == strinct equality, no type conversion
// 타입까지 신경써서 타입이 다르면 값이 같아도 다르다고 판단
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
// 오브젝트는 메모리에 저장될 때 reference형태로 저장됨.
const ellie1 = { name: "ellie" };
const ellie2 = { name: "ellie" };
// ellie1과 ellie2는 같은 데이터가 들어있는 object이지만, 실제 메모리에는 각각 다른 ref가 있고 그 ref가 서로 다른 object를 가리키고있다.
const ellie3 = ellie1;
// ellie3은 ellie1의 ref값을 가리키고 있으므로 똑같은 오브젝트를 가리키고 있다.
console.log(ellie1 == ellie2); // 다른 ref
console.log(ellie1 === ellie2); // ref값이 다름
console.log(ellie1 === ellie3); // ref를 할당했으므로 같음

// equality - puzzler
console.log(0 == false); // 0, null, undefined, empty string은 false로 간주될 수 있으므로 true
console.log(0 === false); // type까지 검사. 0은 boolean타입이 아니므로 false
console.log("" == false);
console.log("" === false);
console.log(null == undefined); // true 같은 것으로 간주됨
console.log(null === undefined); // false

// 8. Conditional operators: if
// if, else if, else
const name = "ellie";
if (name === "ellie") {
  console.log("Welcome, Ellie!");
} else if (name === "coder") {
  console.log("You are amazing coder");
} else {
  console.log("unknown");
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === "ellie" ? "yes" : "no");
// 간단할 때만 사용.

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TX
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
  case "Firefox":
    console.log("love you!");
    break;
  default:
    console.log("same all!");
    break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}
// 이렇게 nesting해서 작성하는 것은 Big O(n**2)이므로 CPU에 좋지 않다. 되도록 피하자.

// break, continue
// break는 아예 끝, continue는 지금 것만 skip하고 다시 다음 작업으로 넘어감.
// Q1. iterate from 0 to 10 and print only even numbers
for (i = 0; i < 11; i++) {
  if (i % 2 == 0) {
    console.log(`even numbers: ${i}`);
  }
}
// use continue
// for (i = 0; i < 11; i++) {
//     if (i % 2 !== 0) {
//         continue;
//     }
//     console.log(`even numbers: ${i}`);
//   }
// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (i = 0; i <= 10; i++) {
  if (i > 8) {
    break;
  } else {
    console.log(`use break: ${i}`);
  }
}
