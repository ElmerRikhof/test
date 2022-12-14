




// function assignGrade(score) {
//     if (score > 90) {
//       return "A";
//     } else if (score > 80) {
//       return "B";
//     } else if (score > 70) {
//       return "C";
//     } else if (score > 65) {
//       return "D";
//     } else {
//       return "E";
//     }
//   }

// const assignGrade = function () {
//     while(score > 90) {
//         console.log("E");
//         age++;
//         }  else if (score > 80) {
//             return "B";
//           } else if (score > 70) {
//             return "C";
//           } else if (score > 65) {
//             return "D";
//           } else {
//             return "E";
//           }

// };


//   console.log(assignGrade(60));
  
// var score = 60;

// while(score < 65) {
// console.log("D");
// age++;
// }



// const assignGrade = function(score) {
//     if (score > 90) {
//         return "A";
//     } else if (score > 80) {
//         return "B";
//     } else if (score > 70) {
//         return "C";
//     } else if (score > 65) {
//         return "D";
//     } else {
//         return "F";
//     }
// };

// for (let i = 60; i <= 100; i++) {
//     console.log("For " + i + " points, you'll get a(n) " + assignGrade(i));
// }



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

  for (let score = 60; score <= 100; score++){
    console.log ("For scoring" + score + "points, you get an "+ assignGrade(score))
  }
