// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join(", and ");
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  const result = fruits.split(",");
  const result1 = fruits.split(",", 2); // 두번째인자: limit 전달받을 갯수
  const result2 = fruits.split(); // 구분자가 없으면 하나로 묶여 배열에 들어감
  console.log(result);
  console.log(result1);
  console.log(result2);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array); // 원래의 배열도 값이 변함
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  //   const result = array.splice(0, 2); // 배열 자체에서 데이터를 삭제(수정). 새로운 배열 X
  const result = array.slice(2, 5); // 새로운 배열은 slice
  console.log(result);
  console.log(array);
}

// Q5 ~
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, true, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  //   const result = students.find(function (student, index) {
  //     console.log(student, index)
  //     return student.score === 90;
  //   });
  const result = students.find((student) => student.score === 90);
  console.log(result);
} // .find의 arraw function은 배열마다 호출이 되고, 콜백함수의 리턴값이 트루인 배열을 첫번째로 만나면 그 배열 값을 리턴함

// Q6. make an array of enrroled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
} // .filter는 콜백함수를 전달해 콜백함수의 리턴값이 true인 것들을 새로운 배열로 만들어 전달한다.

// Q7. make an array containing only the students's scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score * 2);
  console.log(result);
} // .map은 배열 안의 요소들 하나하나를 다른 값으로 변환해준다. 지정된 콜백함수를 호출해 각각의 요소를 함수를 거쳐 새로운 값으로 변환해 리턴한다.
// 콜백함수에서 인자이름은 쵀대한 이해하기 쉽게 짓는다. 의미없는 item, value등의 이름을 지어서 쓰면 한 눈에 값의 의미를 이해하기 힘들어 복잡해지고 길어지면 어렵다.

// Q8. check if there is a student with the score lower than 50
{
  console.clear();
  const result = students.some((student) => student.score < 50);
  console.log(result); // .some : 배열의 요소 중 콜백함수 리턴값이 true가 있는지 없는지 확인해줌. 하나라도 있으면 true.

  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2);
  // every는 배열에 있는 모든 요소들이 조건을 만족해야지 true를 리턴
  console.log(!true);
  // !를 앞에 붙이면 true는 false로, false는 true로 값을 반대로 리턴
}

console.clear();
// Q9. compute students' average score
{
  // const result = students.reduce((prev, curr) => {
  //   console.log("----------");
  //   console.log(prev);
  //   console.log(curr);
  //   return prev + curr.score;
  // }, 0);
  // console.log(result)
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
  // .reduce는 모든 배열을 하나씩 돌면서 값을 누적할 때 사용한다.
  // .reduce의 콜백함수의 curr에 배열이 하나씩 순차적으로 전달되고 prev에 이전배열이 들어간 콜백함수의 리턴값이 전달된다.
  // .reduce(콜백함수, 초기값)을 설정하면 초기값이 처음 콜백함수 prev에 들어가고 curr에 배열이 하나씩 들어가서 실행된다.
  // .reduceRight은 배열의 제일 뒤에서 부터 시작
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score > 50)
    .join(", ");
  console.log(result);
  // .join .split .reverse .slice .find .filter .map .some .every .reduce
  // 배열 자체를 반환하기 때문에 operation(API)를 섞어서 사용할 수 있다.
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b) // 반대정렬 b - a
    .join();
  console.log(result);
}
