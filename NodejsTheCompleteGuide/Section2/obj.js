const person = {
    name: 'Abhinav',
    age: 26,
    // greet: () => {
    //     console.log('Hi, I am '+this.name);
    // }
    greet() {
        console.log('Hi, I am '+this.name);
    }
}

person.greet();