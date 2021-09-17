"use strict";
// promise들을 여러 개 엮어 chaining을 할 수 있는데 그러면 코드가 난잡해 질 수 있다.
// 기존 promise 위에 또는 감싸서 사용하기 간편한 API로 사용할 수 있다. (Syntatic sugar)
// ex. 자바스크립트에서 class: prototype을 base로 그 위에 덧붙여진 그럴싸해보이는 Syntatic sugar.
// promise사용 시 async와 await을 사용하면 동기식 코드를 순서대로 작성하는 것처럼 개발자가 편하게 사용할 수 있다.(Syntatic Sugar)

// async & await
// clear style of using promise. 깔끔하게 promise를 사용할 수 있는 방법
// 그렇다고 무조건 async가 좋은 것은 아니고 때에 따라 promise로 사용해야 하는 경우도 있다.

// 1. async
// function fetchUser() {
//   //   // do network request in 10 secs...
//   //   return "ellie";
//   return new Promise((resolve, reject) => {
//     // do network request in 10 secs...
//     // return "ellie"; // resolve, reject를 호출하지 않고 return을 하면 Promise가 <pending>된 상태로 남아있는다.
//     resolve("ellie");
//   });
// }
async function fetchUser() {
  // do network request in 10 secs...
  return "ellie";
}
// async를 함수 앞에 쓰면 코드블럭이 자동으로 Promise로 바뀐다.

const user = fetchUser();
user.then(console.log);
console.log(user);
// 비동기 처리 하지않으면 여기까지 실행되는데 10초가 걸리고 만약 뒤에 UI를 나타내는 코드들이 있으면 사용자는 10초동안 빈화면을 보게된다.

// 2. await
// async를 쓴 함수 안에서만 사용할 수 있다.
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  //   throw "error";
  return "🍎";
}

async function getBanana() {
  await delay(1000); // await을 쓰면 delay가 끝날때까지 기다렸다가 바나나를 리턴한다.
  return "🍌";
}
// 원래 모양인 promise를 쓰는 함수
// function getBanana() {
//   return delay(3000).then(() => "🍌");
// }

// function pickFruits() {
//   {
//     return getApple().then((apple) => {
//       return getBanana().then((banana) => `${apple} + ${banana}`);
//     });
//   }
// } //콜백지옥

async function pickFruits() {
  //   try {
  const apple = await getApple();
  const banana = await getBanana();
  //   } catch {}
  return `${apple} + ${banana}`;
}
pickFruits().then(console.log);

// await 병렬 처리
// async function pickFruits2() {
//   // promise를 사용하면 바로 실행이 되는 점을 활용해 병렬처리
//   const applePromise = getApple();
//   const bananaPromise = getBanana();
//   const apple2 = await applePromise;
//   const banana2 = await bananaPromise;
//   return `${apple2} + ${banana2}`;
// }
// pickFruits2().then(console.log);
// 이렇게 사용하지 않는다

// 3. useful Promise APIs
// Promise.all: promise들을 배열형태로 전달하면 해당되는 모든 promise들이 병렬적으로 다 받아지면 다시 배열에 담아 전달.
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}
pickAllFruits().then(console.log);

// Promise.race: 배열에 있는 promise들 중 가장 먼저 값을 리턴하는 것 하나만 리턴함
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
