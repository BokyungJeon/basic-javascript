"use strict";
// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createdCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
  console.log("Hello");
}
printHello();

function log(message) {
  console.log(message);
}
log("Hello@");
log(1234); // JS는 타입을 지정하지 않아 숫자를 입력하면 JS가 문자로 인식해서 출력해줌.
// 이 때문에 곤란한 일이 발생할 수도 있으니(규모있는 프로젝트, 여러개발자 협업, 나중에 library형태로 API제공할 때) 타입스크립트를 사용하는 것이 명확허다.
// function log(message: string): number { //input과 output의 데이터 타입을 입력해야한다.
//     console.log(message);
//     return 0;
// }

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = "coder";
}
const ellie = { name: "ellie" };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = "unknown") {
  //   if (from === undefined) {
  //     from = "unknown";
  //   }
  console.log(`${message} by ${from}`);
}
showMessage("Hi!");

// 4. Rest parameters (added in ES6)
// ...을 쓰면 배열형태로 전달된다.
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
  // 배열의 함수 .forEach
}

printAll("dream", "coding", "ellie");

// 5. Local scope
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
// 자식의 함수는 부모의 함수에 정의된 변수에 접근할 수 없다. 이 때 접근가능하게 하는 것이 closure.
let globalMessage = "global"; // global variable
function printMessage() {
  let message = "hello";
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = "hello";
  }
  //   console.log(childMessage); // error
  //   return undefined;
  // return값이 없는 함수는 return undefined;이 생략되어 있는 것이다.
}
printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
    // 가독성이 떨어짐
  }
}

// good
function upgradeUser(user) {
  // 조건이 맞지 않을 때는 빨리 return을 해서 함수를 종료하고
  if (user.point <= 10) {
    return;
  }
  // 조건이 맞을 때 긴 로직들을 실행한다.
  // long upgrade logic...
}

// First-class function
// functions aretreated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
// function expression: 선언과 동시에 변수에 바로 할당 가능. 할당된 다음부터 호출이 가능.
// 반면 function declaration은 호이스팅이 가능하다. 함수가 선언되기 전에 호출이 가능(JS엔진이 선언된 것을 제일 위로 올려주기 때문)
const print = function () {
  // anonymous function 익명함수.
  console.log("print");
};
// const print = function name() { // named function - 뒤에서 조금 더 정리
//     console.log('print')
// };
print(); // 변수를 함수호출하듯이 (); 붙이면 함수가 호출됨.
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}

// anonymou function
const printYes = function () {
  console.log("yes!");
};

// named function
// better debugging in debugger's stack traces
// recursions 함수안에서 자기 자신을 호출 -> 프로그램이 죽으니까(call stack size exceeded)
// 정말 필요할 때 말고(피보나치수 계산, 반복되는 평균값 계산 등) 잘못쓰지 말 것.
const printNo = function print() {
  console.log("no!");
  //   print();
};
randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = () => console.log("simplePrint!");
// const simplePrint = function () {
//   console.log("simplePrint!");
// };
const add = (a, b) => a + b;
// const add = function (a, b) {
//     return a + b;
// }

// block을 사용하고 싶으면 return을 사용해서 값을 return 해주어야함.
const simpleMultiply = (a, b) => {
  // do somethin more
  return a * b;
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
  console.log("IIFE");
})();
// hello();대신 선언하자마자 호출.
// 요즘은 잘 쓰진 않지만 함수를 선언하고 바로 호출하고 싶을 때 사용.

// Quiz time!
// function calculate(command, a, b)
// command: add, substract, devide, multiply, remainder
function calculate(command, a, b) {
  switch (command) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "devide":
      return a / b;
    case multiply:
      return a * b;
    case remainder:
      return a % b;
    default:
      //   console.log("use right command!");
      throw Error("unknown command");
  }
}
console.log(caculate("add", 2, 3));
