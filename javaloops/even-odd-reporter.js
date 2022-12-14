for (let i = 0; i <= 20; i++) {
    // console.log(`Is ${i} even or odd?`);
    if (i % 2 == 0 ) {
        console.log(`${i} is even`)
    }
    else console.log(`${i} is odd`)

  }


  for (let i = 1; i <= 10; i++) {
    const f = i * 9;
console.log (`${i} x 9 = ${f}`)
  }


  for (let i = 1; i <= 10; i++) {
    const f = i * 1;
console.log (`1 x ${i} = ${f}`)
  }


  function assignGrade(score) {
    
    if (score > 90) {
      return "A";
    } else if (score > 80) {
      return "B";
    } else if (score > 70) {
      return "C";
    } else if (score > 65) {
      return "D";
    } else {
      return "E";
    }
  };

  for (score = 60; score++;)
  console.log(assignGrade(60))

  for (score = 60; score <= 90; score++){
    console.log (`For scoring ${score} points, you get an`)
  }

