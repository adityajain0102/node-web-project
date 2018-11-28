const request = require('request');

var geocodeAddress = (address) => {
   return new Promise((resolve, reject)=> {

    var encodedAddress=encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    
    }, (error, response, body)=> {
    if(error){
        reject('unable to connect to google server');
    }
    else if (body.status === "OVER_QUERY_LIMIT")
    {
        reject('Key access to Google maps is deprecated');
    }
    else if(body.status === 'ZERO_RESULTS')
    {
        callback('Unable to find that address');
    }
    else if (body.status === "OK"){
        resolve({
            Address: body.results[0].formatted_address       
        }); 
        // callback(JSON.stringify(body, undefined, 2)); 
     }
    }); 
   });
};


geocodeAddress('19147').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {

        console.log(errorMessage)
});

// const request = require('request');

// var geocodeAddress = (address) => {
//   return new Promise((resolve, reject) => {
//     var encodedAddress = encodeURIComponent(address);

//     request({
//       url: `https://maps.gooleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
//       json: true
//     }, (error, response, body) => {
//       if (error) {
//         reject('Unable to connect to Google servers.');
//       } else if (body.status === 'ZERO_RESULTS') {
//         reject('Unable to find that address.');
//       } else if (body.status === 'OK') {
//         resolve({
//           address: body.results[0].formatted_address,
//           latitude: body.results[0].geometry.location.lat,
//           longitude: body.results[0].geometry.location.lng
//         });
//       }
//     });
//   });
// };

// geocodeAddress('00000').then((location) => {
//   console.log(JSON.stringify(location, undefined, 2));
// }, (errorMessage) => {
//   console.log(errorMessage);
// });
