// var somePromise = new Promise((resolve, reject) => {

//     // resolve('Hey its worked');
//     reject('Unable to fulfill promise')
// });

// somePromise.then(message => {
// console.log('Success: ', message);
// }, (errorMessage)=> {
// console.log('Error: ', errorMessage);
// });

// promise with input values

var asyncadd = (a, b) => {

//we are defining promise with return keyword

return new Promise((resolve, reject) => {

        if(typeof a === 'number' && typeof b === 'number')
        {
            resolve (a + b)
        }
        else{
            reject('Arguments must be numbers');
        }
    })
};

//method 1 with promise with multi error handlers
// asyncadd(5,7).then((result) => {

//         console.log('Result :', result);
//         return asyncadd(result, 33)
//     }, (errorMessage)=> {
//     console.log(errorMessage);
    
// }).then((result)=> {
//     console.log('Result should be 45 : ', result);

// }, (errorMessage) => {

//         console.log(errorMessage);
// });


//method2 simplifies error handler more feasible

asyncadd(5, '7').then((result) =>{

    console.log('Result :', result);
    return asyncadd(result, 33);
}).then((result)=> {
    console.log('Result should be: ', result);
}).catch((errorMessage) => {

        console.log(errorMessage);
})