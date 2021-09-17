"use strick";

// Promise is a JavaScript object for asynchronous operation.
// state: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
// Promise()를 만드는 순간 executer(resolve)함수가 바로 실행됨
// 네트워크 요청을 사용자가 요구했을 때만(ex.버튼클릭) 해야하면 promise는 불필요한 요청을 바로 전달하므로 적절하지 않다.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files) 네트워크에서 데이터 받아오기, 파일에서 큰 데이터 읽어오기 등 시간이 걸리는 일
  console.log("doing something...");
  setTimeout(() => {
    // resolve("ellie");
    reject(new Error("no network")); // new Error 자바스크립트가 제공하는 오브젝트
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  }) // .then을 호출하게 되면 .then은 결국 똑같은 promise를 return하기 때문에 리턴된 promise의 catch를 다시 호출할 수 있다. 체이닝 chaining.
  .finally(() => {
    console.log("finally");
  }); // .finally는 성공하든 실패하든 상관없이 마지막으로 무조건 호출됨

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  }) // then은 값을 바로 전달해도 되고 또 다른 Promise를 전달해도 된다.
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${"🐓"}`), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() // (프리티어가 한줄로 정렬 수정해주는 것 막기위해서는 함수명 옆에 주석표시를 해주면 됨)
  //   .then((hen) => getEgg(hen))
  //   .then((egg) => cook(egg))
  //   .then((meal) => console.log(meal));
  // 콜백함수 전달할 때 받아오는 value를 똑같이 바로 다음 함수로 전달하는 경우 생략 가능.
  .then(getEgg)
  .catch((error) => {
    return "🥖";
  }) // 에러를 다른 방식으로 해결하고 싶으면 바로 다음에 캐치를 작성해 애러를 처리한다.
  .then(cook)
  .then(console.log)
  .catch(console.log); // 마지막에 캐치하게 되면 중간에 에러가 발생해도 마지막에 캐치가 됨
