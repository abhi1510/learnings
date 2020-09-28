const name = "Abhinav";
var age = 25;
const hasHobbies = true;

age = 26;

const summarizeUser = (name, age, hasHobbies) => {
    return 'Name is '+name+ ', age is '+age+' and the user has hobbies: '+hasHobbies;
}

const add = (a, b) => {
    return a+b;
}

const addOne = a => {
    return a+1;
}

const getRandom = () => {
    return Math.random();
}

console.log(summarizeUser(name, age, hasHobbies));
console.log(add(3,5));
console.log(addOne(5));
console.log(getRandom());
