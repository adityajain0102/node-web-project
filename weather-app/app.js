
const yargs = require('yargs');
const geocode = require('../geocode/geocode.js');
const weatherapp = require('../weather-app/weatherapi');

//while calling this request it takes two arguments 
//1 options 2 callback function

const argv = yargs.options({
    address: {
        demand: true,
        describe: 'Address to fetch for weather',
        alias:'a',
        string: true
    }
}).help().alias('help', 'h').argv;


geocode.geocodeaddress(argv.address, (errorMessage, results)=> {

    if(errorMessage){
        console.log(errorMessage);
    }

    else
    {
        console.log(JSON.stringify(results), undefined, 2)
    
    //here we are including the weather app code to pass the geocode result address value lat and lng based on this we will get the weather results lets goo

    weatherapp.getWeather(results.latitude, results.longitude, (errorMessage, weatherresults)=> {
        if(errorMessage)
        {
            console.log(errorMessage);
        }
        else
        {
           // console.log(JSON.stringify(weatherresults, undefined, 2));
            console.log(`It's currently ${weatherresults.temperature}. It feels like ${weatherresults.apparentTemperature} .`)
        }
    });
    }
});
 

//lat , lng, callback
//37.8267 -122.4233
// weatherapp.getWeather(37.8267, -122.4233, (errorMessage, weatherresults)=> {
//     if(errorMessage)
//     {
//         console.log(errorMessage);
//     }
//     else
//     {
//         console.log(JSON.stringify(weatherresults, undefined, 2));
//     }
// });