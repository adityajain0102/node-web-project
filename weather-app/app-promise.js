const yargs = require('yargs');

const axios = require('axios');
//while calling this request it takes two arguments 
//1 options 2 callback function

const argv = yargs.options({
    address: {
        demand: true,
        describe: 'Address to fetch for weather',
        alias:'a',
        string: true
    }
}).help().alias('help', 'h')
.argv;

var encodedAddress=encodeURIComponent(argv.address);
var geocodeurl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

//axios.get return promise we use then
axios.get(geocodeurl).then((response) => {

    if(response.data.status === 'OVER_QUERY_LIMIT')
    {
        throw new Error('Unable to find that address');
    }

var lat = response.data.results[0].geometry.location.lat;
var lng = response.data.results[0].geometry.location.lng;

var  weatherurl = `https://api.darksky.net/forecast/a3b4862e9775c2cd32af967674fd70cd/${lat},${lng}`;

    console.log(response.data);
    //returning new promise from weather
return axios.get(weatherurl);
}).then((response)=> {

    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`Its currently ${temperature}. It feels like ${apparentTemperature}`);
}).catch((e) => {

    if(e.code === 'ENOTFOUND')
    {
        console.log('unable to connect to API server')
    }
    else 
    {
        console.log(e.message);
    }
   // console.log(e);
});
