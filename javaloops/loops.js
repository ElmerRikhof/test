
// let colors = ['yellow', 'blue', 'red', 'orange'];

// for (let colors = "yellow"; colors <= 4; colors++){
//     console.log (colors);
// };



// for (let score = 60; score <= 100; score++){
//     console.log ("For scoring" + score + "points, you get an "+ assignGrade(score))
//   }





const colors = ['yellow', 'blue', 'red', 'orange'];

let i = 0;

while (i < colors.length) {
    console.log(colors[i]);
    i++;
};


const colors = ['yellow', 'blue', 'red', 'orange'];

for (let i = 0; i < colors.length; i++) {
    console.log (colors[i]);
};



const colors = ['yellow', 'blue', 'red', 'orange'];

colors.forEach(element => console.log(element));





let person = {
name: 'A',
age: 'B',
length: 'C',
height: 'D',
dept: 'E'
};

for (let i in person) {
   console.log(person[i]);
}