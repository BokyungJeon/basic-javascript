// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join(", and ");
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = "๐, ๐ฅ, ๐, ๐";
  const result = fruits.split(",");
  const result1 = fruits.split(",", 2); // ๋๋ฒ์งธ์ธ์: limit ์ ๋ฌ๋ฐ์ ๊ฐฏ์
  const result2 = fruits.split(); // ๊ตฌ๋ถ์๊ฐ ์์ผ๋ฉด ํ๋๋ก ๋ฌถ์ฌ ๋ฐฐ์ด์ ๋ค์ด๊ฐ
  console.log(result);
  console.log(result1);
  console.log(result2);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array); // ์๋์ ๋ฐฐ์ด๋ ๊ฐ์ด ๋ณํจ
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  //   const result = array.splice(0, 2); // ๋ฐฐ์ด ์์ฒด์์ ๋ฐ์ดํฐ๋ฅผ ์ญ์ (์์ ). ์๋ก์ด ๋ฐฐ์ด X
  const result = array.slice(2, 5); // ์๋ก์ด ๋ฐฐ์ด์ slice
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
} // .find์ arraw function์ ๋ฐฐ์ด๋ง๋ค ํธ์ถ์ด ๋๊ณ , ์ฝ๋ฐฑํจ์์ ๋ฆฌํด๊ฐ์ด ํธ๋ฃจ์ธ ๋ฐฐ์ด์ ์ฒซ๋ฒ์งธ๋ก ๋ง๋๋ฉด ๊ทธ ๋ฐฐ์ด ๊ฐ์ ๋ฆฌํดํจ

// Q6. make an array of enrroled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
} // .filter๋ ์ฝ๋ฐฑํจ์๋ฅผ ์ ๋ฌํด ์ฝ๋ฐฑํจ์์ ๋ฆฌํด๊ฐ์ด true์ธ ๊ฒ๋ค์ ์๋ก์ด ๋ฐฐ์ด๋ก ๋ง๋ค์ด ์ ๋ฌํ๋ค.

// Q7. make an array containing only the students's scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score * 2);
  console.log(result);
} // .map์ ๋ฐฐ์ด ์์ ์์๋ค ํ๋ํ๋๋ฅผ ๋ค๋ฅธ ๊ฐ์ผ๋ก ๋ณํํด์ค๋ค. ์ง์ ๋ ์ฝ๋ฐฑํจ์๋ฅผ ํธ์ถํด ๊ฐ๊ฐ์ ์์๋ฅผ ํจ์๋ฅผ ๊ฑฐ์ณ ์๋ก์ด ๊ฐ์ผ๋ก ๋ณํํด ๋ฆฌํดํ๋ค.
// ์ฝ๋ฐฑํจ์์์ ์ธ์์ด๋ฆ์ ์ต๋ํ ์ดํดํ๊ธฐ ์ฝ๊ฒ ์ง๋๋ค. ์๋ฏธ์๋ item, value๋ฑ์ ์ด๋ฆ์ ์ง์ด์ ์ฐ๋ฉด ํ ๋์ ๊ฐ์ ์๋ฏธ๋ฅผ ์ดํดํ๊ธฐ ํ๋ค์ด ๋ณต์กํด์ง๊ณ  ๊ธธ์ด์ง๋ฉด ์ด๋ ต๋ค.

// Q8. check if there is a student with the score lower than 50
{
  console.clear();
  const result = students.some((student) => student.score < 50);
  console.log(result); // .some : ๋ฐฐ์ด์ ์์ ์ค ์ฝ๋ฐฑํจ์ ๋ฆฌํด๊ฐ์ด true๊ฐ ์๋์ง ์๋์ง ํ์ธํด์ค. ํ๋๋ผ๋ ์์ผ๋ฉด true.

  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2);
  // every๋ ๋ฐฐ์ด์ ์๋ ๋ชจ๋  ์์๋ค์ด ์กฐ๊ฑด์ ๋ง์กฑํด์ผ์ง true๋ฅผ ๋ฆฌํด
  console.log(!true);
  // !๋ฅผ ์์ ๋ถ์ด๋ฉด true๋ false๋ก, false๋ true๋ก ๊ฐ์ ๋ฐ๋๋ก ๋ฆฌํด
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
  // .reduce๋ ๋ชจ๋  ๋ฐฐ์ด์ ํ๋์ฉ ๋๋ฉด์ ๊ฐ์ ๋์ ํ  ๋ ์ฌ์ฉํ๋ค.
  // .reduce์ ์ฝ๋ฐฑํจ์์ curr์ ๋ฐฐ์ด์ด ํ๋์ฉ ์์ฐจ์ ์ผ๋ก ์ ๋ฌ๋๊ณ  prev์ ์ด์ ๋ฐฐ์ด์ด ๋ค์ด๊ฐ ์ฝ๋ฐฑํจ์์ ๋ฆฌํด๊ฐ์ด ์ ๋ฌ๋๋ค.
  // .reduce(์ฝ๋ฐฑํจ์, ์ด๊ธฐ๊ฐ)์ ์ค์ ํ๋ฉด ์ด๊ธฐ๊ฐ์ด ์ฒ์ ์ฝ๋ฐฑํจ์ prev์ ๋ค์ด๊ฐ๊ณ  curr์ ๋ฐฐ์ด์ด ํ๋์ฉ ๋ค์ด๊ฐ์ ์คํ๋๋ค.
  // .reduceRight์ ๋ฐฐ์ด์ ์ ์ผ ๋ค์์ ๋ถํฐ ์์
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
  // ๋ฐฐ์ด ์์ฒด๋ฅผ ๋ฐํํ๊ธฐ ๋๋ฌธ์ operation(API)๋ฅผ ์์ด์ ์ฌ์ฉํ  ์ ์๋ค.
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b) // ๋ฐ๋์ ๋ ฌ b - a
    .join();
  console.log(result);
}
