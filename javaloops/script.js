// console.log("Hello Winc Academy students")



// var myAge = 31;
// if (myAge > 30) {
//     document.write("you are over 30");
// } else if (myAge > 20) {
//     document.write("you are over 20");
// } else if (myAge > 10) {
//     document.write("you are over 20");
// } else  {
//     document.write("you are not over 10");
// }


// const age = 17;
// if (age > 18) {
//     console.log("You're allowed in");
// } else if (age < 18) {
//     console.log("You're not allowed in");
// } 

// const isFemale = true;
// if (isFemale) {
//     console.log("You're allowed in");
// } else {
//     console.log("You're not allowed in");
// } 

// var designatedd = false;
// const driverStatus = "designated";
// if (driverStatus === "designatedd") {
//     console.log("Allowed to drive");
// } else {
//     console.log("Not allowed to drive");
// }


// var myAge = 17;
// if (myAge >= 18 && myAge <= 25) {
// document.write("you get 50% off!")
// } else {
//     document.write("you can come")
// }

// const firstName = "sara";
// if (firstName == "bram" || firstName == "sarah" ) {
//     document.write("fee beer")
// } else {
//     document.write("no fee beer")
// }

// const totalAmount = 100;
// if (totalAmount >=100) {
//     document.write("Then you get free champagne")
// } else if (totalAmount > 50) {
//     document.write("Then you get a free portion of nachos")
// } else if (totalAmount > 25) {
//     document.write("Then you get a free portion of bitterballs")
// } else {
//     document.write("notting")
// }

// let person = {
//     name: 'Elmer',
//     age: 35
// }
// console.log (person ['name']);


// let evaluations = ['7', '10', '9']
// console.log (evaluations);


// let colors = ['red', 'blue', 'green'];
// let count = colors.push('cows', '1', {greeting: "hi, I am an object"});
// // colors [3] = '1';
// console.log (colors [5]);

const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
    food: {favourite_food: "fish",
    medium_liked_food: "dried fruits", 
    disliked_food: "walnuts"
    }},
    {name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: [ "Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {favourite_food: "tuna",
    medium_liked_food: "canned food", 
    disliked_food: "all fruits"
    }},
    {name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: [ "Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {favourite_food: "meaty things",
    medium_liked_food: "tuna", 
    disliked_food: "canned food"
    }}
    ]

    console.log(catBreeds[2].food.favourite_food);