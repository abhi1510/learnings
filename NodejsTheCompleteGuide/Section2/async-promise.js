// using callback
// const fetchData = callback => {
//     setTimeout(() => {
//         callback('Done!')
//     }, 1500);
// }

// setTimeout(() => {
//     console.log('Timer is done now!');
//     fetchData((res) => {
//         console.log(res);
//     })
// }, 2000);


//using promise
const fetchData = callback => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!!!');
        }, 1500)
    });
    return promise;
}

setTimeout(() => {
    console.log('Timer is done now!');
    fetchData()
        .then(res => {
            console.log(res);
            return fetchData();
        })
        .then(res => {
            console.log(res);
        });
}, 2000);

console.log('Welcome to Async');