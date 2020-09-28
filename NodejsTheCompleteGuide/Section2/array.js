
const hobbies = ['Cooking', 'Listening Music', 'Badminton'];

for (let hobby of hobbies) {
    console.log(hobby);
}

console.log(hobbies.map(hobby => {
    return 'Hobby: '+hobby
})); 
console.log(hobbies);