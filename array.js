"use strict";

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["사과", "바나나"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

console.clear();
// 3. Looping over an array
// print all fruits

// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
// fruits.forEach(function (fruit, index, array) {
//   console.log(fruit, index, array);
// });
// 보통은 array는 받아오지 않음
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push("딸기", "복숭아");
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift("딸기", "레몬");
console.log(fruits);

// shift: remove an item from the beginnig
fruits.shift();
fruits.shift();
console.log(fruits);

// note! shift, unshift are slower than pop, push
// shift, unshift는 데이터 전체를 움직여아 하므로 정말 느리다.
// pop과 push는 뒤에서 바로, 혹은 index로 접근하는 것은 빠르니 이걸 사용하자.
// bigO, 알고리즘, 정렬 관련

// splice: removean item by index position
fruits.push("딸기", "복숭아", "레몬");
console.log(fruits);
fruits.splice(1, 1); // .splice(인덱스, 갯수) 지우려는 갯수 옵션을 주지 않으면 지정한 인덱스 부분 이후를 다 지움
console.log(fruits); // 삭제되고 나머지 요소들이 return됨
fruits.splice(1, 1, "청사과", "수박"); // 지워진 자리에 지정한 데이터가 들어감. 두번째인자 0으로 주면 추가만 가능.
console.log(fruits);

// combine two arrays
const fruits2 = ["배", "코코넛"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf("사과"));
console.log(fruits.indexOf("수박"));
console.log(fruits.indexOf("코코넛")); // -1 출력(배열안에 원하는 값이 없으면)

// includes
console.log(fruits.includes("사과")); // true
console.log(fruits.includes("코코넛")); // false

// lastIndexOf
console.clear();
fruits.push("사과");
console.log(fruits);
console.log(fruits.indexOf("사과")); // (같은 값이 있을 때)제일 첫번째 값을 출력
console.log(fruits.lastIndexOf("사과")); // 제일 마지막 값을 출력
