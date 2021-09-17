"use strict";

// JavaScript is synchronous. 자바스크립트는 동기적이다.
// Execute the code block in order after hoisting. 호이스팅된 후 코드가 작성한 순서에 따라 하나하나씩 실행된다.
// hoisting: var, function declaration. var변수와 함수선언들이 제일 위로 올라감.
console.log("1");
console.log("2");
console.log("3");
// 1, 2, 3 차례대로 출력됨

console.log("---------------");
console.log("1");
// setTimeout()라는 웹 API는 브라우저에서 제공되는 API로 지정된 시간이 지나면 전달한 콜백함수를 호출(인자로 전달한 함수를 불러줘)
// 브라우저 API는 일단 브라우저에게 먼저 요청을 보냄. 브라우저야 1초뒤에 전달된 콜백을 실행해줘.
setTimeout(() => console.log("2"), 1000); // 1초 = 1000ms
// 응답을 기다리지 않고 다음 줄로 넘어감
console.log("3");
// 1초 지나면 브라우저가 콜백함수 실행하라고 해서 2가 출력됨
// asyncronous 비동기적인 실행 방법(개념)

// Synchronous callback
// 즉각 실행하는 동기콜백
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello"));

// Asynchronous callback
// 나중에, 언제 실행할지 예측할 수 없는 비동기콜백
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000);

// Callback Hell example
// 원래는 사용자가 로그인하면 로그인안의 사용자 정보 안에 관련된 정보들을 백엔드에서 한번에 받아와야함
// 사용자의 역할을 따로 백앤드에 요청해서 받아와야하는 나쁜 백앤드라고 가정
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSucess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSucess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
// 콜백지옥의 문제점: 콜백안에서 콜백을 전달 전달 전달전달...
// 가독성이 떨어진다. 비즈니스 로직을 한눈에 이애하기 어렵다.
// 에러, 디버깅 시 굉장히 굉장히 어렵다.
// 유지보수 어렵다.
