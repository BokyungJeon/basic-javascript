// ES6(2015)
// Shorthand property names, Destructuring assignment, Spread syntax,
// Default parameters, Ternary Operator, Template Literals

// ES11(2020)
// Optional chaining
// Nullish coalescing operator

// ES6

// Shorthand property names
{
  const ellie1 = {
    name: "Ellie",
    age: "18",
  };

  const name = "Ellie";
  const age = "18";

  // Bad
  const ellie2 = {
    name: name,
    age: age,
  };

  // Good
  const ellie3 = {
    name,
    age,
  };

  console.log(ellie1, ellie2, ellie3);
}

// Destructuring Assignment
// const { name, level } = student;
// const [first, second] = animals;
// http://developer.mozilla.org/ko/docs/Web/JavaScript/Refernce
{
  // object
  const student = {
    name: "Anna",
    level: 1,
  };

  // Bad
  {
    const name = student.name;
    const level = student.level;
    console.log(name, level);
  }

  // Good
  {
    const { name, level } = student;
    console.log(name, level);

    // 키값을 바꿔서 설정할 수 도 있음
    const { name: studuentName, level: studentLevel } = student;
    console.log(studuentName, studentLevel);
  }

  // array
  const animals = ["dog", "cat"];

  // Bad
  {
    const first = animals[0];
    const second = animals[1];
    console.log(first, second);
  }

  // Good
  {
    const [first, second] = animals;
    console.log(first, second);
  }
}

// Spread Syntax
// const fruits = [...fruites1, ...fruites2];
// const dog = { ...dog1, ...dog2 };
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference
{
  const obj1 = { key: "key1" };
  const obj2 = { key: "key2" };
  const array = [obj1, obj2];

  // array copy
  const arrayCopy = [...array];
  console.log(array, arrayCopy);

  // copy하면서 동시에 추가 가능
  const arrayCopy2 = [...array, { key: "key3" }];
  console.log(array, arrayCopy, arrayCopy2);

  // 참조 주속값을 복사하는 것이므로 원 배열의 값이 변경되면 복사된 전체에 영향을 미침
  obj1.key = "newKey";
  console.log(array, arrayCopy, arrayCopy2);

  //object copy
  const obj3 = { ...obj1 };
  console.log(obj3);

  // array concatenation
  const fruits1 = ["🍑", "🍓"];
  const fruits2 = ["🍌", "🥝"];
  const fruits = [...fruits1, ...fruits2];
  console.log(fruits);

  // object merge
  const dog1 = { dog1: "🐕" };
  const dog2 = { dog2: "🐩" };
  const dog = { ...dog1, ...dog2 };
  console.log(dog);
  // 키 값이 같은 경우 뒤쪽에 있는 오브젝트가 앞을 덮어씀
  const dog3 = { dog: "🐕" };
  const dog4 = { dog: "🐩" };
  const dogdog = { ...dog3, ...dog4 };
  console.log(dogdog);
}

// Default parameters
// function printMessage(message = 'default message') { console.log(message); }
{
  // Good
  {
    function printMessage(message = "default message") {
      console.log(message);
    }

    printMessage("hello");
    printMessage();
  }
}

// Ternary Operator
// const component = isCat ? '🐱' : '🐶';
{
  const isCat = true;

  //Bad
  {
    let component;
    if (isCat) {
      component = "🐱";
    } else {
      component = "🐶";
    }
    console.log(component);
  }

  // Good
  {
    const component = isCat ? "🐱" : "🐶";
    console.log(component);
  }
}

// Template Literals
// `Today weather is ${weather} and temparature is ${temparature}.`
{
  const weather = "🌤";
  const temparature = "16℃";

  // Bad
  console.log(
    "Todat weather is " + weather + "and temparature is " + temparature
  );

  // Good
  console.log(`Today weather is ${weather} and themparature is ${temparature}`);
}

// ES11

// Optional chaining
// console.log(person.job?.manager?.name);
{
  const person1 = {
    name: "Ellie",
    job: {
      title: "S/W Engineer",
      manager: {
        name: "Bob",
      },
    },
  };
  const person2 = {
    name: "Bob",
  };

  // Worst
  {
    function printManager(person) {
      console.log(person.job.manager.name);
    }
    printManager(person1);
    // printManager(person2); // 값이 없어 오류남
  }

  // Worse
  {
    function printManager(person) {
      console.log(
        person.job
          ? person.job.manager
            ? person.job.manager.name
            : undefined
          : undefined
      );
    }
    printManager(person1);
    printManager(person2);
  }

  // Bad
  {
    function printMessage(person) {
      console.log(person.job && person.job.manager && person.job.manager.name);
    }
    printManager(person1);
    printManager(person2);
  }

  // Good
  {
    function printManager(person) {
      console.log(person.job?.manager?.name);
    }
    printManager(person1);
    printManager(person2);
  }
}

// Nullish Coalescing Operator
// const name = '';
// const userName = name ?? 'Guest';
// console.log(userName);
// const num = 0;
// const message = num ?? 'undefined';
// console.log(message);
{
  // Logical OR operator
  // false: false, '', 0, null, undefined
  {
    const name = "Ellie";
    const userName = name || "Guest";
    console.log(userName);
  }
  {
    const name = null;
    const userName = name || "Guest";
    console.log(userName);
  }

  // Bad
  // 빈 문자열이나 0도 false로 취급되어 버그가 발생할 수 있음
  {
    const name = "";
    const userName = name || "Guest";
    console.log(userName);
    const num = 0;
    const message = num || "undefined";
    console.log(message);
  }

  //Good
  {
    const name = "";
    const userName = name ?? "Guest";
    console.log(userName);
    const num = 0;
    const message = num ?? "undefined";
    console.log(message);
  }
}
