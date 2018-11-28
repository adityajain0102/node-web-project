//Our motto is to define callback

var getUser= (id,name, callback)=> {
//internally we are creating a sample obj to catch the values
    var user ={
        id: id,
        name: name
    };

    setTimeout(()=> {
        callback(user);
    }, 300);
    
};


//callback with return value 
getUser('23', 'Aditya', (userObject) => {
console.log(userObject);
});