const data = require('./data');
// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

let totalRate = data.reduce((acc, value) => {
    return acc + (+value.rate);
},0);
console.log("RATES AVERAGE " + (totalRate/data.length).toFixed(2));

// Iteration 2: Drama movies - Get the average of Drama Movies
let totalDrama = data.filter(s => s.genre.includes('Drama'));
console.log("DRAMA " + (totalDrama.length/data.length)*100);

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
let a = data.sort((a,b) => (obtainMinute(a.duration) > obtainMinute(b.duration)) ? 1 : (obtainMinute(b.duration) > obtainMinute(a.duration)) ? -1 : 0);
console.log(a);

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
let totalSpil = data.filter(s => s.director.toUpperCase() == 'STEVEN SPIELBERG').length;
console.log("SPILBERG " + totalSpil);

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

let alphabetic = data.sort((a,b) => (a.title > b.title) ? 1 : (b.title > a.title) ? -1 : 0);
console.log("ALPHABETIC");
console.log(alphabetic.slice(0,20));

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
let data3 = data.reduce((acc, value) => {
    value.duration = obtainMinute(value.duration);
    acc.push(value);
    return acc;
},[]);
console.log("ALPHABETIC");
console.log(data3);

// BONUS Iteration: Best yearly rate average - Best yearly rate average

let dictionary = data.reduce((acc, value) => {
    let key = value.year;
    if(!acc[key]) acc[key] = [];
    acc[key].push(value.rate);
    return acc;
},{});

let dictionary2 = {};
console.log(dictionary)
Object.entries(dictionary).forEach(([key, value]) => {
        dictionary2[key] = sumValues(value);
 });
console.log(dictionary2);


function sumValues(array){
    let length = array.length;
    let sum = array.reduce((acc, value) => {
        return(acc+ (+value));
    },0);
    return +(sum/length).toFixed(2);
}
function obtainMinute(s){
    let min = 0;
    let hour = 0;
    let splited = s.split(" ");

    hour = +(splited[0].replace("h",""))*60
    if(splited.length > 1){
        min = +(splited[1].replace("min",""))
    }
    return hour + min;
}